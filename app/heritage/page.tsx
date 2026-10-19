import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container } from "@/components/PageHeader";
import { accessLevels, verification } from "@/data/site";

export const metadata: Metadata = {
  title: "Dura Digital Heritage Project",
  description:
    "A community-centred effort to document, preserve and share Dura history, language, places, people and culture.",
};

const sections = [
  { href: "/heritage/people/", title: "People", body: "Notable figures and the faces of the community." },
  { href: "/heritage/places/", title: "Places", body: "The heritage map of Dura places and residences." },
  { href: "/heritage/organizations/", title: "Organizations", body: "Dura Sewa Samaj, Dura Mahila Samaj and Dura Students Society." },
  { href: "/heritage/statistics/", title: "Statistics", body: "Population, sub-castes, native speakers and districts." },
  { href: "/heritage/archive/", title: "Archive", body: "Photographs, audio, video and documents." },
  { href: "/language/", title: "Language", body: "Dura Lopa: dictionary, vocabulary and learning." },
];

export default function Heritage() {
  return (
    <>
      <PageHeader
        eyebrow="Dura Digital Heritage Project"
        title="A community-owned digital heritage ecosystem."
        lead="Document, preserve, organize, digitize, share and revitalize: with the Dura community, not just about it."
      />
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card hover:border-brand-500">
              <h2 className="font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm muted">{s.body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Cultural rights & access levels</h2>
            <p className="mt-2 text-sm muted">
              Not everything should be public. Sensitive knowledge is managed through access levels.
            </p>
            <ul className="mt-4 space-y-3">
              {accessLevels.map((a) => (
                <li key={a.name} className="card !p-4">
                  <strong>{a.name}</strong> <span className="text-sm muted">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Verification status</h2>
            <p className="mt-2 text-sm muted">
              Not everything recorded should automatically be treated as historical fact.
            </p>
            <ul className="mt-4 space-y-3">
              {verification.map((a) => (
                <li key={a.name} className="card !p-4">
                  <strong>{a.name}</strong> <span className="text-sm muted">{a.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
