"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Network } from "lucide-react";

export function AboutHero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".about-hero-anim", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".about-hero-anim", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[min(72svh,36rem)] w-full overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20"
      aria-labelledby="about-page-heading"
    >
      <div className="absolute inset-0 z-0 bg-fosan-green">
        <Image
          src="/heroimage1.avif"
          alt=""
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-br from-fosan-navy/80 via-fosan-green/82 to-fosan-teal/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#012a1c]/75 via-transparent to-fosan-navy/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-fosan-gold/10 blur-3xl sm:h-96 sm:w-96"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[95%] flex-col gap-8 px-4 sm:max-w-[90%] sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-16">
        <p className="about-hero-anim inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-body text-xs font-medium uppercase tracking-wider text-white/95 backdrop-blur-sm sm:px-5 sm:text-sm">
          <Network className="h-4 w-4 text-fosan-gold" aria-hidden />
          Food Safety Ambassadors Network
        </p>
        <h1
          id="about-page-heading"
          className="about-hero-anim font-heading max-w-4xl text-3xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
        >
          About{" "}
          <span className="text-fosan-gold">FoSAN</span>
        </h1>
        <p className="about-hero-anim max-w-2xl font-body text-base leading-relaxed text-white/95 sm:text-lg">
          A network of scientists and professionals advancing food safety
          education, awareness, and action across Nigeria.
        </p>
      </div>
    </section>
  );
}
