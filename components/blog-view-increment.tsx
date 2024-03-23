"use client";

import { useEffect } from "react";

async function doIt({ id }: { id: string }) {
    const views = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/analytics/blog-views?id=${id}`,
        {
            method: "POST"
        }
    );
    return;
}

export default function BlogViewIncrement({ id }: { id: string }) {
    useEffect(() => {
        doIt({ id });
    }, [id]);

    return null;
}
