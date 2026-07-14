"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Users } from "lucide-react";

/** Swap for files in `public/` (e.g. `/volunteers/thumb-1.jpg`) when ready. */
const volunteerCardThumb1 = "/pat2.png";

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([".hero-anim", ".hero-card-anim"], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }
      gsap.from(".hero-anim", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.from(".hero-card-anim", {
        opacity: 0,
        x: 36,
        y: 20,
        duration: 0.9,
        delay: 0.35,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-screen w-full overflow-hidden pt-24 pb-8 sm:pb-12"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-fosan-green">
        <Image
          src="/heroimage1.avif"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-br from-fosan-green/88 via-fosan-green/75 to-fosan-teal/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#012a1c]/80 via-transparent to-fosan-navy/25"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[95%] flex-col gap-10 px-4 sm:max-w-[90%] sm:px-6 xl:flex-row xl:items-end xl:justify-between lg:pb-24 lg:gap-12 lg:px-8">
        <div
          id="hero-content"
          className="relative flex min-h-0 flex-1 flex-col justify-center"
        >
          <p
            className="hero-anim mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-[#fafbfb]/10 px-4 py-2 font-body text-xs font-light leading-snug text-white/95 shadow-sm backdrop-blur-sm sm:max-w-2xl sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm md:mb-4"
          >
            <span
              className="relative inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center"
              aria-hidden
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fosan-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fosan-gold" />
            </span>
            <span className="text-pretty">
              Empowering Communities Through Food Safety
            </span>
          </p>
          <h1
            id="hero-heading"
            className="hero-anim font-heading max-w-2xl text-2xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Advancing Food Safety for{" "}
            <span className="text-[#F9C742]">Healthier Communities</span>
          </h1>
          <p className="hero-anim mt-6 max-w-xl font-body text-base leading-relaxed text-white/95 sm:text-lg">
            The Food Safety Ambassadors Network (FoSAN) is a Nigerian-based NGO
            promoting science-based food safety education, awareness, advocacy,
            and safer practices across the food value chain — from farm to fork.
          </p>
          <div className="hero-anim mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center group justify-center gap-2 rounded-full bg-[#f9c742] px-8 py-4 font-body text-base font-semibold text-fosan-green transition-transform  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9c742]"
            >
              Partner With Us
              <ArrowUpRight className="h-5 w-5 shrink-0 group-hover:rotate-[30deg]" aria-hidden />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex group items-center justify-center gap-2 rounded-full border-2 border-[#f9c742] bg-transparent px-8 py-4 font-body text-base font-semibold text-white transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9c742]"
            >
              Join the Network
              <ArrowUpRight className="h-5 w-5 shrink-0 group-hover:rotate-[30deg]" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col lg:max-w-md lg:shrink-0">
          <div className="hero-card-anim relative w-full max-w-md rounded-2xl bg-[#f9c742]/18 p-5 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
            <div className="flex gap-4">
              <div className="hidden shrink-0 overflow-hidden rounded-xl sm:block">
                <Image
                  src={volunteerCardThumb1}
                  alt=""
                  width={320}
                  height={320}
                  className="h-40 w-40 object-cover"
                  sizes="(min-width: 640px) 160px, 0px"
                  quality={92}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-center gap-2 text-[#f9c742]">
                  <Users className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="font-body text-xs font-semibold uppercase tracking-wide text-white/90">
                    Get involved
                  </span>
                </div>
                <p className="font-heading text-base font-bold text-white sm:text-lg">
                  Volunteer With Us
                </p>
                <p className="font-body text-sm leading-relaxed text-white/85">
                  Join a growing network of people committed to healthier, safer
                  communities.
                </p>
                <Link
                  href="/get-involved"
                  className="mt-1 inline-flex items-center gap-1 font-body text-sm font-semibold text-[#f9c742]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9c742]"
                >
                  Learn how
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
