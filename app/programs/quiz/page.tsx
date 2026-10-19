import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import { quiz } from "@/data/society";

export const metadata: Metadata = {
  title: "Inter-District Quiz Contest",
  description:
    "The Shree Khaje Dura Smriti Inter-District Quiz Contest, with results from 2074 to 2083 BS.",
};

export default function Quiz() {
  return (
    <>
      <PageHeader eyebrow="Programs" title={quiz.name} lead={quiz.purpose} />
      <Container>
        <p className="text-sm muted">
          Participating districts: {quiz.districts.join(", ")}. Years are in Bikram Sambat (BS).
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--line)" }}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Results by year</caption>
            <thead style={{ background: "var(--card)" }}>
              <tr>
                <th scope="col" className="px-4 py-3">Year (BS)</th>
                <th scope="col" className="px-4 py-3">Venue</th>
                <th scope="col" className="px-4 py-3">Winner</th>
                <th scope="col" className="px-4 py-3">Other teams</th>
              </tr>
            </thead>
            <tbody>
              {quiz.results.map((r) => (
                <tr key={r.year} className="border-t" style={{ borderColor: "var(--line)" }}>
                  <th scope="row" className="px-4 py-3 font-semibold">{r.year}</th>
                  <td className="px-4 py-3 muted">{r.venue}</td>
                  <td className="px-4 py-3 font-semibold text-brand-500">{r.winner}</td>
                  <td className="px-4 py-3 muted">{r.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Notice>
            Still to add from the old page: format, rounds, rules, team members, prizes and
            sponsors by year.
          </Notice>
        </div>
      </Container>
    </>
  );
}
