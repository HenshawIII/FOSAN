import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { CTACluster } from "@/components/shared/CTACluster";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Advocacy and Policy",
  description:
    "FoSAN supports policy engagement and institutional collaboration to strengthen food safety laws, standards, and implementation.",
  alternates: { canonical: "/advocacy" },
};

export default function AdvocacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Advocacy"
          eyebrowIcon={<Scale className="h-4 w-4 text-fosan-gold" aria-hidden />}
          title={
            <>
              Advocating for Stronger{" "}
              <span className="text-fosan-gold">Food Safety</span> Systems
            </>
          }
          subtitle="FoSAN supports policy engagement and institutional collaboration to strengthen food safety laws, standards, and implementation."
        />
        <ContentSection heading="Food Safety Needs Strong Systems" eyebrow="Why Policy Matters">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Food safety depends not only on individual practices, but also on the
            strength of systems, standards, enforcement, and public institutions.
            FoSAN recognizes that long-term improvement requires both community
            education and supportive policy environments.
          </p>
        </ContentSection>
        <ContentSection heading="What We Advocate For" eyebrow="Our Advocacy Focus" muted>
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We promote science-based food safety policies, stronger stakeholder
            collaboration, improved awareness, and systems that support compliance
            and public health protection.
          </p>
          <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We engage with relevant government agencies, regulators, and
            institutions to contribute to the advancement of food safety standards
            and practice.
          </p>
        </ContentSection>
        <ContentSection heading="Collaboration for Impact" eyebrow="Working Together">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We welcome collaboration with public institutions, regulators, research
            bodies, development organizations, and advocacy groups working to
            strengthen food safety in Nigeria.
          </p>
          <CTACluster items={[{ label: "Partner With FoSAN", href: "/contact" }]} />
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
