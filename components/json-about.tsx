"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function JsonAbout({ className }: { className?: string }) {
    const [age, setAge] = useState("0");
    const [isBirthday, setIsBirthday] = useState(false);

    // calculate exact age
    useEffect(() => {
        const birthday = new Date("May 2, 2004");

        const interval = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - birthday.getTime();
            const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25); // accounting for leap years
            setAge(ageInYears.toFixed(7));

            if (now.getDate() === birthday.getDate() && now.getMonth() === birthday.getMonth()) {
                setIsBirthday(true);
            } else {
                setIsBirthday(false);
            }
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isBirthday && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight * 2}
                    colors={["#b5b5b6", "#000"]}
                    numberOfPieces={200}
                    className="absolute left-0 top-0"
                />
            )}
            <div className={cn(className, "flex flex-col items-start text-foreground")}>
                <p className="text-md font-mono font-light sm:text-lg">
                    <span className="text-foreground/60">const me =</span> {"{"}
                </p>
                <div className="text-md sm:text-l flex flex-col items-start pl-6">
                    <p className="font-mono font-light">
                        {`age: ${age},`}
                        {isBirthday && (
                            <span className="text-foreground/60">{" // it's my birthday :)"}</span>
                        )}
                    </p>
                    <p className="font-mono font-light">
                        {'occupation: ["College student", "Freelance dev"],'}
                    </p>
                    <p className="font-mono font-light">{'location: "Fort Collins, Colorado"'}</p>
                </div>
                <p className="font-mono font-light">{"}"}</p>
            </div>
        </>
    );
}
