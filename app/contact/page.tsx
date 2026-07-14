import type { Metadata } from "next";
import { Mail, MessageSquare, Phone, Globe } from "lucide-react";
import { ContentSection } from "@/components/shared/ContentSection";
import { PageHero } from "@/components/shared/PageHero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact FoSAN",
  description:
    "Reach out to partner, sponsor, volunteer, or learn more about FoSAN.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: Phone,
  },
  {
    label: "Website",
    value: "www.foodsafetyambassadors.org",
    href: SITE_URL,
    icon: Globe,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Contact"
          eyebrowIcon={<MessageSquare className="h-4 w-4 text-fosan-gold" aria-hidden />}
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl border border-fosan-black/10 bg-white p-4 transition-colors hover:border-fosan-green/30"
                  {...(item.label === "Website"
                    ? { rel: "noopener noreferrer" }
                    : {})}
                >
                  <p className="font-body inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fosan-green">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {item.label}
                  </p>
                  <p className="font-body mt-2 text-sm text-fosan-black/80 break-all">
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </ContentSection>
        <ContentSection heading="Send Us a Message" eyebrow="Contact Form Copy" muted>
          <form className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Full Name
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="min-h-12 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Full Name"
              />
            </label>
            <label className="flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Organization
              <input
                type="text"
                name="organization"
                autoComplete="organization"
                className="min-h-12 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Organization"
              />
            </label>
            <label className="flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Email Address
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="min-h-12 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Email Address"
              />
            </label>
            <label className="flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Phone Number
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className="min-h-12 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Phone Number"
              />
            </label>
            <label className="sm:col-span-2 flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Subject
              <input
                type="text"
                name="subject"
                required
                className="min-h-12 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Subject"
              />
            </label>
            <label className="sm:col-span-2 flex flex-col gap-2 font-body text-sm text-fosan-black/80">
              Message
              <textarea
                name="message"
                required
                className="min-h-36 w-full rounded-xl border border-fosan-black/15 px-4 py-3 outline-none ring-fosan-green/20 focus:ring-2"
                placeholder="Message"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="button"
                className="min-h-12 rounded-full bg-fosan-green px-6 py-3 font-body text-sm font-semibold text-white"
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
