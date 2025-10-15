import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

export const GET: APIRoute = async ({ request }) => {
    try {
        const token = getSecret("DISCOGS_TOKEN");
        const response = await fetch(
            "https://api.discogs.com/users/kdickey/collection/folders/0/releases?per_page=100",
            {
                headers: {
                    Authorization: `Discogs token=${token}`
                }
            }
        );

        if (!response.ok) {
            return new Response(JSON.stringify({ error: "Failed to fetch vinyl collection" }), {
                status: response.status,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

        const data = await response.json();

        return new Response(JSON.stringify(data.releases), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                Expires: "0"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};
