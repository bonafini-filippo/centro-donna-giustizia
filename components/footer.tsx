import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { FaLock } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Footer({ dictionaries, lang }: any) {
    const { pages } = dictionaries
    return (
        <footer className="p-4 bg-zinc-50 md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <p className="my-6 text-gray-500 dark:text-gray-400">Centro Donna Giustizia</p>
                <nav>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        {Object.keys(pages).map(key => {
                            const page = pages[key];
                            return (
                                <li key={page.label}>
                                    <Link className="mr-4 hover:underline md:mr-6" href={`/${lang}/${page.href}`}>{page.label}</Link>
                                </li>)
                        })}
                    </ul>
                </nav>




                <div className="md:flex justify-between items-center w-full">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.fb-development.com/" className="hover:underline">FB-Development</a>. All Rights Reserved.</span>

                    <div className="flex mt-3 md:mt-0 justify-center items-center space-x-2">
                        <LocaleSwitcher />
                        <Link href="/dashboard">
                            <Button className="gap-1"><FaLock /><span>Area privata</span></Button>
                        </Link>
                    </div>

                </div>


            </div>
        </footer>
    )
}
