import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: ReactNode;
  subtitle: string;
  imageSrc?: string;
};

export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  subtitle,
  imageSrc = "/heroimage1.avif",
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[min(68svh,34rem)] overflow-hidden pt-28 pb-14 sm:pb-18">
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

      <div className="relative z-10 mx-auto mt-24 w-full max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:mt-16 lg:px-8">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-body text-xs font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm sm:text-sm">
            {EyebrowIcon ? (
              <EyebrowIcon className="h-4 w-4 text-fosan-gold" aria-hidden />
            ) : null}
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading mt-6 max-w-4xl text-3xl font-normal leading-[1.12] text-white sm:text-5xl lg:text-[3.1rem]">
          {title}
        </h1>
        <p className="font-body mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
