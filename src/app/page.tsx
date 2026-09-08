import { Hero } from "@/components/sections/hero";
import { Promise } from "@/components/sections/promise";
import { Explore } from "@/components/sections/explore";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <Explore />
      <PricingTeaser />
      <FaqSection />
      <Cta />
    </>
  );
}
