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
        // send email to me
        await resend.emails.send({
            from: "no-reply@dickey.gg",
            to: "hi@kyle.so",
            subject: `New Email from ${body.name} <${body.email}>`,
            html: `
                <div>
                    <p>New message from portfolio</p>
                    <p>Name: <strong>${body.name}</strong></p>
                    <p>Email: ${body.email}</p>
                    <p>Message: ${body.message}</p>
                </div>
            `,
            reply_to: body.email
        });

        // send a success email
        await resend.emails.send({
            from: "no-reply@dickey.gg",
            to: body.email,
            subject: "Thank you for reaching out!",
            html: `
                <div>
                    <p><strong>Thank you for reaching out!</strong></p>
                    <p>I will get back to you as soon as possible.</p>
                    <p>- Kyle Dickey (<a href="https://kyle.so">kyle.so</a>)</p>
                </div>
            `
        });

        return NextResponse.json({ message: "Email sent" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}
