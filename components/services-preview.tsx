import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { Anton } from 'next/font/google';
import { IoMdArrowRoundForward } from 'react-icons/io';

const anton = Anton({
    subsets: ['latin'],
    weight: "400"
});

export function NewsCard({ title, par, image, alt, reverse }: any) {
    const flexDirectionClass = reverse ? 'flex-row-reverse' : 'flex-row';

    return (
        <Card className={`flex justify-between overflow-hidden rounded-xl w-[1200px] text-black px-0 bg-[#DFDFDF] ${flexDirectionClass}`}>
            <div className='p-10 space-y-5'>

                <div className='flex flex-col h-full'>

                    <h2 className={`${anton.className} text-6xl mb-5 uppercase text-left mt-3`}>{title}</h2>
                    <p className='text-lg flex-grow'>{par}</p>


                    <div className='flex justify-end'>
                        <Button size={'lg'} variant="dark" className={`${anton.className} text-3xl uppercase space-x-2`}>
                            <span>Scopri</span>
                            <IoMdArrowRoundForward />
                        </Button>
                    </div>
                </div>





            </div>
            <Image width={500} height={450} src={image} alt={alt} className='h-[400px] object-cover' />
        </Card>
    );
}

export default function ServicesPeview() {
    return (
        <div className='flex flex-col justify-center items-center my-14 space-y-9'>


            <NewsCard
                title="uscire dalla violenza"
                image="/test/protesta1.jpg"
                alt="testo alternativo"
                par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
            />
            <NewsCard
                title="oltre la strada"
                image="/test/protesta4.jpg"
                alt="testo alternativo"
                par="Questo è un testo riempitivo per capire il situlatato finale come possa prendere le sembianze, senza pensare di inserire testi già completi e prodotti. Qa ci andrà una breve descrizione del contesto generale della sezione."
                reverse
            />


            <Card className={`flex justify-center items-center rounded-xl w-[1200px] hover:bg-black/15 cursor-pointer text-black  bg-[#DFDFDF]`}>
                <h2 className={`${anton.className} text-3xl uppercase text-left my-3 flex justify-center items-center gap-2`}>
                    <span>MOSTRA TUTTI I SERVIZI</span>
                    <IoMdArrowRoundForward size={43} />
                </h2>
            </Card>
        </div>
    );
}
