import Image from "next/image"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="relative pt-20 mt-24 container my-3 lg:my-28 gap-10 md:gap-20 h-full" >
            <div className="my-auto">
                {children}
            </div>
        </section>
    )
}
