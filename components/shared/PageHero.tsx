"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type PageHeroProps = {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  subtitle: string;
  imageSrc?: string;
};

export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  subtitle,
  imageSrc = "/heroimage1.avif",
}: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".page-hero-anim", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".page-hero-anim", {
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
      className="relative isolate min-h-[min(68svh,34rem)] overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-18"
    >
      <div className="absolute inset-0 z-0 bg-fosan-green">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-br from-fosan-navy/80 via-fosan-green/82 to-fosan-teal/45" />
        <div className="absolute inset-0 bg-linear-to-t from-[#012a1c]/72 via-transparent to-fosan-navy/30" />
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-[95%] px-4 sm:mt-16 sm:max-w-[90%] sm:px-6 lg:mt-16 lg:px-8">
        {eyebrow ? (
          <p className="page-hero-anim inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-body text-xs font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm sm:text-sm">
            {eyebrowIcon}
            {eyebrow}
          </p>
        ) : null}
        <h1 className="page-hero-anim font-heading mt-6 max-w-4xl text-3xl font-normal leading-[1.12] text-white sm:text-5xl lg:text-[3.1rem]">
          {title}
        </h1>
        <p className="page-hero-anim font-body mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
