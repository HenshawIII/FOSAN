"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ContentSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  muted?: boolean;
};

export function ContentSection({
  id,
  eyebrow,
  heading,
  children,
  muted = false,
}: ContentSectionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".content-section-anim", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".content-section-anim", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id={id}
      className={muted ? "bg-[#fafbfb] py-16 sm:py-20" : "bg-white py-16 sm:py-20"}
    >
      <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="content-section-anim font-body text-sm font-semibold tracking-wide text-fosan-green">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="content-section-anim font-heading mt-3 text-2xl font-normal leading-tight text-fosan-black sm:text-4xl">
          {heading}
        </h2>
        <div className="content-section-anim mt-6">{children}</div>
      </div>
    </section>
  );
}
