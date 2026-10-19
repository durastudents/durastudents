import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Digital Archive" };

const ids = [
  ["DHP-PHO", "Photograph"],
  ["DHP-AUD", "Audio"],
  ["DHP-VID", "Video"],
  ["DHP-DOC", "Document"],
  ["DHP-PER", "Person"],
  ["DHP-PLC", "Place"],
  ["DHP-LNG", "Language"],
  ["DHP-OBJ", "Artifact"],
  ["DHP-INT", "Intangible Heritage"],
];

export default function Archive() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Archive"
        title="Digital archive."
        lead="Photographs, audio, video and documents, each with a unique identifier and full metadata."
      />
      <Container>
        <Notice>The archive is in the foundation phase. No items are published yet.</Notice>
        <h2 className="mt-12 text-xl font-bold">Identifier scheme</h2>
        <p className="mt-2 text-sm muted">Every item gets an ID such as DHP-PHO-00001.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {ids.map(([code, label]) => (
            <li key={code} className="card !p-4">
              <code className="font-semibold text-brand-500">{code}</code>
              <p className="text-sm muted">{label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
