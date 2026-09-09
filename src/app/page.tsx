import { Hero } from "@/components/sections/hero";
import { Promise } from "@/components/sections/promise";
import { Explore } from "@/components/sections/explore";
import { FaqSection } from "@/components/sections/faq";
import { OnePlatform } from "@/components/sections/one-platform";
import { Cta } from "@/components/sections/cta";
import { MarginBasisNote } from "@/components/ui/margin-claim";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <Explore />
      <FaqSection />
      <OnePlatform />
      <MarginBasisNote />
      <Cta />
    </>
  );
}
