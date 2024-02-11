'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'
import { Button } from './ui/button'



export default function LocaleSwitcher() {
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <ul className='flex gap-x-1'>
            {i18n.locales.map(locale => {
                return (

                    <li key={locale}>
                        <Button variant="dark" className='w-[50px]'>
                            <Link
                                href={redirectedPathName(locale)}
                            >
                                {locale}
                            </Link>
                        </Button>
                    </li>


                )
            })}
        </ul>
    )
}