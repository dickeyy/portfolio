import rateLimit from "@/lib/ratelimit";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 5 // Max 500 users per second
});

// To handle a POST request to /api
export async function POST(request: Request, response: NextResponse) {
    try {
        await limiter.check(response, 3, "CACHE_TOKEN");
    } catch (error) {
        return NextResponse.json({ message: "Rate limit exceeded" }, { status: 429 });
    }

    // get the body of the request
    let body;
    try {
        body = await request.json();
    } catch (error) {
        return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }
    try {
        await resend.emails.send({
            from: "no-reply@dickey.gg",
            to: "kyle@dickey.gg",
            subject: `New Email from ${body.name} <${body.email}>`,
            html: `<div><p>New message from portfolio</p><p>Name: <strong>${body.name}</strong></p><p>Email: ${body.email}</p><p>Message: ${body.message}</div>`,
            reply_to: body.email
        });
        return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}

// Same logic to add a `PATCH`, `DELETE`...
