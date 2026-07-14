"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "Improve food safety knowledge and practices",
  "Support stronger compliance and standards",
  "Build trust in food systems",
  "Strengthen community health and well-being",
  "Contribute to SDG-related outcomes in food security and health",
] as const;

/** Hero image for partner block. */
const partnerImage = "/partner.webp";

export function PartnerImpactSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([".partner-reveal", ".partner-benefit"], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }
      gsap.from(".partner-reveal", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
      });
      gsap.from(".partner-benefit", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="partner"
      className="relative overflow-hidden bg-fosan-green py-20 sm:py-24"
      aria-labelledby="partner-heading"
    >
      {/* Single soft wash — keeps depth without competing with the photo stack */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[min(32rem,80vw)] w-[min(32rem,80vw)] -translate-y-1/2 translate-x-1/4 rounded-full bg-fosan-gold/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-6">
            <p className="partner-reveal font-body text-sm font-semibold tracking-wide text-fosan-gold">
              Partnership Benefits
            </p>
            <h2
              id="partner-heading"
              className="partner-reveal font-heading mt-3 text-2xl leading-tight text-white sm:text-4xl lg:text-[2.5rem]"
            >
              Why Work With Us
            </h2>
            <p className="partner-reveal font-body mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Partnering with FoSAN means contributing to healthier communities,
              safer food systems, and stronger public awareness around food
              safety.
            </p>

            <ul className="mt-8 space-y-3" role="list">
              {benefits.map((line) => (
                <li
                  key={line}
                  className="partner-benefit flex gap-3 text-white/95"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fosan-gold text-fosan-green">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="font-body text-base leading-snug">{line}</span>
                </li>
              ))}
            </ul>

            <div className="partner-reveal group mt-10">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-fosan-gold px-8 py-4 font-body text-base font-semibold text-fosan-green transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Become a Partner
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-45"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          {/* Photo + cohesive “mat stack” — brand colors grouped as one object */}
          <div className="partner-reveal flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] lg:max-w-[min(100%,30rem)]">
              <div
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center p-1"
                aria-hidden
              >
                <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
                  <div className="absolute inset-0 translate-x-2 translate-y-3 rotate-[2.5deg] rounded-2xl bg-fosan-gold shadow-lg" />
                  <div className="absolute inset-0 -translate-x-2.5 translate-y-1.5 -rotate-[1.5deg] rounded-2xl bg-fosan-turquoise shadow-md opacity-95" />
                  <div className="absolute inset-0 translate-x-1 -translate-y-2 rotate-[1deg] rounded-2xl bg-fosan-teal/90 shadow-md" />
                  <div className="absolute inset-0 translate-x-3.5 translate-y-4 -rotate-[2deg] rounded-2xl bg-fosan-navy/75" />
                </div>
              </div>

              <div className="relative z-10 mx-auto aspect-[4/5] w-full sm:aspect-[5/6]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-fosan-navy/40 shadow-2xl ring-2 ring-white/15">
                  <Image
                    src={partnerImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    quality={90}
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-fosan-green/70 via-fosan-green/15 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-end justify-center p-6 sm:p-10">
                    <p className="max-w-xs text-center font-heading text-lg leading-snug text-white drop-shadow-md sm:max-w-sm sm:text-2xl lg:text-[1.65rem]">
                      Together — we build safer communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
