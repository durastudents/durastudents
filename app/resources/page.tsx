import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documents and publications from Dura Students Society.",
};

// Add entries as files are placed in /public/docs, e.g. { title, note, href: "/docs/constitution.pdf" }
const documents: { title: string; note: string; href: string }[] = [];

export default function Resources() {
  return (
    <>
      <PageHeader eyebrow="Resources & downloads" title="Documents and learning materials." />
      <Container>
        {documents.length === 0 ? (
          <Notice>
            No documents published yet. Copy the Constitution, Annual Report and Program Summary
            PDFs from the old <code>durastudents-website</code> repo into <code>public/docs</code>{" "}
            and list them in this file.
          </Notice>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {documents.map((d) => (
              <li key={d.href} className="card">
                <a href={d.href} className="font-semibold text-brand-500">{d.title}</a>
                <p className="mt-1 text-sm muted">{d.note}</p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
