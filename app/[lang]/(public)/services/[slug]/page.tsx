
import { getNewsBySlug } from "@/data/news";
import Image from "next/image";
import { NotFound } from "../_components/not-found";
interface ServicesPageProps {
    params: {
        slug: string;
    }
}

export default async function ServicePage({ params }: ServicesPageProps) {

    const news = await getNewsBySlug(params.slug)

    return (
        <section className="my-20 md:my-32">
            {news ?
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2">

                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image src="/mission1.png" width={500} height={500} alt={news.title || "immagine"} className="mx-auto rounded-lg shadow-lg " />
                        </div>
                        <div>
                            <h1 className="text-primary font-bold text-3xl md:text-4xl uppercase mt-4 md::mt-0">{news.title}</h1>
                            <p className="mt-4 text-lg">{news.description}</p>
                        </div>
                    </div>
                    {news.secondaryDescription &&
                        <p>{news.secondaryDescription}</p>
                    }
                </div> :
                <NotFound />
            }
        </section>
    )
}
