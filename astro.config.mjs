import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [
        tailwind({
            applyBaseStyles: true
        }),
        react(),
        mdx()
    ],
    markdown: {
        shikiConfig: {
            theme: "min-dark"
        },
        rehypePlugins: [[rehypeKatex, { strict: false, inline: true }]],
        remarkPlugins: [remarkMath]
    }
});
