import React, { useState, useEffect } from "react";

export default function LocalTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(timer);
    }, []);

    // Format time in MST
    const timeStr = time.toLocaleString("en-US", {
        timeZone: "America/Denver",
        timeStyle: "long",
        hour12: true
    });

    return (
        <p className="text-foreground/40 font-light text-sm font-mono">
            <time dateTime={timeStr}>{timeStr}</time>
        </p>
    );
}
