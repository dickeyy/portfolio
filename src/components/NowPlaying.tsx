import React, { useState, useEffect } from "react";

type NowPlaying = {
    artist: string;
    title: string;
    url: string;
    isPlaying: boolean;
    imageUrl: string;
};

export default function NowPlaying() {
    const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);

    useEffect(() => {
        const websocketUrl = "wss://api.kyle.so/spotify/current-track/ws?user=mrdickeyy";
        const socket = new WebSocket(websocketUrl);

        socket.onopen = () => {
            console.log("WebSocket connection established");
        };

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (data.isPlaying === false) {
                    // Nothing is playing
                    setNowPlaying(null);
                } else if (!data.error) {
                    setNowPlaying(data);
                } else {
                    setNowPlaying(null);
                }
            } catch (error) {
                console.error("Error parsing WebSocket data:", error);
            }
        };

        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        socket.onclose = () => {
            console.log("WebSocket connection closed");
        };

        // Clean up WebSocket connection on unmount
        return () => {
            socket.close();
        };
    }, []);

    if (!nowPlaying) {
        return null;
    }

    return (
        <div>
            {nowPlaying.isPlaying && (
                <div className="flex items-center justify-start gap-1 mt-6 -mb-4 border rounded-[10px] p-1 border-dashed border-foreground/20">
                    <img
                        src={nowPlaying.imageUrl}
                        alt={nowPlaying.title}
                        className="size-8 rounded-[5px] mr-2"
                    />
                    <p className="font-serif text-foreground/60 font-light italic">
                        Currently listening to{" "}
                        <span>
                            <a
                                className="text-foreground/80 font-sans not-italic underline hover:decoration-foreground/80 transition-all ease-in-out decoration-foreground/20 underline-offset-4"
                                href={nowPlaying.url}
                                target="_blank"
                            >
                                {nowPlaying.title}
                            </a>
                        </span>{" "}
                        by {nowPlaying.artist}
                    </p>
                </div>
            )}
        </div>
    );
}
