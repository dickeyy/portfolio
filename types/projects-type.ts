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
    beta?: boolean;
    star_key?: string;
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
    star_key?: string;
};

export type { ProjectsType, FeaturedProjectType, OtherProjectType };
