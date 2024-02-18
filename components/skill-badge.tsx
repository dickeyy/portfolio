import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill?: string }) {
    return (
        <Badge
            variant={"outline"}
            key={skill}
            className="text-xs font-mono rounded border text-foreground border-foreground border-dashed"
        >
            {skill}
        </Badge>
    );
}
