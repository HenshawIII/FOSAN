import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CtaItem = {
  label: string;
  href: string;
  secondary?: boolean;
};

type CTAClusterProps = {
  items: readonly CtaItem[];
};

export function CTACluster({ items }: CTAClusterProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={
            item.secondary
              ? "inline-flex items-center gap-2 rounded-full border-2 border-fosan-green px-6 py-3 font-body text-sm font-semibold text-fosan-green transition-transform hover:scale-[1.02]"
              : "inline-flex items-center gap-2 rounded-full bg-fosan-green px-6 py-3 font-body text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          }
        >
          {item.label}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      ))}
    </div>
  );
}
