import { Hero } from "@/components/sections/hero";
import { MarketProblem } from "@/components/sections/market-problem";
import { Promise } from "@/components/sections/promise";
import { Pillars } from "@/components/sections/pillars";
import { GoalsSection } from "@/components/sections/goals";
import { AiAgents } from "@/components/sections/ai-agents";
import { PracticeOs } from "@/components/sections/practice-os";
import { CompetitivePosition } from "@/components/sections/competitive-position";
import { UnitEconomics } from "@/components/sections/unit-economics";
import { Integrations } from "@/components/sections/integrations";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketProblem />
      <Promise />
      <Pillars />
      <GoalsSection />
      <AiAgents />
      <PracticeOs />
      <CompetitivePosition />
      <UnitEconomics />
      <Integrations />
      <PricingTeaser />
      <FaqSection />
      <Cta />
    </>
  );
}