import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { site } from "@/data/site";
import { contributors, features, language, screenshots } from "@/data/lopa";

export const metadata: Metadata = {
  title: "Dura Language · Dura Lopa",
  description:
    "Dura Lopa: learn the Dura language with the alphabet, dictionary, vocabulary, verbs, sentences and audio.",
};

export default function Language() {
  return (
    <>
      <PageHeader
        eyebrow="Dura Lopa"
        title="A language is more than words."
        lead="Language carries memory, identity and relationships. Dura Lopa connects learning the Dura language with the wider story of Dura heritage."
      />

      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <a className="btn btn-primary" href={site.playStore}>Get it on Google Play</a>
          <a className="btn btn-ghost" href={site.appStore}>Download on the App Store</a>
          <a className="btn btn-ghost" href={site.lopaWeb}>Open the web dictionary</a>
        </div>
        <p className="mt-3 text-xs muted">Language code (ISO 639-3): {language.iso}</p>
      </Container>

      <Container>
        <h2 className="text-2xl font-bold">The app</h2>
        <ul className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4" aria-label="App screenshots" tabIndex={0}>
          {screenshots.map((s) => (
            <li key={s.src} className="shrink-0 snap-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                width={240}
                height={485}
                loading="lazy"
                className="h-auto w-[200px] rounded-2xl border sm:w-[240px]"
                style={{ borderColor: "var(--line)" }}
              />
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <h2 className="text-2xl font-bold">What you can learn</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card">
              <p className="text-2xl" aria-hidden>{f.icon}</p>
              <h3 className="mt-2 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <h2 className="text-2xl font-bold">Contributors</h2>
        <p className="mt-2 max-w-2xl text-sm muted">
          The people who made Dura Lopa possible, supported by {site.name}.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {contributors.map((c) => (
            <li key={c.name} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.name}
                width={160}
                height={160}
                loading="lazy"
                className="mx-auto h-28 w-28 rounded-full border object-cover"
                style={{ borderColor: "var(--line)" }}
              />
              <p className="mt-3 text-sm font-semibold">{c.name}</p>
              <p className="text-xs muted">{c.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
