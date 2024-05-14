import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function NotionAd() {
    return (
        <Card className="w-full border-dashed border-zinc-400">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="font-bold">Try Notion</CardTitle>
                    <Badge
                        variant="outline"
                        className="rounded border border-blue-500 bg-blue-100 font-mono text-[0.6rem] font-light text-blue-600"
                    >
                        Affiliate
                    </Badge>
                </div>
                <CardDescription>
                    Boost your productivity and stay organized with Notion.{" "}
                    <Link href="/blog/how-i-use-notion" className="text-foreground hover:underline">
                        Learn how I use Notion.
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex w-full flex-col items-start text-left">
                    <Button asChild className="w-full" variant="default">
                        <Link href="https://affiliate.notion.so/dickey">Get Started</Link>
                    </Button>
                    <p className="mt-2 text-left text-xs text-zinc-500">
                        <span className="text-zinc-600">* Notion Partner / Affiliate Link</span> - I
                        may earn a commission if you sign up through this link. Thank you for your
                        support!{" "}
                        <a
                            href="https://www.notion.so/affiliates"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline transition-colors duration-150 ease-in-out hover:text-foreground"
                        >
                            Learn more.
                        </a>
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
}
