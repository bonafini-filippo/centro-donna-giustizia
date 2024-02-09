import { Anton } from "next/font/google";
import Link from "next/link";
import LastNews from "../last-news";

const anton = Anton({
    subsets: ['latin'],
    weight: "400"
})

interface typesHeroSection {
    title: string,
    actionLab: string,
    actionUrl: string,
    secondaryActionLabel: string,
    secondaryActionUrl: string

}

export default function NewsSection({ title, actionLab, actionUrl, secondaryActionLabel, secondaryActionUrl }: typesHeroSection) {
    return (
        <section className={`${anton.className} text-center  bg-black `}>
            <div>
                <h1 className="text-white text-6xl pt-8 pb-4">ULTIME NOTIZIE</h1>
            </div>
            <LastNews />
        </section >
    )
}
