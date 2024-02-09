import { Anton } from "next/font/google";
import Link from "next/link";

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

export default function HeroSection({ title, actionLab, actionUrl, secondaryActionLabel, secondaryActionUrl }: typesHeroSection) {
    return (
        <section className={`${anton.className} flex justify-center items-center bg-black `}>
            <div className="relative bg-hero-bg h-screen w-full bg-no-repeat bg-cover flex items-center">
                <div className="m-12 md:m-0 md:ml-12 md:pt-20">
                    <h1 className={`text-5xl lg:text-7xl md:text-6xl text-white text-center md:text-left max-w-[490px]`}>
                        {title}
                    </h1>

                    <div className="flex flex-col space-y-5 mt-10 justify-start text-center   ">
                        <Link href={actionUrl} className="bg-black text-white py-4 px-8 text-4xl rounded-sm">
                            {actionLab}
                        </Link>

                        <Link href={secondaryActionUrl} className="bg-white text-black py-1 px-8 text-2xl rounded-sm">
                            {secondaryActionLabel}
                        </Link>
                    </div>

                </div>
            </div>
        </section >
    )
}
