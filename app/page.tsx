import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Dura Students Society | Dura language and community heritage",
  },
  description:
    "Discover the Dura community, learn Dura Lopa and explore community heritage through Dura Students Society.",
};

const startingPoints = [
  {
    number: "01",
    eyebrow: "Language",
    title: "Learn Dura Lopa",
    description:
      "Explore the dictionary, example sentences, language resources and the Dura Lopa app.",
    href: "/language/",
    action: "Start learning",
  },
  {
    number: "02",
    eyebrow: "Heritage",
    title: "Explore community heritage",
    description:
      "Find stories, people, places and community records in the Dura Digital Heritage Project.",
    href: "/heritage/",
    action: "Browse heritage",
  },
  {
    number: "03",
    eyebrow: "Society",
    title: "Meet Dura Students Society",
    description:
      "Learn about the Society, its history, programs and current central committee.",
    href: "/about/",
    action: "About the Society",
  },
];

const heritageLinks = [
  { href: "/heritage/people/", title: "People", detail: "Community lives and stories" },
  { href: "/heritage/places/", title: "Places", detail: "Dura locations and connections" },
  { href: "/heritage/archive/", title: "Archive", detail: "Photographs, audio and documents" },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-9 px-4 pb-12 pt-10 sm:pt-14 md:gap-12 md:pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:pt-16">
        <div>
          <p className="eyebrow">Dura Indigenous Community · Nepal</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[3.5rem]">
            Dura language and heritage, carried forward together.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed muted">
            {site.name} brings Dura students and youth together while supporting the language,
            culture and knowledge shared across generations.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/language/" className="btn btn-primary">
              Learn Dura Lopa
            </Link>
            <Link href="/heritage/" className="btn btn-ghost">
              Explore Dura heritage
            </Link>
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--line)" }}>
          <Image
            src="/images/hero.jpg"
            alt="Dura Students Society members gathered in traditional dress at Handikhola, Lamjung"
            width={1600}
            height={1066}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="aspect-[4/3] w-full object-cover object-center"
          />
          <figcaption className="border-t px-4 py-3 text-xs leading-relaxed muted" style={{ borderColor: "var(--line)" }}>
            Dura Students Society members at the 32nd Anniversary of Dura Service Society,
            Handikhola, Lamjung. Photo: Society archive.
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="start-here"
        className="border-y"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--card)" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <p className="eyebrow">Start here</p>
          <h2 id="start-here" className="mt-2 text-2xl font-bold md:text-3xl">
            What brings you to Dura Students Society?
          </h2>
          <ul className="mt-7 grid gap-0 md:grid-cols-3">
            {startingPoints.map((point, index) => (
              <li
                key={point.number}
                className={`py-5 md:px-6 md:py-2 ${index > 0 ? "border-t md:border-l md:border-t-0" : "md:pl-0"} ${index === startingPoints.length - 1 ? "md:pr-0" : ""}`}
                style={{ borderColor: "var(--line)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {point.number} · {point.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{point.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-relaxed muted">
                  {point.description}
                </p>
                <Link
                  href={point.href}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-accent hover:underline underline-offset-4"
                >
                  {point.action}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="heritage-browse" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <p className="eyebrow">Dura Digital Heritage Project</p>
            <h2 id="heritage-browse" className="mt-2 text-2xl font-bold md:text-3xl">
              Knowledge is connected to people and place.
            </h2>
            <p className="mt-3 leading-relaxed muted">
              Explore community heritage through records of people, places and shared
              histories—cared for with attention to context, access and consent.
            </p>
            <Link href="/heritage/" className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline underline-offset-4">
              About the heritage project <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="divide-y border-y" style={{ borderColor: "var(--line)" }}>
            {heritageLinks.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                    <span>
                      <span className="block font-semibold group-hover:text-accent">{item.title}</span>
                      <span className="mt-1 block text-sm muted">{item.detail}</span>
                    </span>
                  </span>
                  <span className="text-lg text-accent" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="take-part"
        className="mx-auto max-w-6xl px-4 pb-14 md:pb-20"
      >
        <div
          className="flex flex-col justify-between gap-5 rounded-2xl border p-6 sm:p-8 md:flex-row md:items-center md:gap-10"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--card)" }}
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Take part</p>
            <h2 id="take-part" className="mt-2 text-2xl font-bold">
              Help keep community knowledge connected.
            </h2>
            <p className="mt-2 text-sm leading-relaxed muted">
              Have a question, correction or material to share? Get in touch with the Society.
              Heritage contributions are handled with care for community context and consent.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-primary">
              Contact the Society
            </Link>
            <Link href="/heritage/policy/" className="btn btn-ghost">
              Rights & consent
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
