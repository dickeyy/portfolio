import rateLimit from "@/lib/ratelimit";
import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const limiter = rateLimit({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 5 // 500 unique users per minute
});

type Repo = {
    name: string;
    owner: string;
    label?: string;
};

const me = "dickeyy";
const reposToGetStars: Repo[] = [
    {
        name: "hansumfella-website",
        owner: me
    },
    {
        name: "diary",
        owner: me
    },
    // {
    //     name: "tipdotdev",
    //     owner: "tipdotdev"
    // },
    {
        name: "bot",
        owner: "seedsdiscord",
        label: "quack"
    },
    {
        name: "wrink",
        owner: "wrinkapp"
    },
    {
        name: "alias",
        owner: me
    },
    {
        name: "leetcode",
        owner: me
    },
    {
        name: "lastag",
        owner: me
    },
    {
        name: "tiktok-scraper",
        owner: me
    },
    {
        name: "countdown",
        owner: me
    },
    {
        name: "dickey-api",
        owner: me
    },
    {
        name: "travel-log",
        owner: me
    }
];

export async function POST(request: NextRequest, response: NextResponse) {
    // validate cron secret
    if (request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // vaidate rate limit
    try {
        await limiter.check(response, 3, "CACHE_TOKEN");
    } catch (error) {
        return NextResponse.json({ message: "Rate limit exceeded" }, { status: 429 });
    }

    // for each repo, get the star count
    const promises = reposToGetStars.map(async (repo) => {
        const url = `https://api.github.com/repos/${repo.owner}/${repo.name}`;
        const res = await fetch(url);
        if (!res.ok) {
            return 0;
        }
        const json = await res.json();
        return json.stargazers_count;
    });

    const starCounts = await Promise.all(promises);

    // update the redis cache
    for (let i = 0; i < starCounts.length; i++) {
        const repo = reposToGetStars[i];
        try {
            await redis.hset("repo-stars", {
                [repo.label ?? repo.name]: starCounts[i]
            });
        } catch (error) {
            console.error(error);
        }
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
}
