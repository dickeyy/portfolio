import rateLimit from "@/lib/ratelimit";
import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 5 // Max 500 users per second
});

export async function GET(request: NextRequest, response: NextResponse) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const views = await redis.hget("blog-views", id);
    return NextResponse.json({ views: views ?? 0 }, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    try {
        await limiter.check(response, 10, "CACHE_TOKEN");
    } catch (error) {
        return NextResponse.json({ message: "Rate limit exceeded" }, { status: 429 });
    }

    const views = await redis.hincrby("blog-views", id, 1);
    return NextResponse.json({ views }, { status: 200 });
}
