import Image from "next/image";
import SocialsIcons from "./socials-icons";

export default function Title() {
    return (
        <div className="flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
                <p className="text-lg font-light text-foreground/40 mb-2">Hey, I&apos;m</p>
                <SocialsIcons size="w-6 h-6" />
            </div>
            <div className="flex items-start gap-4 mt-4 sm:mt-2">
                <Image
                    src="/me.png"
                    alt="Kyle Dickey"
                    width={65}
                    height={65}
                    className="rounded-full"
                />
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-3xl sm:text-4xl font-bold">Kyle Dickey</h1>
                    <p className="text-lg font-light text-foreground/60">
                        Junior Full-Stack Developer
                    </p>
                </div>
            </div>
        </div>
    );
}
