import Image from "next/image";

const images = [
  "/FOSAN1.jpeg",
  "/FOSAN5.jpeg",
  "/FOSAN7.jpeg",
  "/FOSAN8.jpeg",
  "/FOSAN9.jpeg",
  "/FOSAN10.jpeg",
] as const;

export function FosanInActionGallery() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="action-gallery-heading">
      <div className="mx-auto max-w-[95%] px-4 sm:max-w-[90%] sm:px-6 lg:px-8">
        <p className="font-body text-sm font-semibold tracking-wide text-fosan-green">Field Engagement</p>
        <h2 id="action-gallery-heading" className="font-heading mt-3 text-2xl font-normal text-fosan-black sm:text-4xl">
          FoSAN in Action
        </h2>
        <p className="font-body mt-5 max-w-3xl text-base leading-relaxed text-fosan-black/80 sm:text-lg">
          Moments from trainings, community outreach, advocacy activities, and multi-stakeholder engagements.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-fosan-black/10">
              <Image
                src={src}
                alt={`FoSAN in action image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
