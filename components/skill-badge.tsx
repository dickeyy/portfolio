import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill?: string }) {
    return (
        <Badge
            variant={"outline"}
            key={skill}
            className="rounded border border-dashed border-foreground font-mono text-xs font-light text-foreground"
        >
            {skill}
        </Badge>
    );
}
