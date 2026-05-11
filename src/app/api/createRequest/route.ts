/**
 * POST /api/createRequest
 * Creates a Trello card for “estimate” or “contact” forms.
 *
 * Expects JSON in the request body — no photos.
 * Photos should be uploaded separately to /api/uploadPhoto?taskId=...
 */

const { NextRequest } = require("next/server");
import { trelloJson } from "@/lib/trello";

export const runtime = "nodejs";

export async function POST(req = new NextRequest()) {
  try {
    /* 1️⃣  parse body */
    const payload = await req.json();
    const {
      formType,
      name,
      email,
      phone,
      address,
      overview,
      zipCode,
      promoCode = "0000",
      howDidYouFindUs,
      paintingAndStain,
      constructionAndRestoration,
    } = payload;

    const requireTrello = process.env.REQUIRE_TRELLO?.trim() === "1";

    let listId = process.env.TRELLO_LIST_ID?.trim();
    if (!listId) {
      const board = process.env.TRELLO_BOARD?.trim(); // board id or shortlink (e.g. WVPptPYI)
      const listName = process.env.TRELLO_LIST_NAME?.trim();
      if (!board || !listName) {
        const details = "Set TRELLO_LIST_ID or set both TRELLO_BOARD and TRELLO_LIST_NAME";
        if (requireTrello) {
          console.error("Trello misconfigured (blocking)", details);
          return new Response(JSON.stringify({ error: "Trello list not configured", details }), {
            status: 500,
          });
        }
        console.warn("Trello misconfigured (non-blocking)", details);
        return new Response(
          JSON.stringify({
            taskId: null,
            cardUrl: null,
            warning: "trello_not_configured",
            details,
          }),
          { status: 200 }
        );
      }

      const lists = await trelloJson<Array<{ id: string; name: string }>>(`boards/${board}/lists`, {
        query: { fields: "name" },
      });
      const match = lists.find((l) => l.name.trim().toLowerCase() === listName.trim().toLowerCase());
      if (!match) {
        const details = `No list named "${listName}" on board "${board}"`;
        if (requireTrello) {
          return new Response(JSON.stringify({ error: "Trello list not found", details }), {
            status: 500,
          });
        }
        console.warn("Trello list not found (non-blocking)", details);
        return new Response(
          JSON.stringify({ taskId: null, cardUrl: null, warning: "trello_list_not_found", details }),
          { status: 200 }
        );
      }
      listId = match.id;
    }

    const title =
      formType === "homeLead"
        ? `New Home Lead Request from ${name}`
        : `New ${formType === "estimate" ? "Estimate" : "Contact"} Request from ${name}`;

    const desc =
      formType === "homeLead"
        ? `Email: ${email}
Phone: ${phone}
Address: ${address}
Zip Code: ${zipCode}
Painting & Stain: ${paintingAndStain}
Construction & Restoration: ${constructionAndRestoration}`
        : `Email: ${email}
Phone: ${phone}
Address: ${address}
Zip Code: ${zipCode}
Overview: ${overview}
Promo Code: ${promoCode}
How did you find us: ${howDidYouFindUs || ""}`.trim();

    const labelIds = (process.env.TRELLO_LABEL_IDS ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .join(",");

    const card = await trelloJson<{ id: string; shortUrl?: string }>("cards", {
      method: "POST",
      query: {
        idList: listId,
        name: title,
        desc,
        ...(labelIds ? { idLabels: labelIds } : {}),
      },
    });

    return new Response(JSON.stringify({ taskId: card.id, cardUrl: card.shortUrl ?? null }), {
      status: 200,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const hint = message.includes("Trello API error 401: invalid key")
      ? "Check Trello credentials. TRELLO_API_KEY must be the Power-Up API key, and TRELLO_API_TOKEN must be an authorized member token, not the Power-Up secret."
      : message.includes("Trello API error 401")
      ? "Regenerate TRELLO_API_TOKEN from the Trello authorize URL with scope=read,write. Do not use the Power-Up secret."
      : undefined;
    console.error("createRequest error", err);
    return new Response(JSON.stringify({ error: "Card creation failed", details: message, hint }), {
      status: 500,
    });
  }
}
