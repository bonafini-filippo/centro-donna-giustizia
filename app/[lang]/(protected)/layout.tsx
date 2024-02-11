import { auth } from '@/auth';
import { UserButton } from '@/components/auth/user-button';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionaries';
import { SessionProvider } from 'next-auth/react'
import Link from 'next/link';

export default async function PrivateLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {

    const session = await auth();
    const { userMenu } = await getDictionary(lang)

    return (
        <SessionProvider session={session}>
            <Link href="/">
                <div>Back to Website</div>
                <UserButton dictionaries={userMenu} lang={lang} />
            </Link>
            {children}
        </SessionProvider>
    )
}
