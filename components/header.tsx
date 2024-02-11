"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";
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

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className={` ${anton.className} flex absolute top-0 right-0 left-0  bg-black`}>

            <nav className="flex items-center md:justify-normal justify-between flex-grow md:flex-row md:gap-x-4 mt-12 pb-12">
                <div className="flex z-50 ">
                    <Button
                        onClick={() => { setOpenMenu(false) }}
                        asChild
                        variant={pathname === `"/"` ? "link" : "link"}>
                        <Link href={`/${lang}`}>
                            <Image src={"/logo.svg"} width={100} height={100} alt="Centro-Donna-Giustizia"></Image>
                        </Link>
                    </Button>
                </div>

                <div className={`flex gap-16 flex-col md:relative absolute z-30 top-0 left-0 duration-100 overflow-hidden  bottom-0 md:block md:bg-transparent md:pt-0 pt-44 bg-black  h-screen md:h-auto ${openMenu ? "right-0" : "right-full"}`}>

                    {Object.keys(pages).map(key => {
                        const page = pages[key];
                        return (
                            <Button
                                className="text-4xl md:text-base text-white "
                                key={page.label}
                                asChild
                                variant={pathname === page.href ? "link" : "link"}
                                onClick={toggleMenu}
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
                        <IoCloseOutline className="text-white w-12 h-12 " /> :
                        <CiMenuBurger className="text-white  w-12 h-12 " />
                    }
                </div>
            </nav>


        </header>
    )
}
