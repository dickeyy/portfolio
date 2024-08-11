import { redirect } from "next/navigation";

const GITHUB_USERNAME = "dickeyy";

export async function GET(request: Request, { params }: { params: { repo: string[] } }) {
    const repoPath = params.repo.join("/");
    const githubUrl = `https://github.com/${GITHUB_USERNAME}/${repoPath}`;

    return redirect(githubUrl);
}
