import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/site";
import ProgramIllustration from "@/components/ProgramIllustration";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Dura Students Society programs in language learning, cultural documentation, community events, publications and the inter-district quiz.",
};

const illustrationBackgrounds = ["#F2F6F0", "#F8F1E8", "#EEF2F6", "#F8F1E8", "#EEF2F6"];

export default function Programs() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 md:gap-12 md:pb-14 md:pt-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow"><SiteText>Dura Students Society · Programs</SiteText></p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            <SiteText>We learn by doing it together.</SiteText>
          </h1>
          <p className="mt-5 max-w-xl text-lg muted">
            <SiteText>Language, shared stories, community gatherings and learning resources give Dura students and families ways to carry knowledge forward.</SiteText>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#program-list" className="btn btn-primary">
              <SiteText>Explore our programs</SiteText>
            </a>
            <Link href="/contact/" className="btn btn-ghost">
              <SiteText>Get in touch</SiteText>
            </Link>
          </div>
        </div>

        <figure className="overflow-hidden rounded-3xl border" style={{ borderColor: "var(--line)" }}>
          <Image
            src="/images/hero.jpg"
            alt="Dura Students Society members gathered in Handikhola, Lamjung"
            width={1600}
            height={900}
            priority
            className="aspect-[4/3] w-full object-cover object-center md:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <figcaption className="border-t px-4 py-3 text-xs muted" style={{ borderColor: "var(--line)" }}>
            Dura Students Society gathering · Handikhola, Lamjung · 2082 BS
          </figcaption>
        </figure>
      </section>

      <section
        id="program-list"
        aria-labelledby="program-list-heading"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-16 pt-4 md:pb-20"
      >
        <div className="max-w-2xl pb-3">
          <p className="eyebrow"><SiteText>Learning, culture and community</SiteText></p>
          <h2 id="program-list-heading" className="mt-2 text-2xl font-bold md:text-3xl">
            <SiteText>Ways we bring people together</SiteText>
          </h2>
        </div>

        <ol className="mt-5 divide-y border-y" style={{ borderColor: "var(--line)" }}>
          {programs.map((program, index) => (
            <li
              key={program.title}
              className="grid items-center gap-5 py-7 md:grid-cols-2 md:gap-12 md:py-9 lg:gap-16"
            >
              <div
                className={`overflow-hidden rounded-3xl p-3 sm:p-5 ${index % 2 === 1 ? "md:order-2" : ""}`}
                style={{ backgroundColor: illustrationBackgrounds[index] }}
              >
                <ProgramIllustration kind={program.illustration} />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {program.number} <span className="mx-1 muted" aria-hidden="true">/</span> <SiteText>Program</SiteText>
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight"><SiteText>{program.title}</SiteText></h3>
                <p className="mt-3 max-w-xl leading-relaxed muted"><SiteText>{program.body}</SiteText></p>
                <Link
                  href={program.href}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline underline-offset-4"
                >
                  <SiteText>{program.linkLabel}</SiteText>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-between gap-5 border-l-4 border-brand-600 pl-5 sm:flex-row sm:items-center sm:gap-8">
          <div>
            <h2 className="text-xl font-bold"><SiteText>Have an idea or want to take part?</SiteText></h2>
            <p className="mt-1 text-sm muted">
              <SiteText>Get in touch with the Society to ask about programs and ways to contribute.</SiteText>
            </p>
          </div>
          <Link href="/contact/" className="btn btn-primary w-fit shrink-0">
            <SiteText>Contact the Society</SiteText>
          </Link>
        </div>
      </section>
    </>
  );
}
