"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Megaphone,
  Scale,
  Users2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AUTO_ADVANCE_MS = 6500;

const programs = [
  {
    title: "Food Safety Training & Workshops",
    description:
      "Practical training for food handlers, vendors, retailers, caterers, hospitality workers, and consumers.",
    icon: GraduationCap,
    accent: "bg-fosan-green/15 text-fosan-green",
    /** Replace with `/your-image.jpg` from `public/` when ready. */
    image: "/FOSAN1.jpeg",
  },
  {
    title: "Short Courses & Certification",
    description:
      "Capacity-building programs for professionals, inspectors, regulators, and health-related stakeholders.",
    icon: BookOpen,
    accent: "bg-fosan-turquoise/15 text-fosan-turquoise",
    image: "/FOSAN7.jpeg",
  },
  {
    title: "Public Awareness Campaigns",
    description:
      "Food safety education through print, electronic, and community-based outreach.",
    icon: Megaphone,
    accent: "bg-fosan-gold/20 text-fosan-green",
    image: "/FOSAN10.jpeg",
  },
  {
    title: "Policy Engagement",
    description:
      "Advocacy and collaboration with regulatory bodies to strengthen food safety systems and standards.",
    icon: Scale,
    accent: "bg-fosan-teal/15 text-fosan-green",
    image: "/FOSAN44.jpeg",
  },
  {
    title: "Ambassadors' Summit",
    description:
      "A platform for knowledge-sharing, networking, and capacity development.",
    icon: Users2,
    accent: "bg-fosan-navy/12 text-fosan-navy",
    image: "/FOSAN8.jpeg",
  },
] as const;

export function ProgramsSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".programs-reveal", { opacity: 1, y: 0 });
        return;
      }
      gsap.from(".programs-reveal", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  useEffect(() => {
    if (pauseAutoplay) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % programs.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [pauseAutoplay]);

  const active = programs[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      ref={rootRef}
      id="programs"
      className="overflow-x-clip bg-white py-20 sm:py-24"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto w-full max-w-[95%] min-w-0 px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row-reverse sm:items-end sm:justify-between sm:gap-4">
          <p className="programs-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
            Our Programs
          </p>
          <h2
            id="programs-heading"
            className="programs-reveal font-heading max-w-2xl text-2xl text-fosan-black sm:text-4xl lg:text-[2.5rem]"
          >
            What We Do
          </h2>
        </div>
        
        <p className="programs-reveal font-body mt-4 max-w-2xl text-base leading-relaxed text-fosan-black/80 sm:text-lg">
          FoSAN advances food safety through education, training, advocacy, and
          collaboration.
        </p>

        <div
          id="programs-gallery"
          className="programs-reveal mt-12 min-w-0 scroll-mt-28"
          onMouseEnter={() => setPauseAutoplay(true)}
          onMouseLeave={() => setPauseAutoplay(false)}
          onFocusCapture={() => setPauseAutoplay(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPauseAutoplay(false);
            }
          }}
        >
          <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            {/* Image stage — order-2 on small screens so copy column (order-1) appears first */}
            <div className="relative order-2 min-w-0 max-w-full lg:order-1 lg:col-span-7">
              <div
                className="relative aspect-[16/10] w-full max-w-full overflow-hidden rounded-2xl bg-fosan-black/5 shadow-xl ring-1 ring-fosan-black/10"
                role="region"
                aria-label={`Program photo: ${active.title}`}
              >
                {programs.map((program, i) => (
                  <div
                    key={program.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
                    }`}
                    aria-hidden={i !== activeIndex}
                  >
                    <Image
                      src={program.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, min(90vw, 896px)"
                      quality={92}
                      priority={i === 0}
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-fosan-black/50 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                ))}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-4">
                  <p className="font-body hidden max-w-[70%] text-sm font-medium text-white/95 drop-shadow sm:block lg:hidden">
                    {active.title}
                  </p>
                  <div
                    className="ml-auto flex gap-1.5 rounded-full bg-black/35 px-2 py-1.5 backdrop-blur-sm"
                    role="tablist"
                    aria-label="Choose program image"
                  >
                    {programs.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === activeIndex}
                        aria-label={`Show program ${i + 1}: ${programs[i].title}`}
                        className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-gold ${
                          i === activeIndex
                            ? "w-7 bg-fosan-gold"
                            : "w-2 bg-white/60 hover:bg-white"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Filmstrip — 3-up grid on small screens; flex wrap with fixed thumbs from sm */}
              <div className="mt-4 grid max-w-full grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2.5 lg:justify-start">
                {programs.map((program, i) => (
                  <button
                    key={program.title}
                    type="button"
                    aria-label={`Preview: ${program.title}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                    onClick={() => setActiveIndex(i)}
                    className={`relative aspect-4/3 w-full min-w-0 overflow-hidden rounded-lg ring-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green sm:aspect-video sm:h-14 sm:w-24 sm:shrink-0 ${
                      i === activeIndex
                        ? "ring-fosan-gold shadow-md sm:scale-[1.02]"
                        : "ring-transparent opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={program.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 639px) 30vw, 96px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Copy + navigation — first on mobile (order-1); content updates with selection */}
            <div className="order-1 flex min-w-0 max-w-full flex-col lg:order-2 lg:col-span-5">
              <div aria-live="polite" aria-atomic="true">
                <div className="flex items-center gap-3 border-b border-fosan-black/10 pb-4">
                  <span className="font-body text-xs font-semibold tracking-widest text-fosan-black/45">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <span className="mx-1 text-fosan-black/25">/</span>
                    {String(programs.length).padStart(2, "0")}
                  </span>
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${active.accent}`}
                  >
                    <ActiveIcon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                </div>

                <div key={activeIndex} className="programs-detail-enter pt-6">
                  <h3 className="font-heading text-xl leading-tight text-fosan-green sm:text-[1.65rem]">
                    {active.title}
                  </h3>
                  <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/80">
                    {active.description}
                  </p>
                </div>
              </div>

              <nav
                className="mt-8 flex flex-col gap-1 border-t border-fosan-black/10 pt-6"
                aria-label="Programs"
              >
                {programs.map((program, i) => (
                  <button
                    key={program.title}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`text-left font-body text-sm transition-colors ${
                      i === activeIndex
                        ? "border-l-4 border-fosan-gold pl-3 font-semibold text-fosan-green"
                        : "border-l-4 border-transparent pl-3 text-fosan-black/55 hover:text-fosan-green"
                    }`}
                  >
                    {program.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="programs-reveal mt-12 flex justify-start">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-3 rounded-full bg-fosan-green pl-6 pr-2 py-2 font-body text-base font-semibold text-white transition-transform  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green"
          >
            Explore Our Programs
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9C742] text-fosan-black transition-transform group-hover:rotate-[30deg] group-hover:scale-125">
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
