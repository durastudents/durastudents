import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { committee } from "@/data/society";

export const metadata: Metadata = { title: "Team & Governance" };

export default function Team() {
  return (
    <>
      <PageHeader
        eyebrow="Team & governance"
        title="Central Committee"
        lead={`Tenure ${committee.tenure} (Bikram Sambat).`}
      />
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {committee.members.map((m) => (
            <li key={m.name} className="card flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700"
              >
                {m.name[0]}
              </span>
              <span>
                <span className="block font-semibold">{m.name}</span>
                <span className="block text-sm muted">{m.role}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm muted">Member photos can be added once the committee provides them.</p>
      </Container>
    </>
  );
}
