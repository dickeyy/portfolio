import type { VinylType } from "../types/vinyl";

interface Props {
    vinyl: VinylType;
}

export default function VinylItem({ vinyl }: Props) {
    return (
        <div className="flex flex-col w-full">
            <a
                href={`https://www.discogs.com/release/${vinyl.basic_information.id}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex flex-row gap-4 w-full justify-between">
                    <div className="inline-flex items-center group">
                        <img
                            src={vinyl.basic_information.cover_image}
                            alt={vinyl.basic_information.title}
                            className="size-20 rounded-md object-cover"
                        />

                        <div className="flex flex-col ml-4">
                            <p className="text-foreground/80">{vinyl.basic_information.title}</p>
                            <p className="text-foreground/60 text-sm font-serif italic">
                                {vinyl.basic_information.artists[0].name}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
