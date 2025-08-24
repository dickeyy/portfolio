import type { VinylType } from "../types/vinyl";
import { useState, useEffect } from "react";
import VinylItem from "./VinylItem";

export default function VinylList() {
    const [vinyl, setVinyl] = useState<VinylType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/vinyl")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch vinyl collection");
                }
                return res.json();
            })
            .then((data) => {
                setVinyl(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-16">
                <p className="text-foreground/60">Loading vinyl collection...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center py-16">
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16 text-foreground/80 font-light text-md">
            {vinyl.map((vinyl) => (
                <VinylItem key={vinyl.id} vinyl={vinyl} />
            ))}
        </div>
    );
}
