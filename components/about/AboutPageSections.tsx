"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Compass,
  Handshake,
  HeartHandshake,
  Microscope,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const storyImage = "/FOSAN5.jpeg";
const whyExistImage = "/FOSAN10.jpeg";

const values = [
  {
    title: "Science-Based",
    body: "We promote credible, evidence-driven food safety knowledge.",
    icon: Microscope,
    ring: "ring-white/15",
    accent: "bg-fosan-gold/20 text-fosan-gold",
    cardBg: "bg-fosan-green",
    titleColor: "text-fosan-gold",
    bodyColor: "text-white/95",
  },
  {
    title: "Community-Focused",
    body: "We work with people where food safety matters most — in homes, markets, institutions, and communities.",
    icon: HeartHandshake,
    ring: "ring-fosan-green/25",
    accent: "bg-fosan-green/15 text-fosan-green",
    cardBg: "bg-fosan-gold",
    titleColor: "text-fosan-green",
    bodyColor: "text-fosan-green",
  },
  {
    title: "Inclusive",
    body: "We believe food safety education should be accessible to all stakeholders.",
    icon: UsersRound,
    ring: "ring-white/15",
    accent: "bg-fosan-gold/20 text-fosan-gold",
    cardBg: "bg-fosan-navy",
    titleColor: "text-fosan-gold",
    bodyColor: "text-white/95",
  },
  {
    title: "Collaborative",
    body: "We value partnerships that strengthen impact and scale.",
    icon: Handshake,
    ring: "ring-white/15",
    accent: "bg-fosan-green/15 text-fosan-green",
    cardBg: "bg-fosan-turquoise",
    titleColor: "text-fosan-green",
    bodyColor: "text-white/95",
  },
  {
    title: "Practical",
    body: "We focus on real-world practices that improve safety across the food chain.",
    icon: Compass,
    ring: "ring-fosan-navy/10",
    accent: "bg-[#5b21b6]/15 text-[#5b21b6]",
    cardBg: "bg-[#fde0f1]",
    titleColor: "text-[#5b21b6]",
    bodyColor: "text-fosan-black/85",
  },
] as const;

