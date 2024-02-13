import { auth } from '@/auth';
import Unauthorized from '@/components/unauthorized';
import { Locale } from '@/i18n.config';
import { currentRole } from '@/lib/auth';
import { getDictionary } from '@/lib/dictionaries';
import { SessionProvider } from 'next-auth/react';
import { RoleGate } from '@/components/auth/role-gate';
import Navbar from './_components/navbar';


export default async function PrivateLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {
    const session = await auth();
    const role = await currentRole()
    return (
        <SessionProvider session={session}>
            <RoleGate allowedRoles={["ADMIN", "EDITOR"]} >
                <div className='flex relative h-full overflow-hidden'>
                    <div className='flex relative h-full'>
                        <Navbar />
                    </div>
                    <main className='bg-zinc-100 flex-grow p-1 md:p-2 lg:p-6'>
                        {children}
                    </main>
                </div>
            </RoleGate>
        </SessionProvider >)
}
