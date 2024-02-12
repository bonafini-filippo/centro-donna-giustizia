import { auth } from '@/auth';
import { UserButton } from '@/components/auth/user-button';
import Unauthorized from '@/components/unauthorized';
import { useCurrentRole } from '@/hooks/use-current-role';
import { Locale } from '@/i18n.config';
import { currentRole } from '@/lib/auth';
import { getDictionary } from '@/lib/dictionaries';
import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

export default async function PrivateLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {

    const session = await auth();
    const { userMenu, noAccessDict } = await getDictionary(lang)
    const role = await currentRole()
    return (
        <SessionProvider session={session}>
            {
                role === "USER" ? (
                    <div className='md:pt-20 p-2'>
                        <Unauthorized dictionaries={noAccessDict} lang={lang} />
                    </div>
                ) : (<>
                    <Link href="/">
                        <div>Back to Website</div>
                    </Link>
                    <UserButton dictionaries={userMenu} lang={lang} />
                    <main className='p-1'>
                        {children}
                    </main>
                </>)
            }






        </SessionProvider>)
}
