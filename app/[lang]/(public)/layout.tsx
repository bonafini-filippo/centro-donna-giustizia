import Footer from "@/components/footer";
import Header from "@/components/header"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionaries";

export default async function FrontLayout({
    children,
    params: { lang }
}: {
    children: React.ReactNode,
    params: { lang: Locale }
}) {

    const { pages, userMenu } = await getDictionary(lang)
    const dictionariesForHeader = { pages, userMenu };
    const dictionariesForFooter = { pages, userMenu };

    return (<>
        <Header dictionaries={dictionariesForHeader} lang={lang} />
        {children}
        <Footer dictionaries={dictionariesForFooter} lang={lang} />
    </>)
}
