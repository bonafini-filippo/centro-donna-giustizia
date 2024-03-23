
import { getNewsBySlug } from "@/data/news";
import Image from "next/image";
import { NotFound } from "../_components/not-found";
import DevelopeMessage from "@/components/develope-message";
interface ServicesPageProps {
    params: {
        slug: string;
    }
}

export default async function ServicePage({ params }: ServicesPageProps) {

    const news = await getNewsBySlug(params.slug)

    return (
        <DevelopeMessage />
    )
}
