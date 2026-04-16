import { Check } from "lucide-react";

type AudienceListProps = {
  items: readonly string[];
};

export function AudienceList({ items }: AudienceListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2" role="list">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-fosan-black/8 bg-white p-4 ring-1 ring-fosan-black/[0.04]"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fosan-gold text-fosan-green">
            <Check className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="font-body text-sm leading-relaxed text-fosan-black/85 sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
