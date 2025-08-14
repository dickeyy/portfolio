export type VinylType = {
    id: number;
    instance_id: number;
    date_added: string;
    rating: number;
    basic_information: VinylBasicInformationType;
    folder_id: number;
    notes: string[];
};

type VinylFormatType = {
    name: string;
    qty: string;
    descriptions?: string[];
};

type VinylLabelType = {
    name: string;
    catno: string;
    entity_type: string;
    entity_type_name: string;
    id: number;
    resource_url: string;
};

type VinylArtistType = {
    name: string;
    anv: string;
    join: string;
    role: string;
    tracks: string;
    id: number;
    resource_url: string;
};

export type VinylBasicInformationType = {
    id: number;
    master_id?: number;
    master_url?: string;
    resource_url: string;
    thumb: string;
    cover_image: string;
    title: string;
    year: number;
    formats: VinylFormatType[];
    labels: VinylLabelType[];
    artists: VinylArtistType[];
    genres?: string[];
    styles?: string[];
};
