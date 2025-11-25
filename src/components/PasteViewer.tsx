import { useState } from "react";

interface PasteViewerProps {
    content: string;
}

export default function PasteViewer({ content }: PasteViewerProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="relative group">
            <pre className="w-full p-6 bg-muted/20 border border-border/50 rounded-lg font-mono text-sm overflow-x-auto whitespace-pre-wrap text-foreground/90 leading-relaxed">
                <code>{content}</code>
            </pre>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                <button
                    onClick={copyToClipboard}
                    className="px-3 py-1.5 text-xs font-medium border border-border/50 bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground rounded-md transition-colors backdrop-blur-sm shadow-sm"
                >
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
}
