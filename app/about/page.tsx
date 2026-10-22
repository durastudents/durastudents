import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container } from "@/components/PageHeader";
import { organizations } from "@/data/site";
import { history } from "@/data/society";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dura Students Society is a non-profit supporting the unity, education and development of Dura students and youth in Nepal.",
};

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Society"
        title="Connecting Dura youth with their heritage and future."
        lead="Dura Students Society is a non-profit that supports the unity, education and development of Dura students and youth, a platform where students connect, grow and contribute to the Dura community."
      />
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Unity & Support", "We connect Dura students to foster teamwork, friendship and mutual support."],
            ["Youth Participation", "We motivate Dura youth to take part in social, cultural and educational activities."],
            ["Growth & Learning", "We promote education, awareness, leadership and personal growth."],
          ].map(([t, b]) => (
            <div key={t} className="card">
              <h2 className="font-semibold">{t}</h2>
              <p className="mt-2 text-sm muted">{b}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold">Our history</h2>
        <p className="mt-2 text-sm muted">Dates are in Bikram Sambat (BS).</p>
        <ol className="mt-6 space-y-4 border-l-2 pl-6" style={{ borderColor: "var(--line)" }}>
          {history.map((h) => (
            <li key={h.year} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-brand-500" />
              <p className="text-sm font-bold text-accent">
                {h.year} · {h.place}
              </p>
              <p className="mt-1">{h.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm muted">
          The Society thanks the Dura community, its elders, and organizations including Dura Sewa
          Samaj and Dura Mahila Samaj for their support.
        </p>

        <h2 className="mt-14 text-2xl font-bold">Community organizations</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {organizations.map((o) => (
            <li key={o.name} className="card">
              <p className="font-semibold">{o.name}</p>
              <p className="text-sm muted">{o.ne}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/team/" className="font-semibold text-accent">
            Meet the current central committee →
          </Link>
        </p>
      </Container>
    </>
  );
}
