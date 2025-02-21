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
            // API Key is public, this is fine, Last.fm intends this to be client side.
            const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mrdickeyy&api_key=8f3b65a08dc19fd2fd52daee66e27a1f&format=json&limit=1`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const recentTracks = data?.recenttracks?.track;

                if (recentTracks && recentTracks.length > 0) {
                    const track = recentTracks[0];
                    const imageUrl = track.image.reduce((largest: any, image: any) => {
                        return image.size === "extralarge" ? image["#text"] : largest;
                    }, track.image[0]["#text"]);
                    if (track["@attr"]?.nowplaying === "true") {
                        setNowPlaying({
                            artist: track.artist["#text"],
                            title: track.name,
                            url: track.url,
                            isPlaying: true,
                            imageUrl: imageUrl
                        } as any);
                    } else {
                        setNowPlaying(null); // Only set if actively playing
                    }
                } else {
                    setNowPlaying(null);
                }
            } catch (error) {
                console.error("Error fetching Last.fm data:", error);
                setNowPlaying(null);
            }
        };

        fetchNowPlaying();
        const intervalId = setInterval(fetchNowPlaying, 10000); // Fetch every 10 seconds

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

    if (!nowPlaying) {
        return null;
    }

    return (
        <div>
            {nowPlaying.isPlaying && (
                <div className="flex items-center justify-start gap-1 mb-2">
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
