import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { MetadataLayout } from '@/lib/pages'
import { Locale } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = MetadataLayout;

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {



  return (
    <html lang={lang}>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
