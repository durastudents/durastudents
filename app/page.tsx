import Image from "next/image";
import Link from "next/link";
import { collections, phases, targets, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20">
        <p className="eyebrow">Dura Indigenous Community · Nepal</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-none">
          Our identity. Our language. <span className="text-accent">Our heritage.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg muted">
          {site.name} connects Dura youth, strengthens community identity, preserves our
          language and culture, and creates opportunities for the generations that come after us.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/about/" className="btn btn-primary">Discover Dura</Link>
          <Link href="/heritage/" className="btn btn-ghost">Explore our heritage</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <figure>
          <Image
            src="/images/hero.jpg"
            alt="About thirty young Dura people in traditional red, green and checked dress pose together in a grassy field in front of terraced green hillsides at Handikhola, Lamjung, some kneeling in front and the rest standing in rows behind."
            width={1600}
            height={1066}
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="aspect-3/2 w-full rounded-2xl border border-(--line) object-cover object-center"
          />
          <figcaption className="mt-2 text-xs muted">
            Dura Students Society members at the 32nd Anniversary of Dura Service Society, Handikhola, Lamjung. Photo: Dura Students Society archive.
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="eyebrow">Dura Digital Heritage Project</p>
        <h2 className="mt-2 text-3xl font-bold">A living heritage, documented for the future.</h2>
        <p className="mt-3 max-w-2xl muted">
          Interconnected collections, rather than isolated pieces of information.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <div key={c.slug} className="card">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/language/" className="card hover:border-brand-500">
            <p className="eyebrow">Dura Lopa</p>
            <p className="mt-2 font-semibold">Learn the Dura language</p>
            <p className="mt-1 text-sm muted">App, dictionary, vocabulary, sentences and audio.</p>
          </Link>
          <Link href="/heritage/people/" className="card hover:border-brand-500">
            <p className="eyebrow">Dura Peto</p>
            <p className="mt-2 font-semibold">People, places and organizations</p>
            <p className="mt-1 text-sm muted">The public face of Dura heritage.</p>
          </Link>
          <Link href="/heritage/places/" className="card hover:border-brand-500">
            <p className="eyebrow">Dura Places</p>
            <p className="mt-2 font-semibold">The heritage map</p>
            <p className="mt-1 text-sm muted">Where Dura people live, in Nepal and abroad.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Document. Preserve. Revitalize.</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((p) => (
            <li key={p.n} className="card">
              <span className="text-sm font-bold text-accent">{p.n}</span>
              <h3 className="mt-1 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Proposed archive targets</h2>
        <p className="mt-2 text-sm muted">
          These are planning targets from the project report, not completed archive totals.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {targets.map((t) => (
            <div key={t.label} className="card p-4!">
              <dt className="text-xs muted">{t.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-accent">{t.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
