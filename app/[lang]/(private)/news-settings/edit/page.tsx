
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import Link from "next/link";
import EditForm from "./_components/edit-form";
import { getNewsById } from "@/data/news";
import { useRouter } from "next/navigation";


const EditNews = async ({ searchParams }: any) => {


    const news = await getNewsById(searchParams.NewsId)
    console.log(news)

    return (
        <CardWrapper
            headerLabel="Modifica"
            backButtonLabel="Modifica"
            backButtonHref="/login"
            footer
        >

            {news ?
                <EditForm news={news} />
                :
                <div>
                    <span>Errore nel trovare l'articolo</span>
                </div>}


            <div className="pt-3 w-full  flex justify-end">
                <Link href="/news-settings">
                    <Button variant="link">Indietro</Button>
                </Link>
            </div>


        </CardWrapper>
    )
}

export default EditNews;