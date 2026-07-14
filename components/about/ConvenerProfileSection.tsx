"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  SITE_URL,
} from "@/lib/site";

const convener = {
  name: "Professor Folake Olayinka Henshaw",
  role: "Founder and Convener, FoSAN",
  image: "/FOSANCON.jpeg",
};

const profileSections = [
  {
    heading: "Academic Background and Career",
    body: "Professor Henshaw earned her B.Sc. in Biology from the University of Ife (now Obafemi Awolowo University), Nigeria; an M.Sc. in Food Science and Microbiology from the University of Strathclyde, Glasgow; and a Ph.D. in Food Technology from the University of Ibadan. She joined the Federal University of Agriculture, Abeokuta (FUNAAB) in 1983 and rose to the rank of Professor in 2008.",
  },
  {
    heading: "Teaching, Research and Innovations",
    body: "A dedicated educator and mentor, Professor Henshaw has trained hundreds of graduates and supervised numerous postgraduate research projects. Her research has focused on improving food processing technologies to reduce postharvest losses, enhancing the safety of traditional foods, and expanding the use of cowpea flour, work that led to a registered patent. She has published extensively in reputable peer-reviewed journals and delivered FUNAAB's 46th Inaugural Lecture titled \"Food Processing for Profit: Panacea for Postharvest Losses.\"",
  },
  {
    heading: "Leadership and Service",
    body: "Professor Henshaw has served FUNAAB in several leadership capacities, including Head of Department, Dean of Faculty, Chair of strategic committees, long-standing Senate Member, and currently as Senate Representative on the University Governing Council. She has also mentored early- and mid-career researchers through programs such as the African Women in Agricultural Research and Development (AWARD) Fellowship and, in 2023, the Strengthening Research Capacity Programme of the Nigerian Academy of Science.",
  },
  {
    heading: "Food Safety Leadership and Outreach",
    body: "As Country Ambassador of the Global Harmonization Initiative (GHI), Professor Henshaw represents Nigeria in a global network of scientists committed to promoting science-based food safety practices. Since 2019, she has coordinated national observances of World Food Safety Day and participated in the inaugural International Food Safety Conference convened by the World Health Organization (WHO) and the Food and Agriculture Organization (FAO) at the African Union Headquarters in Addis Ababa.",
  },
  {
    heading: "Capacity Building and Collaborations",
    body: "Professor Henshaw has led multiple capacity-building initiatives in partnership with organizations such as the International Life Sciences Institute (ILSI) and the University of Ghana Food Safety Training Centre, with support from FUNAAB. These programs, combining classroom instruction with field surveys, have reached more than 160 stakeholders across academia, research institutes, agro-allied enterprises, public health, hospitality, and food industries.",
  },
  {
    heading: "Founding and Convening FoSAN",
    body: "To bridge the food safety knowledge gap and promote safer food handling practices across the value chain, Professor Henshaw founded and now convenes the Food Safety Ambassadors Network (FoSAN), a non-profit platform that trains food safety ambassadors, conducts public enlightenment, and engages policymakers to strengthen food safety systems.",
  },
  {
    heading: "Honors and Professional Memberships",
    body: "Professor Henshaw is a Fellow of the Nigerian Institute of Food Science and Technology (NIFST) and is widely celebrated as a passionate teacher, meticulous researcher, visionary leader, and champion of sustainable food systems. She continues to contribute to national and regional initiatives aimed at improving food safety, reducing postharvest losses, and enhancing food value chains in Africa.",
  },
] as const;

export function ConvenerProfileSection() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const intro =
    "Professor Folake Olayinka Henshaw is a distinguished scholar and academic leader in Food Science and Technology, with more than four decades of service in teaching, research, and institutional leadership. She is a passionate advocate for strengthening food safety capacity through education and training, recognizing its critical role in achieving food security in Nigeria and across Africa.";

  return (
    <section
      className="bg-[#fafbfb] py-16 sm:py-20"
      aria-labelledby="convener-heading"
    >
      <div className="mx-auto grid max-w-[95%] gap-10 px-4 sm:max-w-[90%] sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="lg:col-span-4">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-fosan-black/10">
            <Image
              src={convener.image}
              alt={convener.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="font-body text-sm font-semibold tracking-wide text-fosan-green">
            Leadership
          </p>
          <h2
            id="convener-heading"
            className="font-heading mt-3 text-2xl font-normal text-fosan-black sm:text-4xl"
          >
            About the Convener
          </h2>
          <h3 className="font-heading mt-5 text-xl text-fosan-green">
            {convener.name}
          </h3>
          <p className="font-body text-sm font-semibold text-fosan-black/65">
            {convener.role}
          </p>

          <p className="font-body mt-4 text-base leading-relaxed text-fosan-black/85 sm:text-lg">
            {intro}
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-fosan-green px-4 cursor-pointer py-2 font-body text-sm font-semibold text-white transition-transform group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green"
            >
              Read more
              <span className="flex h-9 w-9 items-center group-hover:scale-110 transition-transform justify-center rounded-full bg-fosan-gold text-fosan-green">
                +
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="Close modal"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setOpen(false);
            }}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="convener-modal-title"
            className="relative z-10 mx-4 w-full max-w-[920px] overflow-hidden rounded-2xl bg-white ring-1 ring-fosan-gold/30 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-fosan-black/10 p-5 sm:p-6">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-fosan-green">
                  Convener Profile
                </p>
                <h3
                  id="convener-modal-title"
                  className="font-heading mt-2 text-2xl font-normal text-fosan-black"
                >
                  {convener.name}
                </h3>
                <p className="font-body mt-2 text-sm font-semibold text-fosan-black/60">
                  {convener.role}
                </p>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fosan-black/10 text-fosan-navy transition-colors hover:bg-fosan-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fosan-green"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
              <div className="space-y-6">
                {profileSections.map((section) => (
                  <article key={section.heading}>
                    <h4 className="font-heading text-lg text-fosan-black">
                      {section.heading}
                    </h4>
                    <p className="font-body mt-3 text-sm leading-relaxed text-fosan-black/80 sm:text-base">
                      {section.body}
                    </p>
                  </article>
                ))}

                <article className="rounded-2xl border border-fosan-gold/30 bg-fosan-cream/60 p-5 ring-1 ring-fosan-gold/20 sm:p-6">
                  <h4 className="font-heading text-lg text-fosan-black">
                    Contact
                  </h4>
                  <p className="font-body mt-3 text-sm leading-relaxed text-fosan-black/80 sm:text-base">
                    For speaking engagements, partnerships, or collaboration with FoSAN, please contact:
                  </p>
                  <ul className="font-body mt-3 space-y-2 text-sm text-fosan-black/80 sm:text-base">
                    <li>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-fosan-green underline-offset-2 hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${CONTACT_PHONE_TEL}`}
                        className="text-fosan-green underline-offset-2 hover:underline"
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </li>
                    <li>
                      <a
                        href={SITE_URL}
                        className="text-fosan-green underline-offset-2 hover:underline"
                        rel="noopener noreferrer"
                      >
                        www.foodsafetyambassadors.org
                      </a>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
