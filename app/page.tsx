import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { WhyFoodSafetySection } from "@/components/home/WhyFoodSafetySection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { PartnerImpactSection } from "@/components/home/PartnerImpactSection";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyFoodSafetySection />
        <WhoWeServeSection />
        <PartnerImpactSection />
      </main>
      <GetInvolvedSection />
      <SiteFooter />
    </>
  );
}
