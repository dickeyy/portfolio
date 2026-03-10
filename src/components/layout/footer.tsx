import { useEffect, useState } from "react";

export function Footer() {
    const [time, setTime] = useState(
        new Date().toLocaleTimeString("en-US", {
            timeZone: "America/Denver",
            hour: "numeric",
            minute: "2-digit",
        }),
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    timeZone: "America/Denver",
                    hour: "numeric",
                    minute: "2-digit",
                }),
            );
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <div className="mx-auto flex w-screen items-center justify-between px-6 py-4">
                <span className="text-xs text-muted-foreground">
                    It's {time} for me
                </span>
                <span className="text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} Kyle Dickey
                </span>
            </div>
        </footer>
    );
}
