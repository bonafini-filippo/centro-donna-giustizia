import ServicesPeview from "../services-preview";


interface typesHeroSection {
    title: string,
    actionLab: string,
    actionUrl: string,
    secondaryActionLabel: string,
    secondaryActionUrl: string

}

export default function ServicesPeviewSection({ title, actionLab, actionUrl, secondaryActionLabel, secondaryActionUrl }: typesHeroSection) {
    return (
        <section>
            <ServicesPeview />
        </section >
    )
}
