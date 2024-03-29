"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Anton } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ShowButton from "../news-settings/_components/show-button";
import DeleteButton from "../news-settings/_components/delete-button";
import Link from "next/link";


const anton = Anton({
    subsets: ['latin'],
    weight: "400"
});

export function ItemCard({ id, title, par, image, alt, reverse, enabled }: any) {
    const flexDirectionClass = reverse ? 'flex-col md:flex-row-reverse' : 'md:flex-row flex-col';
    const [visible, setVisible] = useState(enabled)
    const [deleted, setDeleted] = useState(false)
    const toggleVisible = () => {
        setVisible(!visible)
    }

    return (<>
        {!deleted && <Card className={` flex justify-between relative overflow-hidden rounded-xl  px-0 bg-[#DFDFDF] ${flexDirectionClass}`}>

            {!visible && <div className="bg-black/60 absolute top-0 bottom-0 left-0 right-0 z-30"></div>}


            <Image width={500} height={450} src={image} alt={alt} className='w-full md:max-w-[400px] h-[300px] md:h-auto object-cover' />

            <div className='p-3 lg:p-8 space-y-5  flex-grow'>

                <div className='flex flex-col h-full'>

                    <h2 className={`${anton.className} text-primary text-5xl mb-5 uppercase text-left mt-3`}>{title}</h2>
                    <p className='text-lg flex-grow line-clamp-4'>{par}</p>


                    <div className='flex justify-end flex-wrap gap-4 mt-11 z-50'>
                        <ShowButton id={id} status={enabled}>
                            <Button onClick={toggleVisible} variant={!visible ? "dark" : "outline"} className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto p-6`}>
                                <span>{visible ? "Nascondi" : "mostra"}</span>
                                {visible ? <FaEyeSlash /> : <FaEye />}
                            </Button>
                        </ShowButton>

                        <DeleteButton id={id} onClick={() => setDeleted(true)}>
                            <Button variant="destructive" className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto p-6`}>
                                <span>ELIMINA</span>
                                <MdDelete />
                            </Button>
                        </DeleteButton>

                        <Link href="/news-settings/edit">
                            <Button variant="yellow" className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto  p-6`}>
                                <span>MODIFICA</span>
                                <MdEdit />
                            </Button>
                        </Link>

                    </div>
                </div>

            </div>

        </Card>}
    </>);
}