import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AudienceList } from "@/components/shared/AudienceList";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const trainingAudience = [
  "Market women and fresh food retailers",
  "Street food vendors",
  "Eateries and restaurant operators",
  "Caterers, bakers, and confectioners",
  "Hospitality professionals",
  "School catering services and childcare centers",
  "Supermarkets and retail stores",
  "Consumers",
] as const;

const certificationAudience = [
  "Health inspectors",
  "Environmental officers",
  "Catering facility inspectors",
  "Food regulators",
  "Health professionals",
  "Nutritionists and dieticians",
  "Farmers and extension officers",
] as const;

export const metadata: Metadata = {
  title: "Our Programs and Services",
  description:
    "FoSAN delivers education, training, advocacy, and engagement initiatives designed to improve food safety knowledge and practice.",
};

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Programs"
          eyebrowIcon={BriefcaseBusiness}
          title={
            <>
              Our <span className="text-fosan-gold">Programs</span> and Services
            </>
          }
          subtitle="FoSAN delivers education, training, advocacy, and engagement initiatives designed to improve food safety knowledge and practice across the food value chain."
        />

        <ContentSection
          heading="Food Safety Training & Workshops"
          eyebrow="Practical Capacity Building"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                We organize practical food safety training sessions and workshops tailored
                to the everyday realities of food handlers, businesses, and communities.
                These sessions are designed to improve awareness, strengthen safe
                practices, and reduce food safety risks.
              </p>
              <h3 className="font-heading mt-8 text-xl text-fosan-green">Who It&apos;s For</h3>
              <div className="mt-4">
                <AudienceList items={trainingAudience} />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative min-h-80 overflow-hidden rounded-2xl ring-1 ring-fosan-black/8 shadow-xl lg:min-h-136">
                <Image
                  src="/FOSAN1.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  quality={92}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-fosan-green/65 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-heading text-xl text-white sm:text-2xl">
                    Practical sessions that translate food safety knowledge into safer everyday practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          heading="Short Courses & Ambassador Certification"
          eyebrow="Professional Development"
          muted
        >
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Our short courses and ambassador certification programs equip
            professionals and stakeholders with deeper food safety knowledge and the
            capacity to share that knowledge within their institutions and
            communities.
          </p>
          <h3 className="font-heading mt-8 text-xl text-fosan-green">Who It&apos;s For</h3>
          <div className="mt-4">
            <AudienceList items={certificationAudience} />
          </div>
        </ContentSection>

        <ContentSection heading="Public Awareness Campaigns" eyebrow="Community Awareness">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            FoSAN promotes food safety awareness through public enlightenment
            campaigns using print, electronic, and other media channels. Our
            campaigns are designed to make food safety information easier to
            understand, more visible, and more actionable.
          </p>
          <div className="mt-6">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 rounded-full bg-fosan-green px-6 py-3 font-body text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              See Our Impact
            </Link>
          </div>
        </ContentSection>

        <ContentSection heading="Food Safety Ambassadors’ Summit" eyebrow="Shared Learning Platform" muted>
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            The Food Safety Ambassadors’ Summit is a platform for knowledge-sharing,
            networking, and capacity development. It brings together experts,
            professionals, institutions, and advocates working to strengthen food
            safety systems and practice.
          </p>
          <div className="mt-6">
            <Link
              href="/summit"
              className="inline-flex items-center gap-2 rounded-full border-2 border-fosan-gold bg-white px-6 py-3 font-body text-sm font-semibold text-fosan-green transition-transform hover:scale-[1.02]"
            >
              Explore the Summit
            </Link>
          </div>
        </ContentSection>

        <ContentSection heading="Policy Engagement and Advocacy" eyebrow="Systems Strengthening">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We engage with food regulatory agencies and relevant institutions to
            support stronger food safety laws, standards, and science-based policies.
            Through advocacy and collaboration, FoSAN contributes to the broader
            effort to strengthen food safety governance and accountability.
          </p>
          <div className="mt-6">
            <Link
              href="/advocacy"
              className="inline-flex items-center gap-2 rounded-full border-2 border-fosan-green bg-white px-6 py-3 font-body text-sm font-semibold text-fosan-green transition-transform hover:scale-[1.02]"
            >
              Learn About Advocacy
            </Link>
          </div>
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
