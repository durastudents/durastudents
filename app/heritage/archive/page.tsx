import Link from "next/link";
import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import ArchiveCard from "@/components/ArchiveCard";
import { kinds, publicItems, type ArchiveKind } from "@/data/archive";
import SiteText from "@/components/SiteText";

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
          <Notice><SiteText>The archive is in the foundation phase. No items are published yet.</SiteText></Notice>
        ) : (
          (Object.keys(kinds) as ArchiveKind[])
            .filter((k) => publicItems.some((i) => i.kind === k))
            .map((k) => (
              <section key={k} className="mb-12">
                <h2 className="text-xl font-bold"><SiteText>{kinds[k]}</SiteText></h2>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {publicItems.filter((i) => i.kind === k).map((i) => (
                    <ArchiveCard key={i.id} item={i} />
                  ))}
                </ul>
              </section>
            ))
        )}
        <h2 className="mt-12 text-xl font-bold"><SiteText>Identifier scheme</SiteText></h2>
        <p className="mt-2 text-sm muted"><SiteText>Every item gets an ID such as DHP-PHO-00001.</SiteText></p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {Object.entries(kinds).map(([code, label]) => (
            <li key={code} className="card p-4!">
              <code className="font-semibold text-accent">DHP-{code}</code>
              <p className="text-sm muted"><SiteText>{label}</SiteText></p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm muted">
          <SiteText>How we handle consent and access:</SiteText> <Link className="text-accent" href="/heritage/policy/"><SiteText>Rights, consent and access</SiteText></Link>.
        </p>
      </Container>
    </>
  );
}
