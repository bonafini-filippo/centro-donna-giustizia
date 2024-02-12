import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { MetadataLayout } from '@/lib/pages'
import { Locale } from '@/i18n.config'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = MetadataLayout;

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  const session = await auth();

  console.log(session)

  return (
    <SessionProvider session={session}>
      <html lang={lang}>
        <body className={`${inter.className}`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
