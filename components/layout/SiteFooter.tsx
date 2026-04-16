import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/training", label: "Training" },
  { href: "/summit", label: "Summit" },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-fosan-green text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[18px_18px]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[95%] px-4 py-12 sm:max-w-[90%] sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <Link
            href="/"
            className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fosan-gold self-start"
          >
            <Image
              src="/fosanicon.svg"
              alt="FoSAN — Food Safety Ambassadors Network"
              width={400}
              height={400}
              className="h-auto w-[min(72vw,11rem)] sm:w-[min(64vw,13rem)] lg:w-60"
              priority={false}
            />
          </Link>

          <nav
            className="grid w-full grid-cols-2 justify-items-start gap-x-8 gap-y-3.5 sm:grid-cols-3 sm:gap-x-10 lg:flex lg:max-w-none lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-end lg:gap-x-8 lg:gap-y-2"
            aria-label="Footer"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-left text-sm font-medium text-white/92 transition-colors hover:text-fosan-gold sm:text-[0.9375rem]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 sm:mt-12 sm:pt-7">
          <p className="font-body text-center text-[11px] leading-relaxed text-white/50 sm:text-left sm:text-xs">
            © {new Date().getFullYear()} Food Safety Ambassadors Network. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
