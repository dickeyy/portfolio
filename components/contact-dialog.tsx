"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Invalid name"
    }),
    email: z.string().email(),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters long"
        })
        .max(500, {
            message: "Message must be less than 500 characters long"
        })
});

export default function ContactDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            message: ""
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            const req = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (req.ok) {
                setIsOpen(false);
                form.reset();
                toast.success("Email sent!", {
                    description: "I'll get back to you as soon as I can."
                });
                setIsLoading(false);
                return;
            }

            try {
                const data = await req.json();
                toast.error("Error sending email", {
                    description: data.message
                });
            } catch (error) {
                toast.error("Error sending email", {
                    description: "An unknown error occurred"
                });
            }
        } catch (error) {
            toast.error("Error sending email", {
                description: "An unknown error occurred"
            });
        }
        setIsLoading(false);
    }

    return (
        <Dialog
            open={isOpen}
            onOpenChange={() => {
                setIsOpen(false);
                // reset form when dialog closes
                form.reset();
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                    <DialogDescription>
                        Send me an email with this form, or reach out to me on social media!
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-2 space-y-1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="mb-2 space-y-1">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Your message here..."
                                            className="max-h-[300px] min-h-[100px] resize-y"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="mt-4 w-full"
                            variant={"default"}
                            disabled={isLoading}
                        >
                            Send
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
