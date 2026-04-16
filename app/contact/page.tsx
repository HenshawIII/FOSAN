import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Contact FoSAN",
  description:
    "Reach out to partner, sponsor, volunteer, or learn more about FoSAN.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Contact"
          eyebrowIcon={MessageSquare}
          title={
            <>
              Contact <span className="text-fosan-gold">FoSAN</span>
            </>
          }
          subtitle="We would love to hear from you. Reach out to partner, sponsor, volunteer, or learn more about our work."
        />
        <ContentSection heading="Get in Touch" eyebrow="Contact Block">
          <p className="font-body text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            For partnerships, sponsorships, training enquiries, media requests, or
            general information, please contact us through the details below.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Email", "Phone", "Website", "Address", "Social media handles"].map((item) => (
              <div key={item} className="rounded-xl border border-fosan-black/10 bg-white p-4">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-fosan-green">
                  {item}
                </p>
                <p className="font-body mt-2 text-sm text-fosan-black/70">Placeholder</p>
              </div>
            ))}
          </div>
        </ContentSection>
        <ContentSection heading="Send Us a Message" eyebrow="Contact Form Copy" muted>
          <form className="grid gap-4 sm:grid-cols-2">
            {[
              "Full Name",
              "Organization",
              "Email Address",
              "Phone Number",
              "Subject",
            ].map((field) => (
              <label key={field} className="flex flex-col gap-2 font-body text-sm text-fosan-black/80">
                {field}
                <input
                  type="text"
                  className="rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                  placeholder={field}
                />
              </label>
            ))}
            <label className="sm:col-span-2 flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Message
              <textarea
                className="min-h-36 rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Message"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="button"
                className="rounded-full bg-fosan-green px-6 py-3 font-body text-sm font-semibold text-white"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </ContentSection>
      </main>
      <SiteFooter />
    </>
  );
}
