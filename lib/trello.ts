type TrelloEnv = {
  apiKey: string;
  apiToken: string;
};

function getTrelloEnv(): TrelloEnv {
  const apiKey = process.env.TRELLO_API_KEY?.trim();
  const apiToken = process.env.TRELLO_API_TOKEN?.trim();
  if (!apiKey) throw new Error("TRELLO_API_KEY is missing");
  if (!apiToken) throw new Error("TRELLO_API_TOKEN is missing");
  return { apiKey, apiToken };
}

function trelloUrl(path: string, query?: Record<string, string | undefined>) {
  const { apiKey, apiToken } = getTrelloEnv();
  const url = new URL(`https://api.trello.com/1/${path.replace(/^\//, "")}`);
  url.searchParams.set("key", apiKey);
  url.searchParams.set("token", apiToken);
  for (const [k, v] of Object.entries(query ?? {})) {
    if (typeof v === "string" && v.length) url.searchParams.set(k, v);
  }
  return url;
}

export async function trelloJson<T>(
  path: string,
  opts?: { method?: string; query?: Record<string, string | undefined>; body?: BodyInit }
): Promise<T> {
  const url = trelloUrl(path, opts?.query);
  const res = await fetch(url, { method: opts?.method ?? "GET", body: opts?.body });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Trello API error ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

export async function trelloPostForm<T>(
  path: string,
  form: FormData,
  query?: Record<string, string | undefined>
): Promise<T> {
  const url = trelloUrl(path, query);
  const res = await fetch(url, { method: "POST", body: form });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Trello API error ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

