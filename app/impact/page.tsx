import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { FosanInActionGallery } from "@/components/impact/FosanInActionGallery";
import { ExternalCredibilityCard } from "@/components/shared/ExternalCredibilityCard";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "How FoSAN strengthens food safety awareness, practical compliance, and resilient food systems.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Impact"
          eyebrowIcon={<ShieldCheck className="h-4 w-4 text-fosan-gold" aria-hidden />}
          title={
            <>
              Why <span className="text-fosan-gold">FoSAN</span> Matters
            </>
          }
          subtitle="FoSAN drives measurable impact through practical training, cross-sector summit engagement, and policy advocacy that strengthens food safety systems across communities."
        />
        <ContentSection heading="How FoSAN Creates Impact" eyebrow="Our Impact Focus">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="relative min-h-80 overflow-hidden rounded-2xl ring-1 ring-fosan-black/8 shadow-xl lg:min-h-136">
                <Image
                  src="/FOSAN9.jpeg"
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
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                FoSAN’s impact is built through focused interventions that move food
                safety from awareness into adoption. We strengthen knowledge,
                capacity, and collaboration through practical training, cross-sector
                learning, and policy engagement.
              </p>
              <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                These areas work together: training equips stakeholders with usable
                skills, the summit creates a platform for exchange and collective
                action, and advocacy helps strengthen the systems that support safer
                food for all.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Link
                  href="/training"
                  className="rounded-2xl border border-fosan-black/8 bg-[#fafbfb] p-5 transition-transform hover:-translate-y-0.5"
                >
                  <p className="font-heading text-lg text-fosan-green">Training</p>
                  <p className="font-body mt-2 text-sm leading-relaxed text-fosan-black/75">
                    Practical learning that improves safer food handling and compliance.
                  </p>
                </Link>
                <Link
                  href="/summit"
                  className="rounded-2xl border border-fosan-black/8 bg-[#fafbfb] p-5 transition-transform hover:-translate-y-0.5"
                >
                  <p className="font-heading text-lg text-fosan-green">Summit</p>
                  <p className="font-body mt-2 text-sm leading-relaxed text-fosan-black/75">
                    Shared learning, networking, and capacity building across sectors.
                  </p>
                </Link>
                <Link
                  href="/advocacy"
                  className="rounded-2xl border border-fosan-black/8 bg-[#fafbfb] p-5 transition-transform hover:-translate-y-0.5"
                >
                  <p className="font-heading text-lg text-fosan-green">Advocacy</p>
                  <p className="font-body mt-2 text-sm leading-relaxed text-fosan-black/75">
                    Science-based engagement that supports stronger food safety systems.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </ContentSection>
        <FosanInActionGallery />

        <section className="bg-[#fafbfb] py-16 sm:py-20" aria-labelledby="press-heading">
          <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
            <p className="font-body text-sm font-semibold tracking-wide text-fosan-green">
              In the Press
            </p>
            <h2
              id="press-heading"
              className="font-heading mt-3 text-2xl font-normal leading-tight text-fosan-black sm:text-4xl"
            >
              Recognized by FAO/WHO Codex
            </h2>
            <p className="font-body mt-4 max-w-3xl text-base leading-relaxed text-fosan-black/80 sm:text-lg">
              FoSAN’s work has been featured by the Codex Alimentarius Commission,
              documenting our ambassadors’ outreach and World Food Safety Day leadership.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <ExternalCredibilityCard
                title="Safer Food, Better Health: Making Food Safety Ambassadors"
                body="FAO/WHO Codex covers FoSAN’s World Food Safety Day summit and ambassadors’ outreach (13/06/2022), reinforcing our credibility in community food safety education."
                href="https://www.fao.org/fao-who-codexalimentarius/news-and-events/news-details/en/c/1539318/"
                imageSrc="/press/fao-safer-food-ambassadors.png"
                imageAlt="Codex article featuring FoSAN ambassadors at a World Food Safety Day event"
              />
              <ExternalCredibilityCard
                title="Nigerian university professor sends a clear message on World Food Safety Day"
                body="Codex highlights Professor Folake Henshaw’s World Food Safety Day address at FUNAAB (15/06/2021), where she made the case that unsafe food is not food."
                href="https://www.fao.org/fao-who-codexalimentarius/news-and-events/news-details/en/c/1412036/"
                imageSrc="/press/fao-world-food-safety-day-2021.png"
                imageAlt="Codex article featuring Professor Folake Henshaw speaking on World Food Safety Day"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
