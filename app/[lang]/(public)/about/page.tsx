import { MetadataAboutPage } from "@/lib/pages";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = MetadataAboutPage;

const AboutPage = () => {
    return (
        <>
            <div className="2xl:container 2xl:mx-auto lg:py-16 mt-28 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-primary pb-4">Chi siamo</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Il Centro Donna Giustizia è un&apos;associazione senza scopo di lucro che si impegna per promuovere la solidarietà sociale e la dignità degli individui, in particolare donne e minori, italiani e stranieri, vittime di violenza psicologica, fisica, sessuale ed economica. Operiamo nei settori dell&apos;assistenza sociale e socio-sanitaria, nonché nella tutela dei diritti civili di coloro che si trovano in situazioni di svantaggio. Presso la nostra sede, favoriamo il confronto e l&apos;empowerment delle donne, offrendo una gamma di servizi come consulenza legale, supporto psicologico e sensibilizzazione sul territorio. Lavoriamo per rimuovere gli ostacoli all&apos;autonomia delle donne e per contrastare la discriminazione di genere, promuovendo progetti finalizzati alla realizzazione personale e alla creazione di una cultura di rispetto e uguaglianza. Il nostro obiettivo è fornire alle donne le risorse e il sostegno necessari per uscire dalla violenza e costruire una vita autonoma e dignitosa.</p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <Image width={750} height={500} className="w-full h-full rounded-3xl shadow-lg" src="/about.jpg" alt="Chi siamo" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-primary pb-4">La nostra storia</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Nel 1981 nasce il Gruppo Donne e Giustizia per contrastare la violenza contro le donne. Si evolve nel tempo affrontando varie forme di abuso, offrendo ascolto, supporto, consulenza legale, e ampliando i servizi con &quot;Telefono Donna&quot; nel 1989 e &quot;Consulenza Psicologica&quot; nel 1993. Nel dicembre 1993 diventa il &quot;Centro Donna Giustizia&quot;, iscritto agli albi regionali e nazionali. Dal 2009 è un&apos;Associazione di Promozione Sociale.</p>
                    </div>


                </div>
            </div>
        </>);
};

export default AboutPage;