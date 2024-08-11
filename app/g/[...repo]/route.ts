import { NextResponse } from "next/server";

const GITHUB_USERNAME = "dickeyy";

export async function GET(request: Request, { params }: any) {
    const repoPath = params.repo.join("/");
    const githubUrl = `https://github.com/${GITHUB_USERNAME}/${repoPath}`;

    // Check if it's a Git client
    const userAgent = request.headers.get("user-agent") || "";
    const isGitClient = userAgent.startsWith("git/");

    if (isGitClient) {
        // Respond with a Git-friendly redirect
        return new NextResponse(null, {
            status: 301,
            headers: {
                Location: githubUrl,
                "Content-Type": "application/x-git-receive-pack-result",
                "Cache-Control": "no-cache"
            }
        });
    } else {
        // For browser requests, use a regular redirect
        return NextResponse.redirect(githubUrl);
    }
}
