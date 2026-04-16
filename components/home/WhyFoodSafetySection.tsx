"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Shield, TrendingUp, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/** Replace with a `/public` asset when ready (e.g. `/impact/food-safety.jpg`). */
const sectionImage =
  "https://picsum.photos/seed/fosan-why-food-safety/1000/1200";

const points = [
  {
    title: "Protects health and well-being",
    icon: Shield,
    accent: "bg-fosan-green/15 text-fosan-green ring-fosan-green/20",
  },
  {
    title: "Supports food security",
    icon: TrendingUp,
    accent: "bg-fosan-turquoise/12 text-fosan-turquoise ring-fosan-turquoise/20",
  },
  {
    title: "Builds consumer trust",
    icon: Users,
    accent: "bg-fosan-gold/20 text-fosan-green ring-fosan-gold/30",
  },
  {
    title: "Strengthens communities and livelihoods",
    icon: Heart,
    accent: "bg-fosan-teal/15 text-fosan-green ring-fosan-teal/25",
  },
] as const;

export function WhyFoodSafetySection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(
          [".why-reveal-image", ".why-reveal-text", ".why-reveal-card"],
          { opacity: 1, y: 0, x: 0 },
        );
        return;
      }
      gsap.from(".why-reveal-text", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -28,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".why-reveal-image", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 36,
        duration: 0.75,
        ease: "power2.out",
      });
      gsap.from(".why-reveal-card", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 76%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 16,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="impact"
      className="bg-[#fafbfb] py-20 sm:py-24"
      aria-labelledby="why-food-safety-heading"
    >
      <div className="mx-auto grid max-w-[95%] gap-12 px-4 sm:max-w-[90%] sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-14 lg:px-8">
        {/* Copy + list — left on desktop */}
        <div className="lg:col-span-6">
          <p className="why-reveal-text font-body text-sm font-semibold tracking-wide text-fosan-green">
            Why It Matters
          </p>
          <h2
            id="why-food-safety-heading"
            className="why-reveal-text font-heading mt-3 text-2xl leading-tight text-fosan-black sm:text-4xl lg:text-[2.5rem]"
          >
            Food Safety Is a Public Health Priority
          </h2>
          <p className="why-reveal-text font-body mt-6 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            Food safety is essential to protecting lives, strengthening food
            systems, and supporting sustainable development. Unsafe food can lead
            to illness, loss of income, reduced productivity, and declining
            public trust.
          </p>
          <p className="why-reveal-text font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            FoSAN believes that when stakeholders across the food supply chain
            are equipped with the right knowledge and practical skills, food
            safety risks can be reduced and healthier communities can thrive.
          </p>

          <ul
            className="mt-10 space-y-0 "
            role="list"
          >
            {points.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="why-reveal-card flex gap-4 py-2 first:pt-0"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${item.accent}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="font-body pt-1 text-base font-medium leading-snug text-fosan-black">
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Large visual — right on desktop */}
        <div className="why-reveal-image relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-fosan-black/5 shadow-lg ring-1 ring-fosan-black/10 sm:aspect-[3/4] lg:sticky lg:top-28 lg:aspect-auto lg:min-h-[min(85vh,44rem)]">
            <Image
              src={sectionImage}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              quality={92}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-fosan-black/25 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
