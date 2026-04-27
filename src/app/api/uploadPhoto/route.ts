/**
 * POST /api/uploadPhoto?taskId=123
 * Multipart endpoint: expects a single <input name="photo" />
 * Keeps each request < 4.5 MB to avoid Vercel’s limit.
 */

import { NextRequest } from "next/server";
import { trelloPostForm } from "@/lib/trello";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    /* 1️⃣  validate query */
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get("taskId");
    if (!taskId) return new Response("missing taskId", { status: 400 });

    /* 2️⃣  parse multipart */
    const form = await req.formData();
    const file = form.get("photo");
    if (!file) return new Response("no file", { status: 400 });
    if ((file as File).size > 4.5 * 1024 * 1024)
      return new Response("file > 4.5 MB", { status: 413 });

    const trelloForm = new FormData();
    trelloForm.append("file", file as File);
    trelloForm.append("name", (file as File).name);

    await trelloPostForm(`cards/${taskId}/attachments`, trelloForm);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("uploadPhoto error", err);
    return new Response(JSON.stringify({ error: "upload failed" }), { status: 500 });
  }
}
