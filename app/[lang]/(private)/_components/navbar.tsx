"use client"
import { useState } from "react";
import { FaRegNewspaper, FaPhotoFilm } from "react-icons/fa6";
import { FaHandsHelping, FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Item = ({ children, href, isOpen }: { children: React.ReactNode, href: string, isOpen: boolean }) => {
    return (
        <li>
            <Link className={`flex items-center pl-2 hover:bg-black/15 py-2 cursor-pointer gap-2 text-2xl ${isOpen && "flex justify-center items-center pl-0"} `} href={href}>
                {children}
            </Link>
        </li>
    )
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (<>
        <Button className="fixed bottom-0 right-0 z-50 " onClick={() => setIsOpen(!isOpen)}>
            apri
        </Button>
        <aside className={`flex flex-col justify-between transition-all duration-100 ${isOpen ? "w-[60px] md:w-[80px]" : " w-[500px]"} `}>
            <ul className="mt-4 ">
                <Item href="/dashboard" isOpen={isOpen}>
                    <MdDashboard className={`${isOpen && "text-2xl md:text-3xl lg:text-4xl"} text-primary `} /> <span className={`${isOpen && "hidden"} `} >Dashboard</span>
                </Item>
                <Item href="/news-settings" isOpen={isOpen}>
                    <FaRegNewspaper className={`${isOpen && "text-2xl md:text-3xl lg:text-4xl"} text-primary`} /> <span className={`${isOpen && "hidden"} `}>News</span>
                </Item>
                <Item href="/services-settings" isOpen={isOpen}>
                    <FaHandsHelping className={`${isOpen && "text-2xl md:text-3xl lg:text-4xl"} text-primary`} /> <span className={`${isOpen && "hidden"} `}>Services</span>
                </Item>
                <Item href="/gallery-settings" isOpen={isOpen}>
                    <FaPhotoFilm className={`${isOpen && "text-2xl md:text-3xl lg:text-4xl"} text-primary`} /> <span className={`${isOpen && "hidden"} `}>Galleria</span>
                </Item>
                <Item href="/users-settings" isOpen={isOpen}>
                    <FaUsers className={`${isOpen && "text-2xl md:text-3xl lg:text-4xl"} text-primary `} /> <span className={`${isOpen && "hidden"} `}>Utenti</span>
                </Item>
            </ul>

            {!isOpen && <div>
                <LogoutButton>
                    <div className="flex justify-center text-white items-center gap-2 text-2xl py-4 hover:bg-primary/40 bg-primary">
                        <span className={`${isOpen && "hidden"} `}>Logout</span>
                        <IoLogOut className={`${isOpen && "text-5xl"} `} />
                    </div>
                </LogoutButton>
            </div>}
        </aside>
    </>);
};

export default Navbar;