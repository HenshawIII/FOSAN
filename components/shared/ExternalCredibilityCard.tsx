import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ExternalCredibilityCardProps = {
  title: string;
  body: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  sourceLabel?: string;
  ctaLabel?: string;
};

export function ExternalCredibilityCard({
  title,
  body,
  href,
  imageSrc,
  imageAlt,
  sourceLabel = "FAO/WHO Codex",
  ctaLabel = "Read on Codex",
}: ExternalCredibilityCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-fosan-black/10 bg-white shadow-sm ring-1 ring-fosan-black/5 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fosan-green"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-fosan-green/10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-body text-xs font-semibold uppercase tracking-wider text-fosan-green">
          {sourceLabel}
        </p>
        <h3 className="font-heading mt-2 text-xl leading-snug text-fosan-black sm:text-[1.35rem]">
          {title}
        </h3>
        <p className="font-body mt-3 flex-1 text-sm leading-relaxed text-fosan-black/80 sm:text-base">
          {body}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-fosan-green">
          {ctaLabel}
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
