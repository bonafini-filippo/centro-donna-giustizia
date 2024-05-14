import { CardContent } from "@/components/ui/card";
import { ItemCard } from "../../_components/item";


const ServicesTable = ({ services }: any) => {
    return (
        <CardContent className="w-full h-full  overflow-y-auto space-y-7">
            {services?.map((news: any) => (
                <ItemCard title={news.title}
                    image="/test/protesta1.jpg"
                    alt={news.title}
                    par={news.description}
                    key={news.id}
                    id={news.id}
                    enabled={news.visible}
                    date={news.date}
                />
            ))}
        </CardContent>
    )
}

export default ServicesTable