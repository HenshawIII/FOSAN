"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_INTERVAL_MS = 5000;

/** Replace with paths under `public/` (e.g. `/about/slide-1.jpg`) when ready. */
const aboutSlideshowImages = [
  "/FOSAN9.jpeg",
  "/FOSAN2.jpeg",
  "/FOSAN5.jpeg",
] as const;

export function AboutSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([".about-left", ".about-right"], { opacity: 1, y: 0, x: 0 });
        return;
      }
      gsap.from(".about-left", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -32,
        duration: 0.75,
        stagger: 0.12,
        ease: "power2.out",
      });
      gsap.from(".about-right", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.1,
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
      setSlideIndex((i) => (i + 1) % aboutSlideshowImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [pauseAutoplay]);

  return (
    <section
      ref={rootRef}
      id="about"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[95%] gap-12 px-4 sm:max-w-[90%] sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ">
        <div className="lg:order-2">
          <p className="about-left font-body text-sm font-semibold tracking-wide text-fosan-green">
            About FoSAN
          </p>
          <div
            className="about-left group relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-fosan-black/5 sm:aspect-[5/4]"
            onMouseEnter={() => setPauseAutoplay(true)}
            onMouseLeave={() => setPauseAutoplay(false)}
            onFocusCapture={() => setPauseAutoplay(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setPauseAutoplay(false);
              }
            }}
            role="region"
            aria-roledescription="carousel"
            aria-label="About FoSAN gallery"
          >
            {aboutSlideshowImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  i === slideIndex ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={i !== slideIndex}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  quality={90}
                  priority={i === 0}
                />
              </div>
            ))}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/50 to-transparent pt-16 pb-4"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-3 z-30 flex justify-center gap-2">
              {aboutSlideshowImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`pointer-events-auto h-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-gold ${
                    i === slideIndex
                      ? "w-8 bg-fosan-gold"
                      : "w-2.5 bg-white/75 hover:bg-white"
                  }`}
                  aria-label={`Show image ${i + 1} of ${aboutSlideshowImages.length}`}
                  aria-current={i === slideIndex ? "true" : undefined}
                  onClick={() => setSlideIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:order-1">
          <h2
            id="about-heading"
            className="about-right font-heading text-2xl font-normal leading-tight text-fosan-black sm:text-4xl lg:text-[2.75rem]"
          >
            Who We Are
          </h2>
          <p className="about-right font-body mt-6 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            The Food Safety Ambassadors Network (FoSAN) is a registered
            non-governmental organization made up of scientists and professionals
            committed to advancing food safety education across the food value
            chain.
          </p>
          <p className="about-right font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            We work to increase awareness, improve practices, strengthen
            advocacy, and support stakeholders in delivering safer food to
            consumers.
          </p>
          <div className="about-right mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-fosan-green pl-6 pr-2 py-2 font-body text-base font-semibold text-white transition-transform  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green"
            >
              <span className="px-1">Learn More About FoSAN</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9C742] text-fosan-black transition-transform group-hover:rotate-[30deg] group-hover:scale-125">
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
