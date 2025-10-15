import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    experimental: {
        session: true
    },
    output: "server",
    adapter: cloudflare(),
    session: {
        driver: "memory"
    },
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