export function AboutPageSections() {
  const storyRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const approachRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const allSelectors =
      ".about-story-reveal, .about-vision-reveal, .about-why-reveal, .about-approach-reveal, .about-values-reveal, .about-values-card";

    if (reduced) {
      gsap.set(allSelectors, { opacity: 1, y: 0 });
      return;
    }

    const run = (trigger: HTMLElement | null, selector: string) => {
      if (!trigger) return;
      const nodes = trigger.querySelectorAll(selector);
      if (!nodes.length) return;
      gsap.from(nodes, {
        scrollTrigger: {
          trigger,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 22,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
      });
    };

    run(storyRef.current, ".about-story-reveal");
    run(visionRef.current, ".about-vision-reveal");
    run(whyRef.current, ".about-why-reveal");
    run(approachRef.current, ".about-approach-reveal");
    run(valuesRef.current, ".about-values-reveal");
    run(valuesRef.current, ".about-values-card");
  });

  return (
    <>
      <section
        ref={storyRef}
        className="bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="our-story-heading"
      >
        <div className="mx-auto grid max-w-[95%] gap-12 px-4 sm:max-w-[90%] sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="about-story-reveal lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-xl ring-1 ring-fosan-black/8 sm:aspect-3/4 lg:sticky lg:top-28">
              <Image
                src={storyImage}
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
              <p className="absolute bottom-5 left-5 right-5 font-heading text-lg text-white drop-shadow-sm sm:text-xl">
                From farm to fork — safer food for every table.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="about-story-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
              Who We Are
            </p>
            <h2
              id="our-story-heading"
              className="about-story-reveal font-heading mt-3 text-2xl font-normal leading-tight text-fosan-black sm:text-4xl lg:text-[2.65rem]"
            >
              Our Story
            </h2>
            <p className="about-story-reveal font-body mt-6 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
              The Food Safety Ambassadors Network (FoSAN) is a registered
              non-governmental organization committed to advancing food safety
              education across the food value chain, from farm to fork.
            </p>
            <p className="about-story-reveal font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
              FoSAN brings together scientists and professionals who believe that
              food safety is essential to public health, food security, and
              sustainable development. Through education, training, advocacy,
              and collaboration, we work to ensure that food safety knowledge
              is accessible, practical, and impactful.
            </p>
            <p className="about-story-reveal font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
              Our goal is to empower stakeholders to identify food safety risks,
              adopt safer practices, and contribute to healthier communities.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={visionRef}
        className="relative overflow-hidden bg-linear-to-b from-[#f6faf8] to-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="vision-mission-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_20%_0%,rgba(1,100,68,0.12),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(249,199,66,0.12),transparent_40%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="about-vision-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
              Vision and Mission
            </p>
            <h2
              id="vision-mission-heading"
              className="about-vision-reveal font-heading mt-3 text-2xl font-normal text-fosan-black sm:text-4xl"
            >
              What Drives Us
            </h2>
          </div>
          <div className="about-vision-reveal mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl border border-fosan-green/10 bg-white p-8 shadow-lg shadow-fosan-green/5 ring-1 ring-fosan-black/5 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fosan-gold/25 text-fosan-green">
                <Sparkles className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading mt-6 text-xl text-fosan-black sm:text-2xl">
                Vision
              </h3>
              <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                To achieve widespread awareness of food safety and increased
                adoption of safe practices among stakeholders along the food
                supply chain.
              </p>
            </article>
            <article className="group relative overflow-hidden rounded-2xl border border-fosan-teal/15 bg-fosan-green p-8 text-white shadow-xl transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-fosan-gold">
                <Target className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading mt-6 text-xl sm:text-2xl">Mission</h3>
              <p className="font-body mt-4 text-base leading-relaxed text-white/92 sm:text-lg">
                To disseminate science-based food safety knowledge to all
                stakeholders and ensure safe food for all consumers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={whyRef}
        className="relative overflow-hidden bg-fosan-green py-16 text-white sm:py-20 lg:py-24"
        aria-labelledby="why-fosan-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-size-[20px_20px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-12 xl:gap-14 xl:items-stretch">
            <div className="xl:col-span-5">
              <div
                className="about-why-reveal relative overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-xl xl:min-h-[min(70vh,44rem)]"
                aria-hidden
              >
                <Image
                  src={whyExistImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  quality={92}
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-fosan-green/70 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
            <div className="xl:col-span-7 flex flex-col justify-center">
              <p className="about-why-reveal font-body text-sm font-semibold tracking-wide text-fosan-gold">
                Why We Exist
              </p>
              <h2
                id="why-fosan-heading"
                className="about-why-reveal font-heading mt-3 text-2xl font-normal leading-tight sm:text-4xl"
              >
                Why FoSAN Matters
              </h2>
              <p className="about-why-reveal font-body text-base leading-relaxed text-white/92 sm:text-lg">
                Food safety affects everyone. From producers and processors to
                retailers, food handlers, and consumers, every point in the
                supply chain plays a role in protecting health.
              </p>
              <p className="about-why-reveal font-body mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                FoSAN exists because food safety awareness and practical
                compliance remain critical challenges. By building knowledge,
                strengthening local capacity, and encouraging science-based
                action, we help reduce avoidable risks and support more resilient
                food systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={approachRef}
        className="bg-[#fafbfb] py-16 sm:py-20 lg:py-24"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="about-approach-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
                Our Approach
              </p>
              <h2
                id="approach-heading"
                className="about-approach-reveal font-heading mt-3 text-2xl font-normal text-fosan-black sm:text-4xl"
              >
                How We Work
              </h2>
              <div className="about-approach-reveal mt-8 hidden h-px w-16 bg-linear-to-r from-fosan-gold to-fosan-teal lg:block" />
            </div>
            <div className="lg:col-span-8">
              <div className="about-approach-reveal rounded-2xl border border-fosan-black/8 bg-white p-8 shadow-md ring-1 ring-fosan-black/4 sm:p-10">
                <div className="flex flex-wrap gap-3">
                  {["Awareness", "Skills", "Compliance", "Collaboration"].map(
                    (label) => (
                      <span
                        key={label}
                        className="rounded-full border border-fosan-green/15 bg-fosan-green/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-fosan-green"
                      >
                        {label}
                      </span>
                    ),
                  )}
                </div>
                <p className="font-body mt-8 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                  Our work is rooted in science, community engagement, and
                  practical action. We focus on creating awareness, building
                  skills, supporting compliance, and encouraging collaboration
                  between stakeholders and institutions.
                </p>
                <p className="font-body mt-5 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
                  We believe that meaningful food safety improvement happens when
                  education, advocacy, and practice come together.
                </p>
                <div className="mt-8 flex items-start gap-3 rounded-xl bg-fosan-cream/80 p-4 ring-1 ring-fosan-gold/20">
                  <BookOpen
                    className="mt-0.5 h-5 w-5 shrink-0 text-fosan-green"
                    aria-hidden
                  />
                  <p className="font-body text-sm leading-relaxed text-fosan-black/80 sm:text-base">
                    Education, advocacy, and hands-on practice — one integrated
                    path to safer food systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={valuesRef}
        className="bg-white py-16 pb-20 sm:py-20 sm:pb-24 lg:py-24"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="about-values-reveal font-body text-sm font-semibold tracking-wide text-fosan-green">
              Values
            </p>
            <h2
              id="values-heading"
              className="about-values-reveal font-heading mt-3 text-2xl font-normal text-fosan-black sm:text-4xl"
            >
              Our Core Values
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {values.map(({ title, body, icon: Icon, ring, cardBg, accent, titleColor, bodyColor }) => (
              <li
                key={title}
                className={`about-values-card flex flex-col rounded-2xl border border-fosan-black/6 ${cardBg} p-6 ring-1 ${ring} transition-transform duration-200 hover:-translate-y-0.5 sm:p-7`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accent}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className={`font-heading mt-5 text-lg ${titleColor}`}>
                  {title}
                </h3>
                <p
                  className={`font-body mt-2 flex-1 text-sm leading-relaxed ${bodyColor} sm:text-base`}
                >
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
