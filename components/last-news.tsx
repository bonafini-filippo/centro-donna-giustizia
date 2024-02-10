import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

export function NewsCard({ title, image, alt }: any) {
    return (
        <Card className='w-[300px] flex flex-col  flex-shrink-0 overflow-hidden'>
            <Image width={300} height={250} src={image} alt={alt} className='h-[200px] object-cover' />
            <h2 className='text-2xl  flex-grow uppercase text-left mt-3 ml-3 line-clamp-4'>{title}</h2>
            <div className='flex justify-end'>
                <Button variant="dark" className='text-xl m-3 space-x-2'>
                    <span>LEGGI DI PIU</span>
                    <IoMdArrowRoundForward />
                </Button>
            </div>

        </Card>
    );
}

export default function LastNews() {
    return (
        <div className='relative md:mx-auto bg-black px-2'>
            <div className='flex overflow-x-auto overflow-y-hidden space-x-3 pb-3'>
                <NewsCard
                    title="testo di prova anche abbaasfasfstanmzahezze"
                    image="/test/protesta1.jpg"
                    alt="testo alternativo"
                />
                <NewsCard
                    title="testo di prova anche bello abbastanmza lungo con differenti lunghezze cosi da far capire come ci si comporta"
                    image="/test/protesta2.jpg"
                    alt="testo alternativo"
                /> <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta3.jpg"
                    alt="testo alternativo"
                /> <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta4.jpg"
                    alt="testo alternativo"
                />
                <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta4.jpg"
                    alt="testo alternativo"
                />
                <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta4.jpg"
                    alt="testo alternativo"
                />
                <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta4.jpg"
                    alt="testo alternativo"
                />
                <NewsCard
                    title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                    image="/test/protesta4.jpg"
                    alt="testo alternativo"
                />
                <Card className='w-[300px] text-black flex flex-col hover:bg-black cursor-pointer transition-all  flex-shrink-0 overflow-hidden group'>
                    <div className='m-auto flex flex-col items-center'>
                        <div>
                            <FaPlay size={100} className='group-hover:text-white' />
                        </div>
                        <h2 className='text-4xl group-hover:text-white  flex-grow uppercase text-left mt-9 ml-3 line-clamp-4'>
                            Mostra tutte
                        </h2>
                    </div>
                </Card>
            </div>
            <div className='absolute left-0 top-0 w-12  bg-gradient-to-r from-black to-transparent h-full'></div>
            <div className='absolute right-0  top-0 w-12 bg-gradient-to-r from-transparent to-black h-full'></div>
        </div>

    );
}