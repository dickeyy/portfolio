import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: node({
        mode: "standalone"
    }),
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
