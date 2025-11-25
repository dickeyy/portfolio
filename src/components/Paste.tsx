import { useState } from "react";

export default function PasteComponent() {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [pasteId, setPasteId] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("https://api.kyle.so/paste", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: content
                })
            });

            if (!res.ok) {
                throw new Error("Failed to share paste");
            }

            const data = await res.json();
            setPasteId(data.id);
            setContent("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`https://kyle.so/paste/${pasteId}`);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-4 mt-8 w-full">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your text here..."
                disabled={loading}
                className="w-full h-64 p-4 bg-transparent border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring font-mono text-sm resize-none text-foreground placeholder:text-muted-foreground"
            />
            <div className="flex justify-end">
                <button
                    onClick={handleShare}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading || !content.trim()}
                >
                    Share
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {pasteId && (
                <div className="flex flex-col gap-2 border rounded-md border-dashed bg-card/20 p-4">
                    <p className="text-foreground/60 font-light">Paste created successfully</p>
                    <p className="text-foreground/80 font-medium font-mono">{`https://kyle.so/paste/${pasteId}`}</p>
                    <button
                        className="px-4 py-2 bg-secondary rounded-md hover:bg-secondary/90 transition-colors font-medium cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleCopyLink}
                    >
                        {copied ? "Copied" : "Copy Link"}
                    </button>
                </div>
            )}
        </div>
    );
}
