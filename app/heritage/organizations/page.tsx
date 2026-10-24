import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { organizations } from "@/data/site";

export const metadata: Metadata = {
  title: "Dura Organizations",
  description:
    "Organizations of the Dura community in Nepal.",
};

export default function Organizations() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Organizations"
        title="Key organizations of the Dura community."
      />
      <Container>
        <ul className="grid gap-4 sm:grid-cols-3">
          {organizations.map((o) => (
            <li key={o.name} className="card text-center">
              {o.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={o.logo}
                  alt={`${o.name} logo`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="mx-auto h-40 w-40 rounded-xl bg-white object-contain p-2"
                />
              ) : (
                <div
                  aria-hidden
                  className="mx-auto flex h-40 w-40 items-center justify-center rounded-xl bg-brand-100 text-5xl font-bold text-brand-700"
                >
                  {o.name[5]}
                </div>
              )}
              <h2 className="mt-4 font-semibold">{o.name}</h2>
              <p lang="ne" className="devanagari-text text-sm muted">{o.ne}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
