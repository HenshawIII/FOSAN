import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ExternalCredibilityCardProps = {
  title?: string;
  body: string;
  href: string;
  ctaLabel?: string;
};

export function ExternalCredibilityCard({
  title = "International Collaboration",
  body,
  href,
  ctaLabel = "Read article",
}: ExternalCredibilityCardProps) {
  return (
    <article className="rounded-2xl border border-fosan-gold/30 bg-fosan-cream/60 p-6 ring-1 ring-fosan-gold/20">
      <p className="font-body text-xs font-semibold uppercase tracking-wider text-fosan-green">
        Trusted Collaboration
      </p>
      <h3 className="font-heading mt-2 text-xl text-fosan-black">{title}</h3>
      <p className="font-body mt-3 text-base leading-relaxed text-fosan-black/85">{body}</p>
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-fosan-green"
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
