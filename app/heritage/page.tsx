import type { Metadata } from "next";
import Link from "next/link";
import HeritageIllustration from "@/components/HeritageIllustration";
import { accessLevels, verification } from "@/data/site";

export const metadata: Metadata = {
  title: "Dura Digital Heritage Project",
  description:
    "Explore Dura people, places, organizations and community records through the Dura Digital Heritage Project.",
};

const collections = [
  {
    href: "/heritage/people/",
    title: "People",
    body: "Discover notable figures and community members who carry Dura stories and knowledge.",
    icon: "people",
    tone: "sage",
  },
  {
    href: "/heritage/places/",
    title: "Places",
    body: "Explore Dura places, residences and the connections that shape them.",
    icon: "places",
    tone: "blue",
  },
  {
    href: "/heritage/organizations/",
    title: "Organizations",
    body: "Meet Dura Sewa Samaj, Dura Mahila Samaj and Dura Students Society.",
    icon: "organizations",
    tone: "clay",
  },
  {
    href: "/heritage/statistics/",
    title: "Statistics",
    body: "See information about population, sub-castes, speakers and districts.",
    icon: "statistics",
    tone: "gold",
  },
  {
    href: "/heritage/archive/",
    title: "Archive",
    body: "Learn about the collection of photographs, audio, video and documents.",
    icon: "archive",
    tone: "lavender",
  },
] as const;

function CollectionIcon({ name }: { name: (typeof collections)[number]["icon"] }) {
  const paths = {
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19v-1.5a5.5 5.5 0 0 1 11 0V19z" />
        <path d="M16 5.3a3 3 0 0 1 0 5.8M17 14a4.5 4.5 0 0 1 3.5 4.4V19h-3" />
      </>
    ),
    places: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.3" />
      </>
    ),
    organizations: (
      <>
        <path d="M3 20h18M5 20V8l7-4 7 4v12M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01" />
      </>
    ),
    statistics: (
      <>
        <path d="M4 20V4M4 20h17" />
        <path d="m7 15 4-4 3 2 6-7" />
        <path d="M16 6h4v4" />
      </>
    ),
    archive: (
      <>
        <path d="M4 7.5h16v12H4zM3 4h18v3.5H3zM9 11h6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

export default function Heritage() {
  return (
    <div className="heritage-page">
      <section
        aria-labelledby="heritage-title"
        className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-10 sm:pt-14 md:gap-12 md:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16"
      >
        <div>
          <p className="eyebrow">Dura Digital Heritage Project</p>
          <h1
            id="heritage-title"
            className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            Discover the heritage we carry together.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed muted">
            Explore Dura people, places, organizations and community records—documented with
            care for the knowledge, context and rights of the Dura community.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#collections" className="btn btn-primary">
              Explore collections
            </a>
            <Link href="/heritage/policy/" className="btn btn-ghost">
              Rights &amp; consent
            </Link>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm muted">
            <span aria-hidden="true" className="heritage-status-dot" />
            The digital archive is in its foundation phase; no items are published yet.
          </p>
        </div>
        <HeritageIllustration />
      </section>

      <section
        id="collections"
        aria-labelledby="collections-title"
        className="heritage-collections border-y"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Explore the project</p>
            <h2 id="collections-title" className="mt-2 text-2xl font-bold md:text-3xl">
              Heritage is connected to people and place.
            </h2>
            <p className="mt-3 leading-relaxed muted">
              Choose a collection to learn what is documented and how each part of Dura
              heritage is being brought together.
            </p>
          </div>

          <ul className="mt-7 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <li key={collection.href}>
                <Link
                  href={collection.href}
                  className={`heritage-card heritage-card--${collection.tone} group flex h-full flex-col rounded-2xl border p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-offset-4`}
                >
                  <span className="heritage-card-icon mb-5 flex h-12 w-12 items-center justify-center rounded-2xl">
                    <CollectionIcon name={collection.icon} />
                  </span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold">{collection.title}</span>
                    <span className="heritage-card-arrow text-lg" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                  <span className="mt-2 text-sm leading-relaxed muted">{collection.body}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="heritage-language mt-6 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <span className="heritage-language-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 5h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 2V5Z" />
                  <path d="M8 10h7M8 14h5" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest">Related learning</p>
                <h3 className="mt-1 text-lg font-semibold">Learn Dura Lopa</h3>
                <p className="mt-1 text-sm leading-relaxed muted">
                  Browse the dictionary, example sentences and language learning resources.
                </p>
              </div>
            </div>
            <Link
              href="/language/"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-accent hover:underline underline-offset-4"
            >
              Explore the language
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="care-title"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <div className="max-w-2xl">
          <p className="eyebrow">Care, consent &amp; context</p>
          <h2 id="care-title" className="mt-2 text-2xl font-bold md:text-3xl">
            Sharing heritage responsibly.
          </h2>
          <p className="mt-3 leading-relaxed muted">
            Not everything should be public, and not every account is an independently
            verified fact. These proposed labels help explain access and context.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <section className="heritage-guidance heritage-guidance--access rounded-2xl border p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Access levels</h3>
                <p className="mt-1 text-sm leading-relaxed muted">
                  Who can view heritage material.
                </p>
              </div>
              <span className="heritage-draft-badge rounded-full px-3 py-1 text-xs font-semibold">
                Proposed
              </span>
            </div>
            <ul className="mt-5 grid list-none gap-3 p-0 sm:grid-cols-2">
              {accessLevels.map((level) => (
                <li key={level.name} className="heritage-guidance-item rounded-xl p-3">
                  <p className="font-semibold">{level.name}</p>
                  <p className="mt-1 text-sm leading-relaxed muted">{level.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="heritage-guidance heritage-guidance--verification rounded-2xl border p-5 sm:p-6">
            <div>
              <h3 className="text-xl font-bold">Verification labels</h3>
              <p className="mt-1 text-sm leading-relaxed muted">
                How readers can understand a recorded account.
              </p>
            </div>
            <ul className="mt-5 grid list-none gap-3 p-0 sm:grid-cols-2">
              {verification.map((status) => (
                <li key={status.name} className="heritage-guidance-item rounded-xl p-3">
                  <p className="font-semibold">{status.name}</p>
                  <p className="mt-1 text-sm leading-relaxed muted">{status.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="heritage-policy-note mt-5 flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed">
            <strong>Policy status:</strong> the Rights, Consent and Access policy is a draft
            pending committee and cultural reviewer approval.
          </p>
          <Link
            href="/heritage/policy/"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-accent hover:underline underline-offset-4"
          >
            Read the draft policy
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
