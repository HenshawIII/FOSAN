import type { Metadata } from "next";
import { HandHeart } from "lucide-react";
import { CTACluster } from "@/components/shared/CTACluster";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join FoSAN in expanding food safety education, strengthening advocacy, and building healthier communities.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Get Involved"
          eyebrowIcon={HandHeart}
          title={
            <>
              Get <span className="text-fosan-gold">Involved</span>
            </>
          }
          subtitle="Join FoSAN in expanding food safety education, strengthening advocacy, and building healthier communities."
        />
        <ContentSection heading="For Partners" eyebrow="Partner With Us">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We welcome partnerships with organizations working in public health,
            food systems, education, agriculture, research, and community
            development.
          </p>
          <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Partnering with FoSAN means contributing to stronger awareness, safer
            food practices, and wider community impact.
          </p>
        </ContentSection>
        <ContentSection heading="For Sponsors" eyebrow="Sponsor Our Work" muted>
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Sponsors help us expand food safety training, outreach, campaigns, and
            capacity-building efforts. Your support can help equip more people with
            the knowledge and tools needed to improve food safety in their homes,
            workplaces, and communities.
          </p>
        </ContentSection>
        <ContentSection heading="For Volunteers" eyebrow="Volunteer With FoSAN">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            FoSAN welcomes professionals, students, and advocates who are
            passionate about food safety and community well-being. Volunteers can
            support outreach, education, advocacy, campaigns, and event activities.
          </p>
        </ContentSection>
        <ContentSection heading="Join Us in Promoting Safe Food for All" eyebrow="Final Call" muted>
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Together, we can expand education, strengthen advocacy, train more Food
            Safety Ambassadors, and build safer food systems for healthier
            communities.
          </p>
          <CTACluster
            items={[
              { label: "Become a Partner", href: "/contact" },
              { label: "Sponsor a Program", href: "/contact", secondary: true },
              { label: "Volunteer With Us", href: "/contact", secondary: true },
            ]}
          />
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
