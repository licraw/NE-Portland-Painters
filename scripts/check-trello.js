#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const text = fs.readFileSync(filePath, "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;

    let value = rawValue;
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} is missing`);
  return value;
}

async function trello(pathname, query = {}) {
  const url = new URL(`https://api.trello.com/1/${pathname.replace(/^\//, "")}`);
  url.searchParams.set("key", requireEnv("TRELLO_API_KEY"));
  url.searchParams.set("token", requireEnv("TRELLO_API_TOKEN"));
  for (const [key, value] of Object.entries(query)) {
    if (value) url.searchParams.set(key, value);
  }

  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) throw new Error(`Trello API error ${res.status}: ${text || res.statusText}`);
  return text ? JSON.parse(text) : null;
}

async function main() {
  loadEnvFile(path.resolve(process.cwd(), ".env"));
  loadEnvFile(path.resolve(process.cwd(), ".env.local"));

  const key = requireEnv("TRELLO_API_KEY");
  const token = requireEnv("TRELLO_API_TOKEN");
  console.log(`TRELLO_API_KEY loaded (${key.length} chars)`);
  console.log(`TRELLO_API_TOKEN loaded (${token.length} chars)`);

  const member = await trello("members/me", { fields: "username" });
  console.log(`Authenticated as Trello user: ${member.username}`);

  const listId = process.env.TRELLO_LIST_ID?.trim();
  if (listId) {
    const list = await trello(`lists/${listId}`, { fields: "name" });
    console.log(`TRELLO_LIST_ID found: ${list.name}`);
    return;
  }

  const board = requireEnv("TRELLO_BOARD");
  const listName = requireEnv("TRELLO_LIST_NAME");
  const lists = await trello(`boards/${board}/lists`, { fields: "name" });
  const match = lists.find((list) => list.name.trim().toLowerCase() === listName.toLowerCase());

  if (!match) {
    const available = lists.map((list) => list.name).join(", ");
    throw new Error(`No list named "${listName}" on board "${board}". Available lists: ${available}`);
  }

  console.log(`TRELLO_LIST_NAME found: ${match.name} (${match.id})`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
