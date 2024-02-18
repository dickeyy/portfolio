"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function JsonAbout({ className }: { className?: string }) {
    const birthday = new Date("2004-05-02");
    const [age, setAge] = useState("0");

    // calculate exact age
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - birthday.getTime();
            setAge((diff / 1000 / 60 / 60 / 24 / 365).toFixed(7));
        }, 10);
        return () => clearInterval(interval);
    });

    return (
        <div className={cn(className, "flex flex-col items-start text-foreground")}>
            <p className="text-md sm:text-lg font-light font-mono">
                <span className="text-foreground/60">const me =</span> {"{"}
            </p>
            <div className="text-md sm:text-l flex flex-col items-start pl-6">
                <p className="font-light font-mono">{`age: ${age},`}</p>
                <p className="font-light font-mono">
                    {'occupation: ["Freelance dev", "College student"],'}
                </p>
                <p className="font-light font-mono">{'location: "Fort Collins, Colorado"'}</p>
            </div>
            <p className="font-light font-mono">{"}"}</p>
        </div>
    );
}
