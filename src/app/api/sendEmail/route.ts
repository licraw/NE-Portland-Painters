import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_PER_FILE = 2 * 1024 * 1024; // 2 MB each to stay under Vercel request limits
const MAX_TOTAL = 8 * 1024 * 1024; // cap total payload ~8 MB

function parseBool(v: string | undefined) {
  if (!v) return false;
  return ["1", "true", "yes", "on"].includes(v.trim().toLowerCase());
}

export async function POST(req: NextRequest) {
  try {
    console.log("sendEmail: request received");
    if (parseBool(process.env.SKIP_EMAIL_SEND)) {
      console.log("sendEmail: skipped because SKIP_EMAIL_SEND is enabled");
      return new Response(JSON.stringify({ success: true, skipped: true }), { status: 200 });
    }

    const form = await req.formData();
    const name = (form.get("name") as string) ?? "Unknown";
    const email = (form.get("email") as string) ?? "";
    const formType = (form.get("formType") as string) ?? "contact";
    const bodyText = (form.get("bodyText") as string) ?? "";
    const asanaTaskId = (form.get("asanaTaskId") as string) ?? "";
    const trelloCardUrl = (form.get("trelloCardUrl") as string) ?? "";

    const recipientEmail = process.env.RECIPIENT_EMAIL?.trim();
    if (!recipientEmail) {
      return new Response(
        JSON.stringify({
          error: "email_not_configured",
          details: {
            RECIPIENT_EMAIL: Boolean(recipientEmail),
          },
        }),
        { status: 500 }
      );
    }

    const incomingPhotos = form.getAll("photos") as File[];

    // Enforce per-file and aggregate size to avoid 413s
    const attachments = [];
    let total = 0;
    for (const file of incomingPhotos) {
      if (file.size > MAX_PER_FILE) continue;
      if (total + file.size > MAX_TOTAL) break;
      const buf = Buffer.from(await file.arrayBuffer());
      total += file.size;
      attachments.push({ filename: file.name, content: buf });
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPortRaw = process.env.SMTP_PORT?.trim();
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpSecure = parseBool(process.env.SMTP_SECURE);
    const smtpDebug = parseBool(process.env.SMTP_DEBUG);
    const smtpRequireTlsEnv = process.env.SMTP_REQUIRE_TLS?.trim();
    const smtpRequireTls =
      smtpRequireTlsEnv != null ? parseBool(smtpRequireTlsEnv) : smtpPortRaw === "587" && !smtpSecure;
    const smtpIgnoreTlsErrors = parseBool(process.env.SMTP_IGNORE_TLS_ERRORS);
    const fromEmail = (process.env.EMAIL_FROM ?? smtpUser ?? "").trim();

    let transporter: nodemailer.Transporter;
    if (smtpHost && smtpPortRaw && smtpUser && smtpPass) {
      const smtpPort = Number(smtpPortRaw);
      if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
        return new Response(
          JSON.stringify({ error: "email_not_configured", details: { SMTP_PORT: "invalid" } }),
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure, // true for 465, false for 587/25 typically
        requireTLS: smtpRequireTls,
        auth: { user: smtpUser, pass: smtpPass },
        logger: smtpDebug,
        debug: smtpDebug,
        connectionTimeout: 15_000,
        greetingTimeout: 15_000,
        socketTimeout: 30_000,
        tls: {
          servername: smtpHost,
          ...(smtpIgnoreTlsErrors ? { rejectUnauthorized: false } : {}),
        },
      });
    } else {
      // Back-compat: if you *are* using Gmail, the old vars still work.
      const emailUser = process.env.EMAIL_USER?.trim();
      const emailPass = process.env.EMAIL_PASS?.trim();
      if (!emailUser || !emailPass) {
        return new Response(
          JSON.stringify({
            error: "email_not_configured",
            details: {
              RECIPIENT_EMAIL: Boolean(recipientEmail),
              SMTP_HOST: Boolean(smtpHost),
              SMTP_PORT: Boolean(smtpPortRaw),
              SMTP_USER: Boolean(smtpUser),
              SMTP_PASS: Boolean(smtpPass),
              EMAIL_USER: Boolean(emailUser),
              EMAIL_PASS: Boolean(emailPass),
            },
          }),
          { status: 500 }
        );
      }
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: emailUser, pass: emailPass },
      });
    }

    if (smtpDebug) {
      console.log("sendEmail: smtp config", {
        smtpHost,
        smtpPort: smtpPortRaw,
        smtpSecure,
        smtpRequireTls,
        smtpUser: smtpUser ? "***set***" : "***missing***",
        smtpPass: smtpPass ? "***set***" : "***missing***",
        recipientEmail: recipientEmail ? "***set***" : "***missing***",
        fromEmail: fromEmail ? "***set***" : "***missing***",
      });
      try {
        await transporter.verify();
        console.log("sendEmail: transporter verified");
      } catch (e) {
        console.error("sendEmail: transporter verify failed", e);
      }
    }

    const lines = [
      bodyText,
      "",
      asanaTaskId ? `Trello Card ID: ${asanaTaskId}` : "",
      trelloCardUrl ? `Trello Card: ${trelloCardUrl}` : "",
      attachments.length
        ? `Attached: ${attachments.map((a) => a.filename).join(", ")}`
        : incomingPhotos.length
        ? "Photos were provided but skipped due to size limits."
        : "",
    ].filter(Boolean);

    await transporter.sendMail({
      replyTo: email ? `"${name}" <${email}>` : undefined,
      from: fromEmail ? `"NE Portland Painters" <${fromEmail}>` : undefined,
      to: recipientEmail,
      subject: `New ${formType === "estimate" ? "Estimate" : "Contact"} Request from ${name}`,
      text: lines.join("\n"),
      attachments,
    });

    console.log("sendEmail: success");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("email error", err);
    const details =
      err instanceof Error
        ? { message: err.message, ...(process.env.NODE_ENV !== "production" ? { stack: err.stack } : {}) }
        : { message: String(err) };
    return new Response(JSON.stringify({ error: "email failed", details }), { status: 500 });
  }
}
