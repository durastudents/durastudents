import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader, { Container } from "@/components/PageHeader";
import { kinds, publicItems } from "@/data/archive";

type Params = { id: string };

export const dynamicParams = false;

// Static export refuses a dynamic route with no params, so while the archive is empty we
// generate one placeholder (it renders the 404 page and is not linked or in the sitemap).
export function generateStaticParams(): Params[] {
  return publicItems.length > 0 ? publicItems.map((i) => ({ id: i.id })) : [{ id: "none" }];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  const item = publicItems.find((i) => i.id === id);
  return item ? { title: item.title, description: item.description } : {};
}

export default async function ArchiveItemPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const item = publicItems.find((i) => i.id === id);
  if (!item) notFound();

  const facts: [string, string | undefined][] = [
    ["Identifier", item.id],
    ["Type", kinds[item.kind]],
    ["Date", item.date],
    ["Place", item.place],
    ["Language", item.language],
    ["People", item.people?.join(", ")],
    ["Contributor", item.contributor],
    ["Source", item.source],
    ["Rights", item.rights],
    ["Access", item.access],
    ["Verification", item.status],
  ];

  return (
    <>
      <PageHeader eyebrow={`Archive · ${kinds[item.kind]}`} title={item.title} lead={item.description} />
      <Container>
        <div className="space-y-6">
          {item.files.map((f) => {
            const label = f.label ?? item.title;
            if (f.type === "image") {
              // eslint-disable-next-line @next/next/no-img-element
              return <img key={f.src} src={f.src} alt={f.alt} className="max-h-[70vh] w-auto rounded-2xl border" style={{ borderColor: "var(--line)" }} />;
            }
            if (f.type === "audio") {
              return (
                <figure key={f.src}>
                  <figcaption className="mb-2 text-sm muted">{label}</figcaption>
                  <audio controls preload="none" src={f.src} className="w-full" />
                </figure>
              );
            }
            if (f.type === "video") {
              return (
                <figure key={f.src}>
                  <figcaption className="mb-2 text-sm muted">{label}</figcaption>
                  <video controls preload="none" src={f.src} className="w-full rounded-2xl" />
                </figure>
              );
            }
            if (f.type === "link") {
              return (
                <p key={f.src}>
                  <a className="btn btn-ghost" href={f.src} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </p>
              );
            }
            return (
              <p key={f.src}>
                <a className="btn btn-ghost" href={f.src}>Open {label} (PDF)</a>
              </p>
            );
          })}
        </div>

        <dl className="card mt-8 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[10rem_1fr]">
          {facts
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold">{k}</dt>
                <dd className="muted">{v}</dd>
              </div>
            ))}
        </dl>

        <p className="mt-8 text-sm muted">
          <Link href="/heritage/archive/">Back to the archive</Link> ·{" "}
          <Link href="/heritage/policy/">Rights, consent and access</Link>
        </p>
      </Container>
    </>
  );
}
