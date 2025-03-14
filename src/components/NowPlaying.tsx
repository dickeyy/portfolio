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
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch("https://api.kyle.so/spotify/current-track?user=mrdickeyy");
                const data = await res.json();

                console.log(data);

                if (data.success) {
                    setNowPlaying(data);
                }
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
            }
        };

        fetchNowPlaying();
        const intervalId = setInterval(fetchNowPlaying, 5000); // Fetch every 5 seconds

        return () => clearInterval(intervalId); // Clean up interval on unmount
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
