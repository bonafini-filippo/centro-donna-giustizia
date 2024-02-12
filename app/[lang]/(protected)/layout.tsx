import { UserButton } from '@/components/auth/user-button';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionaries';
import Link from 'next/link';

export default async function PrivateLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {

    const { userMenu } = await getDictionary(lang)

    return (<>

        <Link href="/">
            <div>Back to Website</div>
            <UserButton dictionaries={userMenu} lang={lang} />
        </Link>
        <main className='p-3'>
            {children}
        </main>

    </>)
}
