import Header from '@/components/header'
import Footer from '@/components/footer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries';


const PublicLayout = async ({
    children,
    params: { lang }
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) => {


    const { pages, userMenu } = await getDictionary(lang)
    const dictionariesForHeader = { pages, userMenu };
    const dictionariesForFooter = { pages, userMenu };

    return (<>
        <Header dictionaries={dictionariesForHeader} lang={lang} />
        <main>
            {children}
        </main>
    </>);
};

export default PublicLayout;