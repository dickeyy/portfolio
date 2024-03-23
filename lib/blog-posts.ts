import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

import type { BlogPost } from "../types/blog-post";

const postsDirectory = path.join(process.cwd(), "blog");

const getSortedPosts = (): BlogPost[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            id,
            ...(matterResult.data as BlogPost)
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllPost = getSortedPosts;

export const getPostData = async (id: string): Promise<any> => {
    try {
        const fullPath = path.join(postsDirectory, `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id,
            contentHtml,
            title: matterResult.data.title,
            date: matterResult.data.date
        };
    } catch (e) {
        return null;
    }
};
