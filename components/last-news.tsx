import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { IoMdArrowRoundForward } from "react-icons/io";

export function NewsCard({ title, image, alt }: any) {
    return (
        <Card className='w-[300px]  flex-shrink-0 overflow-hidden'>
            <Image width={300} height={250} src={image} alt={alt} className='h-[200px] object-cover' />
            <h2 className='text-2xl uppercase text-left mt-3 ml-3'>{title}</h2>
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
        <div className='flex overflow-x-auto overflow-y-hidden space-x-3 mx-4 py-5 pb-12'>
            <NewsCard
                title="testo di prova anche abbastanmza lungo con differenti lunghezze"
                image="/test/protesta1.jpg"
                alt="testo alternativo"
            />
            <NewsCard
                title="testo di prova anche abbastanmza lungo con differenti lunghezze"
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
        </div>
    );
}