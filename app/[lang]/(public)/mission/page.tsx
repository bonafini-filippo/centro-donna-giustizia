import { MetadataMissionPage } from "@/lib/pages";
import { Metadata } from "next";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata: Metadata = MetadataMissionPage;

const MissionPage = () => {
    return (
        <div>
            <section className=" mt-28">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <section>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h1 className="text-2xl font-bold tracki sm:text-3xl text-primary ">Assistenza e sostegno alle persone vittime di violenza</h1>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Supporto Completo</h4>
                                            <p className="mt-2 ">Fornire supporto legale, psicologico ed emotivo alle donne e ai minori colpiti da violenza.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Ambiente protetto</h4>
                                            <p className="mt-2 ">Garantire un ambiente sicuro e rispettoso dove le persone possano trovare ascolto e supporto.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Promozione dell&apos;autonomia</h4>
                                            <p className="mt-2 ">Promuovere l&apos;autonomia e la ripresa delle persone attraverso programmi di assistenza personalizzati.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <Image src="/mission1.png" width={500} height={500} alt="La nostra missione" className="mx-auto rounded-lg shadow-lg " />
                            </div>
                        </div>
                    </section>
                    <section className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h1 className="text-2xl text-primary font-bold tracki sm:text-3xl ">Sensibilizzazione e prevenzione della violenza di genere</h1>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaCheck size={36} className="text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Educazione e sensibilizzazione comunitaria</h4>
                                        <p className="mt-2 ">Condurre attività educative e informative per sensibilizzare la comunità sulla violenza contro le donne e i minori.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaCheck size={36} className="text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Formazione per la consapevolezza</h4>
                                        <p className="mt-2 ">Offrire formazione per riconoscere e affrontare situazioni di abuso e discriminazione.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <FaCheck size={36} className="text-primary" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Collaborazione per la prevenzione</h4>
                                        <p className="mt-2 ">Collaborare con istituzioni locali e organizzazioni per implementare politiche e iniziative di prevenzione della violenza.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <Image src="/mission3.png" width={500} height={500} alt="La nostra missione" className="mx-auto rounded-lg shadow-lg " />
                        </div>
                    </section>
                    <section>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h1 className="text-2xl font-bold tracki sm:text-3xl text-primary ">Promozione dell&apos;empowerment femminile</h1>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Promozione dell&apos;auto-assertività</h4>
                                            <p className="mt-2 ">Promuovere l&apos;auto-assertività e l&apos;autonomia delle donne attraverso programmi di empowerment.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Partecipazione attiva delle donne</h4>
                                            <p className="mt-2 ">Favorire la partecipazione attiva delle donne nella società e nella presa di decisioni.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <FaCheck size={36} className="text-primary" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leadi ">Fornire strumenti per il superamento</h4>
                                            <p className="mt-2 ">Offrire risorse pratiche e strumenti per aiutare le persone a superare situazioni di violenza e adottare uno stile di vita indipendente e sicuro.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <Image src="/mission2.png" width={500} height={500} alt="La nostra missione" className="mx-auto rounded-lg shadow-lg " />
                            </div>
                        </div>
                    </section>

                </div>
            </section></div>
    );
};

export default MissionPage;