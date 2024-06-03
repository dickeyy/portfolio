import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    const repo = request.nextUrl.searchParams.get("repo");
    if (!repo) {
        return NextResponse.json({ message: "Missing repo" }, { status: 400 });
    }

    const stars = await redis.hget("repo-stars", repo);
    return NextResponse.json({ stars: stars ?? 0 }, { status: 200 });
}
