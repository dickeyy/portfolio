import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill?: string }) {
    return (
        <Badge
            variant={"outline"}
            key={skill}
            className="rounded border border-black/20 bg-zinc-700/20 font-mono text-xs font-light text-foreground"
        >
            {skill}
        </Badge>
    );
}
