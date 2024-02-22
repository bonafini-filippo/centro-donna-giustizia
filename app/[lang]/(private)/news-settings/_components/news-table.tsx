import { CardContent } from "@/components/ui/card";
import { getAllNews } from "@/data/news";
import { ItemCard } from "../../_components/item";


const NewsTable = ({ news }: any) => {
    return (
        <CardContent className="w-full h-full  overflow-y-auto space-y-7">
            {news?.map((news: any) => (

                <ItemCard title={news.title}
                    image="/test/protesta1.jpg"
                    alt={news.title}
                    par={news.description}
                    key={news.id}
                />


            ))}
        </CardContent>
    )
}

export default NewsTable