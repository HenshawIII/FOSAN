"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinksDesktop = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

const navLinksMobile = [
  ...navLinksDesktop,
  { href: "/training", label: "Training" },
  { href: "/summit", label: "Summit" },
  { href: "/advocacy", label: "Advocacy" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerSurface = isScrolled
    ? "border-b border-white/10 bg-fosan-green/20 backdrop-blur-md"
    : "border-b border-transparent bg-transparent backdrop-blur-0";

  const navLinkClass =
    "font-body text-sm font-medium text-white/95 transition-colors hover:text-[#f9c742] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f9c742]";

  const menuBtnClass =
    "rounded-md p-2 text-white md:hidden";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${headerSurface}`}
      role="banner"
    >
      <div className="mx-auto flex max-w-[95%] items-center justify-between gap-4 px-4 py-2 sm:max-w-[90%] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-gold"
        >
          <Image
            src="/fosanicon.svg"
            alt="FoSAN"
            width={40}
            height={40}
            className="h-16 w-32 sm:h-16 sm:w-32"
            priority
          />
         
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinksDesktop.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/get-involved"
            className="font-body hidden rounded-full bg-fosan-gold px-5 py-2.5 text-sm font-semibold text-fosan-green shadow-sm transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex sm:items-center sm:gap-2"
          >
            Get Involved
          </Link>
          <button
            type="button"
            className={menuBtnClass}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/15 bg-fosan-green/95 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinksMobile.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-base font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="font-body mt-2 inline-flex items-center justify-center rounded-full bg-fosan-gold px-5 py-3 text-sm font-semibold text-fosan-green"
              onClick={() => setOpen(false)}
            >
              Get Involved
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
