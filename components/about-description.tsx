"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { MailIcon, NewspaperIcon, PencilLineIcon } from "lucide-react";
import Link from "next/link";
import ContactDialog from "./contact-dialog";

export default function AboutDescription({ className }: { className?: string }) {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);

    return (
        <div className={cn(className, "flex flex-col items-start text-foreground")}>
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-md font text-foreground/70">
                Born and raised near Denver, Colorado. I am a second-year computer science with a
                focus in software engineering student at Colorado State University. I have a strong
                foundation in programming languages such as Javascript / Typescript, Python, Go, and
                Java. I specialize in creating sophisticated web and mobile applications, embedded
                systems, complex APIs, and performant infrastructures suitable for any size of
                project. Aside from coding, I also enjoy movies, music, SCUBA diving, and playing
                chess. If you would like to know more, or contact me, click the buttons below!
            </p>
            <div className="mt-4 flex w-full flex-col items-start gap-2 sm:flex-row">
                <Button asChild variant={"default"} size={"lg"} className="w-full">
                    <a href="/resume" target="_blank" className="w-full">
                        <NewspaperIcon className="mr-2 h-4 w-4" />
                        General Resume
                    </a>
                </Button>
                <Button
                    variant={"default"}
                    size={"lg"}
                    className="w-full"
                    onClick={() => setContactDialogOpen(true)}
                >
                    <MailIcon className="mr-2 h-4 w-4" />
                    Contact Me
                </Button>
                <Button asChild variant={"default"} size={"lg"} className="w-full">
                    <Link href="/blog" className="w-full">
                        <PencilLineIcon className="mr-2 h-4 w-4" />
                        Blog
                    </Link>
                </Button>
            </div>

            <ContactDialog isOpen={contactDialogOpen} setIsOpen={setContactDialogOpen} />
        </div>
    );
}
