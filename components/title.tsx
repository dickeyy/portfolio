import Image from "next/image";
import SocialsIcons from "./socials-icons";
import Link from "next/link";

export default function Title() {
    return (
        <div className="flex w-full flex-col items-start">
            <div className="flex w-full justify-between">
                <p className="mb-2 text-lg text-foreground/40">Hey, I&apos;m</p>
                <SocialsIcons size="w-6 h-6 fill-foreground/30" />
            </div>
            <div className="mt-4 flex items-start gap-4 sm:mt-2">
                <Image
                    src="/me.webp"
                    alt="Kyle Dickey"
                    width={65}
                    height={65}
                    className="rounded-full"
                />
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-3xl font-extrabold hover:underline sm:text-4xl">
                        <Link href="/">Kyle Dickey</Link>
                    </h1>
                    <p className="text-lg text-foreground/60">Junior Full-Stack Developer</p>
                </div>
            </div>
        </div>
    );
}
