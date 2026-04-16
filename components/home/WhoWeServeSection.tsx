"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Apple,
  Building2,
  ChefHat,
  GraduationCap,
  Sprout,
  Stethoscope,
  Store,
  Users,
  Utensils,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/** One editorial photo for the whole section — swap for `/public` path when ready. */
const sectionImage =
  "https://picsum.photos/seed/fosan-who-we-serve/900/1100";

const stakeholders = [
  {
    text: "Market women and fresh food retailers",
    icon: Store,
  },
  {
    text: "Street food vendors",
    icon: Utensils,
  },
  {
    text: "Caterers, bakers, and confectioners",
    icon: ChefHat,
  },
  {
    text: "Restaurants and hospitality professionals",
    icon: Building2,
  },
  {
    text: "Health inspectors and environmental officers",
    icon: Stethoscope,
  },
  {
    text: "Nutritionists, dieticians, and health professionals",
    icon: Apple,
  },
  {
    text: "Farmers and extension officers",
    icon: Sprout,
  },
  {
    text: "Schools, childcare centers, and supermarkets",
    icon: GraduationCap,
  },
  {
    text: "Consumers and community groups",
    icon: Users,
  },
] as const;

export function WhoWeServeSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([".who-serve-reveal", ".who-serve-item"], {
          opacity: 1,
          y: 0,
          x: 0,
        });
        return;
      }
      gsap.from(".who-serve-reveal", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.06,
        ease: "power2.out",
      });
      gsap.from(".who-serve-item", {
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="who-we-serve"
      className="border-t border-fosan-black/5 bg-white py-20 sm:py-24"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        <p className="who-serve-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
          Who We Serve
        </p>
        <h2
          id="who-we-serve-heading"
          className="who-serve-reveal font-heading mt-3 max-w-2xl text-2xl leading-tight text-fosan-black sm:text-4xl lg:text-[2.5rem]"
        >
          Serving Stakeholders Across the Food Value Chain
        </h2>
        <p className="who-serve-reveal font-body mt-4 max-w-2xl text-base leading-relaxed text-fosan-black/85 sm:text-lg">
          Our work supports a wide range of stakeholders involved in food
          production, handling, service, regulation, and consumption.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          {/* Single editorial image — avoids per-item imagery */}
          <div className="who-serve-reveal relative lg:col-span-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-fosan-cream shadow-lg ring-1 ring-fosan-black/10 sm:aspect-[5/4] lg:sticky lg:top-28 lg:aspect-auto lg:min-h-[min(72vh,36rem)]">
              <Image
                src={sectionImage}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                quality={90}
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-fosan-green/50 via-transparent to-transparent"
                aria-hidden
              />
              <p className="absolute bottom-5 left-5 right-5 font-heading text-lg leading-snug text-white drop-shadow-md sm:text-2xl">
                From markets to schools — safer food touches every corner of
                society.
              </p>
            </div>
          </div>

          {/* Dense list: two columns, icon + line — scannable without 9 photos */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#fafbfb] p-6 ring-1 ring-fosan-black/5 sm:p-8">
              <p className="who-serve-reveal font-body text-xs font-semibold uppercase tracking-wider text-fosan-black/50">
                Stakeholder groups
              </p>
              <ul
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                role="list"
              >
                {stakeholders.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.text}
                      className="who-serve-item flex gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-black/5 transition-shadow hover:ring-fosan-green/25"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fosan-green text-fosan-gold shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="font-body pt-1.5 text-sm font-medium leading-snug text-fosan-black sm:text-[0.9375rem]">
                        {row.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
