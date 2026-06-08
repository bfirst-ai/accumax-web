import { Hero } from "@/components/sections/hero";
import { TrustBadges } from "@/components/sections/trust-badges";
import { GoalsSection } from "@/components/sections/goals";
import { PortalsNetwork } from "@/components/sections/portals-network";
import { Features } from "@/components/sections/features";
import { Integrations } from "@/components/sections/integrations";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <GoalsSection />
      <PortalsNetwork />
      <Features />
      <Integrations />
      <PricingTeaser />
      <FaqSection />
      <Cta />
    </>
  );
}
