import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TiPlus } from "react-icons/ti";
import NewsTable from "./_components/news-table";
import { getAllNews } from "@/data/news";
import Link from "next/link";

const NewsPage = async () => {
    const news: any = await getAllNews();

    return (
        <Card className="w-full h-full pb-20 overflow-hidden">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className='text-primary text-4xl'>News</CardTitle>
                    <Link href="/news-settings/new">
                        <Button size={"lg"} className="flex items-center justify-center gap-2">
                            <span className="text-xl">NEW</span>
                            <TiPlus size={27} />
                        </Button>
                    </Link>

                </div>
            </CardHeader>
            <NewsTable news={news} />
        </Card>
    );
}

export default NewsPage;