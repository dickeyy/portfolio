import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/theme")({ component: App });

const coreColors = [
    { name: "Background", hex: "#00311A", swatch: "bg-background" },
    { name: "Foreground", hex: "#EEE8D5", swatch: "bg-foreground" },
    { name: "Primary", hex: "#4DB870", swatch: "bg-primary" },
    { name: "Border", hex: "#1A5C38", swatch: "bg-border" },
] as const;

const accentColors = [
    { name: "Yellow", hex: "#D4AF37", swatch: "bg-accent-yellow", dark: false },
    { name: "Green", hex: "#4DB870", swatch: "bg-accent-green", dark: true },
    { name: "Orange", hex: "#C4622D", swatch: "bg-accent-orange", dark: true },
    { name: "Red", hex: "#A63D2F", swatch: "bg-accent-red", dark: true },
    { name: "Purple", hex: "#7C5CBF", swatch: "bg-accent-purple", dark: true },
] as const;

function ColorCard({
    name,
    hex,
    swatch,
    dark,
}: {
    name: string;
    hex: string;
    swatch: string;
    dark?: boolean;
}) {
    return (
        <article className="rounded-lg border bg-card p-4 shadow-sm">
            <div className={`h-14 rounded-md border ${swatch}`} />
            <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-sm font-medium">{name}</p>
                <code
                    className={`rounded px-2 py-1 text-xs ${dark ? "bg-foreground/10 text-foreground" : "bg-foreground/5 text-foreground"}`}
                >
                    {hex}
                </code>
            </div>
        </article>
    );
}

function App() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
                <header className="mb-8 space-y-2">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Theme Color Demo
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Tailwind-only preview of your color tokens.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-lg font-semibold">Core</h2>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {coreColors.map((color) => (
                            <ColorCard
                                key={color.name}
                                dark={color.name === "Foreground"}
                                hex={color.hex}
                                name={color.name}
                                swatch={color.swatch}
                            />
                        ))}
                    </div>
                </section>

                <section className="mt-8 space-y-4">
                    <h2 className="text-lg font-semibold">Accents</h2>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {accentColors.map((color) => (
                            <ColorCard
                                key={color.name}
                                dark={color.dark}
                                hex={color.hex}
                                name={color.name}
                                swatch={color.swatch}
                            />
                        ))}
                    </div>
                </section>

                <section className="mt-8 rounded-lg border bg-card p-4 shadow-sm">
                    <h2 className="text-lg font-semibold">Buttons Preview</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <button
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                            type="button"
                        >
                            Primary
                        </button>
                        <button
                            className="rounded-md border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                            type="button"
                        >
                            Secondary
                        </button>
                        <button
                            className="rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground"
                            type="button"
                        >
                            Ghost
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
