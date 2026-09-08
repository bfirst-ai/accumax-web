import { Hero } from "@/components/sections/hero";
import { Promise } from "@/components/sections/promise";
import { HowItWorks, NoRipAndReplace } from "@/components/sections/how-it-works";
import { AiAgents } from "@/components/sections/ai-agents";
import { AccuTaxSection } from "@/components/sections/accutax";
import { UnitEconomics } from "@/components/sections/unit-economics";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <HowItWorks />
      <AiAgents />
      <AccuTaxSection />
      <NoRipAndReplace />
      <UnitEconomics />
      <PricingTeaser />
      <FaqSection />
      <Cta />
    </>
  );
}