import { db } from "@/lib/db";

export const getAllNews = async () => {
    try {
        const news = await db.news.findMany()
        return news;
    } catch {
        return null
    }
}


export const getAllVisibleNews = async () => {
    try {
        const news = await db.news.findMany({
            where: {
                visible: true
            }
        })
        return news;
    } catch {
        return null
    }
}
