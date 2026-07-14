import type { Metadata } from "next";
import { Library } from "lucide-react";
import { CTACluster } from "@/components/shared/CTACluster";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

const resources = [
  "Downloadable guides",
  "Multilingual materials",
  "Awareness posters",
  "Campaign assets",
  "Training materials",
  "Food safety tips",
] as const;

export const metadata: Metadata = {
  title: "Food Safety Resources",
  description:
    "Educational materials, awareness content, and practical information to support safer food handling and better food safety practices.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Resources"
          eyebrowIcon={<Library className="h-4 w-4 text-fosan-gold" aria-hidden />}
          title={
            <>
              Food Safety <span className="text-fosan-gold">Resources</span>
            </>
          }
          subtitle="Educational materials, awareness content, and practical information to support safer food handling and better food safety practices."
        />
        <ContentSection heading="Resource Library" eyebrow="Knowledge Access">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            FoSAN develops and shares educational resources designed to improve
            understanding and encourage practical food safety action among diverse
            stakeholders.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {resources.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-fosan-black/10 bg-white p-4 font-body text-sm text-fosan-black/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <CTACluster items={[{ label: "Access Resources", href: "/contact" }]} />
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
