import { Badge } from "./ui/badge";

export function InProgressFlag() {
    return (
        <Badge
            variant="outline"
            className="rounded border border-purple-500 bg-purple-100 font-mono text-[0.6rem] font-light text-purple-600"
        >
            In Progress
        </Badge>
    );
}

export function ArchivedFlag() {
    return (
        <Badge
            variant="outline"
            className="rounded border border-orange-500 bg-orange-100 font-mono text-[0.6rem] font-light text-orange-600"
        >
            Archived
        </Badge>
    );
}

export function BetaFlag() {
    return (
        <Badge
            variant="outline"
            className="rounded border border-blue-500 bg-blue-100 font-mono text-[0.6rem] font-light text-blue-600"
        >
            Beta
        </Badge>
    );
}
