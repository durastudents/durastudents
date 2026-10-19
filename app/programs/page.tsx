import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container } from "@/components/PageHeader";
import { programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Programs run by Dura Students Society for Dura youth and the wider Dura community.",
};

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Programs & activities"
        title="Learning, documenting and celebrating together."
      />
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => (
            <div key={p.title} className="card">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm muted">{p.body}</p>
              {p.title.startsWith("Inter-District") && (
                <Link href="/programs/quiz/" className="mt-4 inline-block text-sm font-semibold text-brand-500">
                  Quiz competition →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
