import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: process.env.REDIS_URL as string,
    token: process.env.REDIS_TOKEN as string
});

export default redis;
