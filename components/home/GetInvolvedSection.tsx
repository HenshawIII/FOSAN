"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  DollarSign,
  HandHeart,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const actions = [
  {
    title: "Partner",
    description:
      "Collaborate with us to expand education, advocacy, and community impact.",
    cta: "Partner With FoSAN",
    href: "#contact",
    icon: HandHeart,
    accent: "bg-fosan-green/12 text-fosan-green ring-fosan-green/15",
    bar: "bg-fosan-gold",
  },
  {
    title: "Sponsor",
    description:
      "Support programs that strengthen food safety knowledge and capacity.",
    cta: "Sponsor a Program",
    href: "#contact",
    icon: DollarSign,
    accent: "bg-fosan-turquoise/12 text-fosan-turquoise ring-fosan-turquoise/20",
    bar: "bg-fosan-turquoise",
  },
  {
    title: "Volunteer",
    description:
      "Join a growing network of people committed to healthier, safer communities.",
    cta: "Volunteer With Us",
    href: "#contact",
    icon: Users,
    accent: "bg-fosan-gold/25 text-fosan-green ring-fosan-gold/40",
    bar: "bg-fosan-teal",
  },
] as const;

export function GetInvolvedSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([".involve-reveal", ".involve-card"], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }
      gsap.from(".involve-reveal", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 22,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
      });
      gsap.from(".involve-card", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 28,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} aria-labelledby="get-involved-heading">
      {/* White band after deep-green partner — breathing room */}
      <div
        id="get-involved"
        className="scroll-mt-24 border-t border-fosan-black/5 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
            <div className="lg:col-span-5">
              <div className="involve-reveal lg:sticky lg:top-28">
                <p className="font-body text-sm font-semibold tracking-wide text-fosan-green">
                  Get Involved
                </p>
                <h2
                  id="get-involved-heading"
                  className="font-heading mt-3 text-2xl leading-tight text-fosan-black sm:text-4xl lg:text-[2.5rem]"
                >
                  Join the Movement for Safer Food
                </h2>
                <p className="font-body mt-5 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                  FoSAN welcomes collaboration with partners, sponsors, volunteers,
                  professionals, students, and advocates who are passionate about
                  promoting food safety.
                </p>
                <div
                  className="mt-8 hidden h-px w-16 bg-linear-to-r from-fosan-gold to-transparent lg:block"
                  aria-hidden
                />
              </div>
            </div>

            <div className="mt-12 lg:col-span-7 lg:mt-0">
              <ul
                className="relative flex flex-col gap-5 border-l-0 lg:gap-6 lg:border-l-2 lg:border-fosan-green/20 lg:pl-10"
                role="list"
              >
                {actions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className="involve-card group relative list-none"
                    >
                      <article className="relative overflow-hidden rounded-2xl bg-[#fafbfb] p-6 shadow-sm ring-1 ring-fosan-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-fosan-green/15 sm:p-8">
                        <div
                          className={`absolute left-0 top-0 h-1 w-full ${item.bar} opacity-90`}
                          aria-hidden
                        />
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${item.accent}`}
                        >
                          <Icon
                            className="h-7 w-7"
                            strokeWidth={1.65}
                            aria-hidden
                          />
                        </div>
                        <h3 className="font-heading mt-5 text-lg text-fosan-green sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="font-body mt-2 text-base leading-relaxed text-fosan-black/80">
                          {item.description}
                        </p>
                        <Link
                          href={item.href}
                          className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-fosan-green underline-offset-4 transition-colors hover:text-fosan-turquoise hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green"
                        >
                          {item.cta}
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </Link>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA — inset card (not full-bleed navy), green + light texture */}
      <div id="contact" className="scroll-mt-24 bg-[#fff] py-12 sm:py-16">
        <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="involve-reveal relative overflow-hidden rounded-3xl bg-[#61c07c]/10 shadow-xl ring-1 ring-fosan-black/10">
            <div
              className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-size-[20px_20px]"
              aria-hidden
            />
            <div className="relative z-10 space-y-8 p-8 sm:space-y-10 sm:p-10 lg:space-y-10 lg:p-12">
              <div className="max-w-3xl">
                <p className="font-body text-sm font-semibold   text-fosan-green/90">
                  Contact
                </p>
                <h3 className="mt-2 font-heading text-xl leading-tight tracking-tight text-fosan-green sm:text-3xl lg:text-[2rem]">
                  Let&apos;s Build Safer Food Systems Together
                </h3>
                <p className="mt-3 font-body text-base max-w-xl leading-relaxed text-fosan-black/75 sm:mt-4 sm:text-lg">
                  Partner, sponsor, or volunteer with FoSAN — share how you&apos;d
                  like to work with us and we&apos;ll follow up.
                </p>
              </div>

              <div className="flex flex-col gap-8 border-t border-fosan-black/10 pt-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12 lg:pt-10">
                <dl className="grid gap-6 xl:grid-cols-2 sm:gap-x-10 lg:flex-1 lg:max-w-xl">
                  <div>
                    <dt className="font-body text-[11px] font-semibold uppercase tracking-wider text-fosan-black/45">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-fosan-black transition-colors hover:text-fosan-green sm:text-base"
                      >
                        <Mail
                          className="h-4 w-4 shrink-0 text-fosan-green/80"
                          aria-hidden
                        />
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-[11px] font-semibold uppercase tracking-wider text-fosan-black/45">
                      Phone
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={`tel:${CONTACT_PHONE_TEL}`}
                        className="inline-flex items-center gap-2 font-body text-sm font-medium text-fosan-black transition-colors hover:text-fosan-green sm:text-base"
                      >
                        <Phone
                          className="h-4 w-4 shrink-0 text-fosan-green/80"
                          aria-hidden
                        />
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-col justify-center border-t border-fosan-black/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fosan-gold px-8 py-3.5 font-body text-base font-semibold text-fosan-green shadow-sm transition-[transform,box-shadow] group hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green sm:py-4 lg:min-w-58 lg:self-start"
                  >
                    Get started today
                    <ArrowUpRight className="h-5 w-5 shrink-0 group-hover:rotate-[30deg]" aria-hidden />
                  </Link>
                  <p className="font-body mt-3 text-center text-xs text-fosan-black/50 lg:text-left">
                    We typically respond within a few business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
