import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

export function NewsCard({ title, description, image, alt }: any) {
    return (
        <Card className='w-[270px] flex flex-col  flex-shrink-0 overflow-hidden'>
            <Image width={270} height={250} src={image} alt={alt} className='h-[200px] object-cover' />
            <div className='text-left mt-3 ml-3 flex-grow '>
                <h2 className='text-2xl  flex-grow uppercase line-clamp-1'>{title}</h2>
                <p className='text-start  line-clamp-5'>{description}</p>
            </div>

            <div className='flex justify-end'>
                <Button variant="dark" className='text-xl m-3 space-x-2'>
                    <span>LEGGI DI PIU</span>
                    <IoMdArrowRoundForward />
                </Button>
            </div>

        </Card>
    );
}

export default function LastNews({ news }: any) {
    return (
        <div className='relative md:mx-auto bg-black px-2'>
            <div className='flex overflow-x-auto overflow-y-hidden space-x-3 pb-3'>
                {news?.map((news: any) => (
                    <NewsCard
                        key={news.id}
                        title={news.title}
                        image="/test/protesta1.jpg"
                        alt={news.title}
                        description={news.description}
                    />
                ))}

            </div>

        </div>

    );
}