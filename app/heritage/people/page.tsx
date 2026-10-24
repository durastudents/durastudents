import Link from "next/link";
import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { people } from "@/data/people";
import { site } from "@/data/site";
import SiteText from "@/components/SiteText";

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
            <h2 className="font-semibold"><SiteText>This collection is being prepared.</SiteText></h2>
            <p className="mt-2 text-sm muted">
              <SiteText>Every person appears here only with their real name and role, the consent of the person or their family, and a verification status. We would rather open with a few well-documented people than many unverified ones.</SiteText>
            </p>
            <p className="mt-4">
              <a className="btn btn-primary" href={nominate}><SiteText>Nominate a person</SiteText></a>
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
                <p className="text-sm text-accent"><SiteText>{p.role}</SiteText></p>
                <p className="mt-2 text-sm muted">{p.story}</p>
                <p className="mt-3 text-xs muted"><SiteText>{p.status}</SiteText></p>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 text-sm muted">
          <SiteText>How we handle consent and access:</SiteText> <Link className="text-accent" href="/heritage/policy/"><SiteText>Rights, consent and access</SiteText></Link>.
        </p>
      </Container>
    </>
  );
}
