import HeroSection from "@/components/sections/hero-section"

const HeroImage = "/hero.png"

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

  </>)
}
