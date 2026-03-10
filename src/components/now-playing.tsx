import { useEffect, useState } from "react";

type NowPlayingTrack = {
    artist: string;
    title: string;
    url: string;
    isPlaying: boolean;
    imageUrl: string;
};

const WEBSOCKET_URL =
    "wss://api.kyle.so/spotify/current-track/ws?user=mrdickeyy";

export function NowPlaying() {
    const [track, setTrack] = useState<NowPlayingTrack | null>(null);

    useEffect(() => {
        let socket: WebSocket | null = null;
        let reconnectTimer: number | null = null;
        let disposed = false;

        const connect = () => {
            socket = new WebSocket(WEBSOCKET_URL);

            socket.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data) as unknown;

                    if (!isNowPlayingTrack(data)) {
                        setTrack(null);
                        return;
                    }

                    if (data.isPlaying === false) {
                        setTrack(null);
                        return;
                    }

                    setTrack(data);
                } catch {
                    setTrack(null);
                }
            };

            socket.onerror = () => {};

            socket.onclose = () => {
                if (disposed) {
                    return;
                }

                reconnectTimer = window.setTimeout(connect, 3500);
            };
        };

        connect();

        return () => {
            disposed = true;
            if (reconnectTimer) {
                window.clearTimeout(reconnectTimer);
            }
            socket?.close();
        };
    }, []);

    if (!track || !track.isPlaying) {
        return null;
    }

    return (
        <section className="mb-2">
            <div className="inline-flex max-w-full items-center gap-3">
                <img
                    src={track.imageUrl}
                    alt={`${track.title} album art`}
                    className="size-9 shrink-0 rounded-md object-cover"
                />

                <p className="truncate text-sm text-foreground/65">
                    <span className="text-foreground/55">
                        Currently listening to
                    </span>{" "}
                    <a
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground/90 font-serif"
                    >
                        {track.title}
                    </a>{" "}
                    <span className="text-foreground/55">by</span>{" "}
                    <span className="font-serif italic text-foreground/70">
                        {track.artist}
                    </span>
                </p>
            </div>
        </section>
    );
}

function isNowPlayingTrack(value: unknown): value is NowPlayingTrack {
    if (!value || typeof value !== "object") {
        return false;
    }

    const track = value as Partial<NowPlayingTrack> & { error?: unknown };

    if (typeof track.error === "string") {
        return false;
    }

    return (
        typeof track.artist === "string" &&
        typeof track.title === "string" &&
        typeof track.url === "string" &&
        typeof track.imageUrl === "string" &&
        typeof track.isPlaying === "boolean"
    );
}
