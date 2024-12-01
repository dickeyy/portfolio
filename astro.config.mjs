import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [
        tailwind({
            applyBaseStyles: true
        }),
        react()
    ],
    markdown: {
        shikiConfig: {
            theme: "min-dark"
        },
        rehypePlugins: [[rehypeKatex, { strict: false, inline: true }]],
        remarkPlugins: [remarkMath]
    }
});
