import { ToolType } from "./tool-type";

type ProjectsType = {
    featured: FeaturedProjectType[];
    other: OtherProjectType[];
};

type FeaturedProjectType = {
    name: string;
    description: string;
    image: string;
    tools: ToolType[];
    link: string;
    buttonText: string;
    github?: string;
    inProgress?: boolean;
};

type OtherProjectType = {
    name: string;
    description: string;
    tools: ToolType[];
    link?: string;
    buttonText?: string;
    github?: string;
    archived?: boolean;
    inProgress?: boolean;
};

export type { ProjectsType, FeaturedProjectType, OtherProjectType };
