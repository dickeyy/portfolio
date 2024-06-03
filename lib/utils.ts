import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getStars(key: string) {
    const res = await fetch(`/api/analytics/star-count?repo=${key}`);
    const data = await res.json();
    if (res.status !== 200) {
        throw new Error("Failed to fetch star count");
    }
    return data.stars;
}
