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
};

type OtherProjectType = {
    name: string;
    description: string;
    tools: ToolType[];
    link?: string;
    buttonText?: string;
    github?: string;
};

export type { ProjectsType, FeaturedProjectType, OtherProjectType };
