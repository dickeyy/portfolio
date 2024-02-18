type ProjectsType = {
    featured: FeaturedProjectType[];
    other: OtherProjectType[];
};

type FeaturedProjectType = {
    name: string;
    description: string;
    image: string;
    tools: string[];
    link: string;
    buttonText: string;
    github?: string;
};

type OtherProjectType = {
    name: string;
    description: string;
    tools: string[];
    link?: string;
    buttonText?: string;
    github?: string;
};

export type { ProjectsType, FeaturedProjectType, OtherProjectType };
