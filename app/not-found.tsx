import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24">
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="font-bold">Are you lost?</CardTitle>
                    <CardDescription>The page you are looking for does not exist.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild variant="default" className="w-full">
                        <a href="/">Go back home</a>
                    </Button>
                </CardContent>
                <CardFooter>
                    <p className="text-foreground/60 font-mono text-sm">Error Code: 404</p>
                </CardFooter>
            </Card>
        </main>
    );
}
