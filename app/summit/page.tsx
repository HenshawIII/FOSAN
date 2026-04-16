import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { AudienceList } from "@/components/shared/AudienceList";
import { CTACluster } from "@/components/shared/CTACluster";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const summitOffers = [
  "Expert-led knowledge-sharing",
  "Networking and collaboration opportunities",
  "Capacity-building sessions",
  "Cross-sector conversations on food safety challenges and solutions",
  "Opportunities to strengthen the food safety ecosystem",
] as const;

export const metadata: Metadata = {
  title: "Food Safety Ambassadors’ Summit",
  description:
    "A gathering for learning, collaboration, and capacity development in food safety.",
};

export default function SummitPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Summit"
          eyebrowIcon={UsersRound}
          title={
            <>
              Food Safety Ambassadors’ <span className="text-fosan-gold">Summit</span>
            </>
          }
          subtitle="A gathering for learning, collaboration, and capacity development in food safety."
        />
        <ContentSection heading="A Platform for Knowledge and Action" eyebrow="About the Summit">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            The Food Safety Ambassadors’ Summit is one of FoSAN’s flagship
            initiatives. It brings together food safety professionals, advocates,
            regulators, health stakeholders, and community actors to exchange
            ideas, share insights, build networks, and strengthen collective
            action.
          </p>
        </ContentSection>
        <ContentSection heading="What to Expect" eyebrow="What the Summit Offers" muted>
          <AudienceList items={summitOffers} />
        </ContentSection>
        <ContentSection heading="Who the Summit Is For" eyebrow="Who Should Attend">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            The summit is designed for scientists, food safety professionals,
            regulators, health practitioners, educators, advocates, institutions,
            and all stakeholders interested in improving food safety outcomes.
          </p>
          <CTACluster items={[{ label: "Partner or Sponsor the Summit", href: "/contact" }]} />
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
