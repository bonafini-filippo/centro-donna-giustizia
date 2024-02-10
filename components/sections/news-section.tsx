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
        <section className={`${anton.className} scrolbar text-center  relative -top-32 z-50 -mb-28`}>
            <div>
                <h1 className="text-white text-6xl mb-10">ULTIME NOTIZIE</h1>
            </div>
            <LastNews />
        </section >
    )
}
