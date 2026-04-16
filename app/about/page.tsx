import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutPageSections } from "@/components/about/AboutPageSections";
import { ConvenerProfileSection } from "@/components/about/ConvenerProfileSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExternalCredibilityCard } from "@/components/shared/ExternalCredibilityCard";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";

export const metadata: Metadata = {
  title: "About FoSAN",
  description:
    "A network of scientists and professionals advancing food safety education, awareness, and action across Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <AboutPageSections />
        <ConvenerProfileSection />
        <GetInvolvedSection />
      </main>
      <SiteFooter />
    </>
  );
}
