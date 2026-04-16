import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { AudienceList } from "@/components/shared/AudienceList";
import { CTACluster } from "@/components/shared/CTACluster";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const audiences = [
  "Food vendors and market traders",
  "Restaurant and eatery operators",
  "Caterers and bakers",
  "Hospitality professionals",
  "School food service providers",
  "Supermarket and retail staff",
  "Health professionals",
  "Inspectors and regulators",
  "Farmers and extension workers",
  "Consumers and community groups",
] as const;

const benefits = [
  "Better understanding of food safety hazards",
  "Practical guidance on prevention and safe handling",
  "Increased awareness of hygiene and sanitation",
  "Improved confidence in food safety compliance",
  "Tools to promote safer practices in workplaces and communities",
] as const;

export const metadata: Metadata = {
  title: "Training",
  description:
    "FoSAN provides practical, science-based food safety training for stakeholders across the food value chain.",
};

export default function TrainingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Training"
          eyebrowIcon={GraduationCap}
          title={
            <>
              Training for <span className="text-fosan-gold">Safer Food</span>{" "}
              Practices
            </>
          }
          subtitle="FoSAN provides practical, science-based food safety training for stakeholders across the food value chain."
        />
        <ContentSection heading="Practical Learning for Real Food Safety Challenges" eyebrow="Training Overview">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Our training programs are designed to help participants understand food
            safety risks, improve hygiene and handling practices, and strengthen
            compliance with food safety standards.
          </p>
          <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We focus on practical knowledge that can be applied in markets,
            kitchens, retail settings, institutions, and professional environments.
          </p>
          <CTACluster items={[{ label: "Request a Training", href: "/contact" }]} />
        </ContentSection>
        <ContentSection heading="Who We Train" eyebrow="Training Audiences" muted>
          <AudienceList items={audiences} />
        </ContentSection>
        <ContentSection heading="What Participants Gain" eyebrow="Training Benefits">
          <AudienceList items={benefits} />
        </ContentSection>
        <ContentSection heading="Ambassador Certification" eyebrow="Certification" muted>
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Selected FoSAN training programs include pathways for ambassador
            certification, helping participants become food safety advocates who can
            transfer knowledge and promote safer practices within their communities
            and networks.
          </p>
          <CTACluster
            items={[{ label: "Enquire About Certification", href: "/contact" }]}
          />
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
