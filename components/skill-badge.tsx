import { Badge } from "./ui/badge";

export default function SkillBadge({ skill }: { skill?: string }) {
    return (
        <Badge
            variant={"secondary"}
            key={skill}
            className="text-xs rounded border border-foreground border-dashed"
        >
            {skill}
        </Badge>
    );
}
