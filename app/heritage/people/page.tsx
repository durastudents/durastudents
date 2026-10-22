import Link from "next/link";
import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { people } from "@/data/people";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Dura People",
  description:
    "Notable and ordinary Dura community members who shaped and preserved Dura heritage.",
};

export default function People() {
  const sorted = [...people].sort((a, b) => a.name.localeCompare(b.name));
  const nominate = `mailto:${site.email}?subject=${encodeURIComponent("Nominate a person for Dura People")}`;

  return (
    <>
      <PageHeader
        eyebrow="Heritage · People"
        title="Voices of Dura."
        lead="Honoring those who shaped our path, including ordinary people who preserved extraordinary knowledge."
      />
      <Container>
        {sorted.length === 0 ? (
          <div className="card max-w-2xl">
            <h2 className="font-semibold">This collection is being prepared.</h2>
            <p className="mt-2 text-sm muted">
              Every person appears here only with their real name and role, the consent of the
              person or their family, and a verification status. We would rather open with a
              few well-documented people than many unverified ones.
            </p>
            <p className="mt-4">
              <a className="btn btn-primary" href={nominate}>Nominate a person</a>
            </p>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <li key={p.id} className="card">
                {p.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.name}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="mb-4 aspect-4/5 w-full rounded-xl object-cover"
                  />
                )}
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-sm text-accent">{p.role}</p>
                <p className="mt-2 text-sm muted">{p.story}</p>
                <p className="mt-3 text-xs muted">{p.status}</p>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 text-sm muted">
          How we handle consent and access: <Link className="text-accent" href="/heritage/policy/">Rights, consent and access</Link>.
        </p>
      </Container>
    </>
  );
}
