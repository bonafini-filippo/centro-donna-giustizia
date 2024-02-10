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
        <section className={`${anton.className} flex justify-center items-center bg-black relative`}>
            <div className="relative bg-hero-bg h-screen md:h-[1000px] w-full bg-no-repeat bg-cover flex items-center">
                <div className="m-12 md:m-0 md:ml-12 md:pt-20">
                    <h1 className={`text-5xl lg:text-7xl md:text-6xl text-white text-center md:text-left uppercase max-w-[490px]`}>
                        {title}
                    </h1>

                    <div className="flex flex-col space-y-5 mt-10 justify-start text-center   ">
                        <Link href={actionUrl} className="bg-primary text-white uppercase py-2 hover:bg-primary/90  text-4xl rounded-sm">
                            {actionLab}
                        </Link>

                        <Link href={secondaryActionUrl} className="bg-white uppercase text-black hover:bg-white/50 py-1 text-2xl rounded-sm">
                            {secondaryActionLabel}
                        </Link>
                    </div>

                </div>
            </div>
            <div className="absolute bg-gradient-to-b from-transparent to-black h-[100px] bottom-0 right-0 left-0"></div>
        </section >
    )
}
