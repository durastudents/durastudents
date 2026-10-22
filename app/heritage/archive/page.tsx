import Link from "next/link";
import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import ArchiveCard from "@/components/ArchiveCard";
import { kinds, publicItems, type ArchiveKind } from "@/data/archive";

export const metadata: Metadata = {
  title: "Digital Archive",
  description:
    "The Dura digital archive: photographs, audio, video and documents with unique identifiers and full metadata. Currently in its foundation phase.",
};


export default function Archive() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Archive"
        title="Digital archive."
        lead="Photographs, audio, video and documents, each with a unique identifier and full metadata."
      />
      <Container>
        {publicItems.length === 0 ? (
          <Notice>The archive is in the foundation phase. No items are published yet.</Notice>
        ) : (
          (Object.keys(kinds) as ArchiveKind[])
            .filter((k) => publicItems.some((i) => i.kind === k))
            .map((k) => (
              <section key={k} className="mb-12">
                <h2 className="text-xl font-bold">{kinds[k]}</h2>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {publicItems.filter((i) => i.kind === k).map((i) => (
                    <ArchiveCard key={i.id} item={i} />
                  ))}
                </ul>
              </section>
            ))
        )}
        <h2 className="mt-12 text-xl font-bold">Identifier scheme</h2>
        <p className="mt-2 text-sm muted">Every item gets an ID such as DHP-PHO-00001.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {Object.entries(kinds).map(([code, label]) => (
            <li key={code} className="card p-4!">
              <code className="font-semibold text-accent">DHP-{code}</code>
              <p className="text-sm muted">{label}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm muted">
          How we handle consent and access: <Link className="text-accent" href="/heritage/policy/">Rights, consent and access</Link>.
        </p>
      </Container>
    </>
  );
}
