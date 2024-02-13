import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Anton } from "next/font/google";
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const anton = Anton({
    subsets: ['latin'],
    weight: "400"
});

export function ItemCard({ title, par, image, alt, reverse }: any) {
    const flexDirectionClass = reverse ? 'flex-col md:flex-row-reverse' : 'md:flex-row flex-col';

    return (
        <Card className={` flex justify-between overflow-hidden rounded-xl  px-0 bg-[#DFDFDF] ${flexDirectionClass}`}>


            <Image width={500} height={450} src={image} alt={alt} className='w-full md:max-w-[400px] h-[300px] md:h-auto object-cover' />

            <div className='p-3 lg:p-8 space-y-5'>

                <div className='flex flex-col h-full'>

                    <h2 className={`${anton.className} text-primary text-5xl mb-5 uppercase text-left mt-3`}>{title}</h2>
                    <p className='text-lg flex-grow line-clamp-4'>{par}</p>


                    <div className='flex justify-end flex-wrap gap-4 mt-11'>
                        <Button variant="dark" className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto p-6`}>
                            <span>NASCONDI</span>
                            <FaEyeSlash />
                        </Button>
                        <Button variant="destructive" className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto  p-6`}>
                            <span>ELIMINA</span>
                            <MdDelete />
                        </Button>
                        <Button variant="yellow" className={`${anton.className} text-2xl uppercase space-x-2 w-full xl:w-auto  p-6`}>
                            <span>MODIFICA</span>
                            <MdEdit />
                        </Button>
                    </div>
                </div>

            </div>

        </Card>
    );
}