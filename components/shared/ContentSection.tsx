import type { ReactNode } from "react";

type ContentSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  muted?: boolean;
};

export function ContentSection({
  id,
  eyebrow,
  heading,
  children,
  muted = false,
}: ContentSectionProps) {
  return (
    <section id={id} className={muted ? "bg-[#fafbfb] py-16 sm:py-20" : "bg-white py-16 sm:py-20"}>
      <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="font-body text-sm font-semibold tracking-wide text-fosan-green">{eyebrow}</p>
        ) : null}
        <h2 className="font-heading mt-3 text-2xl font-normal leading-tight text-fosan-black sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
