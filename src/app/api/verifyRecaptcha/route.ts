import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    if (process.env.RECAPTCHA_BYPASS?.trim() === "1") {
        return NextResponse.json({ success: true, score: 1, bypass: true });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is missing");
        return NextResponse.json({ success: false, error: "missing_secret" }, { status: 500 });
    }

    const postData = await request.json();

    const { gRecaptchaToken } = postData;

    let res;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

    } catch (e) {
        console.error("recaptcha verify error", e);
        return NextResponse.json({ success: false, error: "verify_failed" }, { status: 500 })
    }

    if (res && res.data?.success && res.data?.score > 0.5) {
        console.log("res.data?.score:", res.data?.score);

        return NextResponse.json({
            success: true,
            score: res.data.score,
        });
    } else {
        console.warn("recaptcha failed", { ok: res?.data?.success, score: res?.data?.score, reasons: res?.data?.["error-codes"] });
        return NextResponse.json({ success: false, score: res?.data?.score ?? null, reasons: res?.data?.["error-codes"] ?? null });
    }
}
