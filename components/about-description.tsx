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
            <p className="text-md font-light text-foreground/70">
                Born and raised near Denver, Colorado. I am a second-year Computer Science major at
                Colorado State University. Aside from coding, I also enjoy movies, music, SCUBA
                diving, and playing chess. I am a full-stack dev, however, I have a special place in
                my heart for frontend work. I am currently looking for a summer 2024 internship, so
                if you&apos;re hiring, please reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 w-full">
                <Button asChild variant={"default"} size={"lg"} className="w-full">
                    <a href="/resume" target="_blank" className="w-full">
                        <NewspaperIcon className="w-4 h-4 mr-2" />
                        General Resume
                    </a>
                </Button>
                <Button
                    variant={"default"}
                    size={"lg"}
                    className="w-full"
                    onClick={() => setContactDialogOpen(true)}
                >
                    <MailIcon className="w-4 h-4 mr-2" />
                    Contact Me
                </Button>
                <Button asChild variant={"default"} size={"lg"} className="w-full">
                    <Link href="/blog" className="w-full">
                        <PencilLineIcon className="w-4 h-4 mr-2" />
                        Blog
                    </Link>
                </Button>
            </div>

            <ContactDialog isOpen={contactDialogOpen} setIsOpen={setContactDialogOpen} />
        </div>
    );
}
