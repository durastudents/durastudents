import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { galleryItems } from "@/data/archive";
import GalleryCard from "@/components/GalleryCard";
import SiteText from "@/components/SiteText";

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
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 28rem at 85% -10%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%), radial-gradient(40rem 22rem at -10% 110%, color-mix(in srgb, var(--color-earth-500) 12%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:pt-16 md:gap-14 md:pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:pt-24">
          <div>
            <p className="eyebrow reveal"><SiteText>Dura Indigenous Community · Nepal</SiteText></p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-2xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
              <SiteText>Dura language and heritage, carried forward together.</SiteText>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed muted md:text-xl">
              {site.name} <SiteText>brings Dura students and youth together while supporting the language, culture and knowledge shared across generations.</SiteText>
            </p>
            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/language/" className="btn btn-primary">
                <SiteText>Learn Dura Lopa</SiteText>
              </Link>
              <Link href="/heritage/" className="btn btn-ghost">
                <SiteText>Explore Dura heritage</SiteText>
              </Link>
            </div>
          </div>

          <figure className="reveal reveal-delay-1 relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-3xl border sm:block"
              style={{ borderColor: "color-mix(in srgb, var(--accent) 35%, var(--line))" }}
            />
            <div
              className="relative overflow-hidden rounded-3xl border"
              style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-lift)" }}
            >
              <Image
                src="/images/hero.jpg"
                alt="Dura Students Society members gathered in traditional dress at Handikhola, Lamjung"
                width={1600}
                height={1066}
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <figcaption
                className="border-t px-4 py-3 text-xs leading-relaxed muted"
                style={{ borderColor: "var(--line)", background: "var(--card)" }}
              >
                Dura Students Society members at the 32nd Anniversary of Dura Service Society,
                Handikhola, Lamjung. Photo: Society archive.
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section aria-labelledby="start-here" className="section-band">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="eyebrow"><SiteText>Start here</SiteText></p>
          <h2 id="start-here" className="mt-3 max-w-2xl text-3xl md:text-4xl">
            <SiteText>What brings you to Dura Students Society?</SiteText>
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {startingPoints.map((point) => (
              <li key={point.number} className="flex">
                <Link
                  href={point.href}
                  className="card card-interactive group flex w-full flex-col p-7!"
                  style={{ color: "var(--fg)" }}
                >
                  <span className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      <SiteText>{point.eyebrow}</SiteText>
                    </span>
                    <span
                      className="font-display text-3xl leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "color-mix(in srgb, var(--accent) 45%, transparent)" }}
                      aria-hidden="true"
                    >
                      {point.number}
                    </span>
                  </span>
                  <h3 className="mt-6 text-xl font-semibold"><SiteText>{point.title}</SiteText></h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed muted">
                    <SiteText>{point.description}</SiteText>
                  </p>
                  <span className="text-link mt-6">
                    <SiteText>{point.action}</SiteText>
                    <span aria-hidden="true" className="arrow">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="heritage-browse" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <p className="eyebrow"><SiteText>Dura Digital Heritage Project</SiteText></p>
            <h2 id="heritage-browse" className="mt-3 text-3xl md:text-4xl">
              <SiteText>Knowledge is connected to people and place.</SiteText>
            </h2>
            <p className="mt-4 leading-relaxed muted">
              <SiteText>Explore community heritage through records of people, places and shared histories—cared for with attention to context, access and consent.</SiteText>
            </p>
            <Link href="/heritage/" className="text-link mt-6">
              <SiteText>About the heritage project</SiteText> <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>
          <ul className="divide-y border-y" style={{ borderColor: "var(--line)" }}>
            {heritageLinks.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group -mx-3 flex min-h-16 cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-5 transition-colors hover:bg-[var(--accent-soft)]"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                    <span>
                      <span className="block text-lg font-semibold group-hover:text-accent"><SiteText>{item.title}</SiteText></span>
                      <span className="mt-1 block text-sm muted"><SiteText>{item.detail}</SiteText></span>
                    </span>
                  </span>
                  <span className="text-lg text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="community-moments" className="section-band">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow"><SiteText>Photos & videos</SiteText></p>
              <h2 id="community-moments" className="mt-3 text-3xl md:text-4xl">
                <SiteText>Community moments.</SiteText>
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed muted">
                <SiteText>Meet the people and moments that bring Dura Students Society together.</SiteText>
              </p>
            </div>
            <Link href="/gallery/" className="text-link">
              <SiteText>Visit the gallery</SiteText> <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>
          {galleryItems.length > 0 ? (
            <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.slice(0, 3).map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-sm muted">
              <SiteText>Approved community photos and videos will appear here as they are reviewed and added.</SiteText>
            </p>
          )}
        </div>
      </section>

      <section aria-labelledby="take-part" className="mx-auto max-w-6xl px-4 pb-6 pt-14 md:pt-20">
        <div
          className="relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-3xl p-8 sm:p-10 md:flex-row md:items-center md:gap-12 md:p-12"
          style={{ background: "var(--color-brand-800)", color: "#f0f7f1" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgb(79 174 112 / 0.35), transparent 70%)" }}
          />
          <div className="max-w-2xl">
            <p className="eyebrow" style={{ color: "#b9d9bf" }}><SiteText>Take part</SiteText></p>
            <h2 id="take-part" className="mt-3 text-3xl md:text-4xl" style={{ color: "#ffffff" }}>
              <SiteText>Help keep community knowledge connected.</SiteText>
            </h2>
            <p className="mt-3 leading-relaxed" style={{ color: "#dcecde" }}>
              <SiteText>Have a question, correction or material to share? Get in touch with the Society. Heritage contributions are handled with care for community context and consent.</SiteText>
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/contact/" className="btn bg-white text-brand-900 hover:bg-brand-100">
              <SiteText>Contact the Society</SiteText>
            </Link>
            <Link href="/heritage/policy/" className="btn border border-white/40 text-white hover:bg-white/10">
              <SiteText>Rights & consent</SiteText>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
