import HeroSection from "@/components/sections/hero-section"
import NewsSection from "@/components/sections/news-section";
import ServicesPeview from "@/components/sections/services-preview-section";

import { getDictionary } from '@/lib/dictionaries';

export default async function Home({ params: { lang } }: any) {

  const { homeDict } = await getDictionary(lang)

  return (<>
    <HeroSection
      title={homeDict.title}
      actionLab={homeDict.actionLab}
      actionUrl="/contacts"
      secondaryActionLabel={homeDict.actionLabSecondary}
      secondaryActionUrl="/services"
    />
    <NewsSection
      title={homeDict.title}
      actionLab={homeDict.actionLab}
      actionUrl="/contacts"
      secondaryActionLabel={homeDict.actionLabSecondary}
      secondaryActionUrl="/services"
    />
    <ServicesPeview
      title={homeDict.title}
      actionLab={homeDict.actionLab}
      actionUrl="/contacts"
      secondaryActionLabel={homeDict.actionLabSecondary}
      secondaryActionUrl="/services"
    />
  </>)
}
