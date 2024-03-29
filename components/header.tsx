"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Anton } from "next/font/google";

const anton = Anton({
    subsets: ['latin'],
    weight: "400"
})

export default function Header({ dictionaries, lang }: any) {
    const { pages } = dictionaries;

    const pathnameLang = usePathname();
    const pathname = pathnameLang.replace(/^\/[a-z]{2}\b/, '');

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <header className={` ${anton.className} flex absolute top-0 right-0 left-0 `}>

            <nav className="flex items-center md:justify-normal justify-between flex-grow md:flex-row md:gap-x-4 mt-12 pb-12">
                <div className="flex z-50 ">
                    <Button
                        onClick={() => { setOpenMenu(false) }}
                        asChild
                        variant={pathname === `"/"` ? "link" : "link"}>
                        <Link href={`/${lang}`}>
                            <Image src={"/logo.svg"} width={90} height={90} alt="Centro-Donna-Giustizia"></Image>
                        </Link>
                    </Button>
                </div>

                <div className={`flex gap-12 flex-col md:relative absolute z-30 top-0 left-0 duration-100 overflow-hidden  bottom-0 md:block md:bg-transparent md:pt-0 pt-36 bg-black  h-screen md:h-auto ${openMenu ? "right-0" : "right-full"}`}>

                    {Object.keys(pages).map(key => {
                        const page = pages[key];
                        return (
                            <Button
                                className={`text-4xl md:text-base ${(pathname === "" ? (openMenu ? "text-white" : "text-white") : (openMenu ? "text-white" : "text-black"))}`}
                                key={page.label}
                                asChild
                                variant={pathname !== page.href ? "link" : "underline"}
                                onClick={closeMenu}
                            >
                                <Link href={`/${lang}/${page.href}`}>
                                    <span className="text-5xl md:text-2xl uppercase"> {page.label}</span>
                                </Link>
                            </Button>
                        );
                    })}
                </div>
                <div className="w-[72px] md:hidden flex justify-center items-center z-50 cursor-pointer" onClick={toggleMenu}>
                    {openMenu ?
                        <IoCloseOutline className={`text-white w-12 h-12 `} /> :
                        <CiMenuBurger className={`${pathname === "" ? "text-white" : "text-black"}  w-12 h-12 `} />
                    }
                </div>
            </nav>


        </header >
    )
}
