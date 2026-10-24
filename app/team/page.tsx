import type { Metadata } from "next";
import Image from "next/image";
import PageHeader, { Container } from "@/components/PageHeader";
import { committee } from "@/data/society";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Team & Governance",
  description:
    "The committee and governance of Dura Students Society.",
};

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
            <li key={m.name} className="card">
              <Image
                src={m.photo}
                alt={m.name}
                width={400}
                height={460}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-4/5 w-full rounded-xl object-cover"
              />
              <div className="mt-4">
                <h2 className="font-semibold">{m.name}</h2>
                <p className="text-sm muted"><SiteText>{m.role}</SiteText></p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm muted">
          <SiteText>Committee details and portraits are from the Society&apos;s archived website. Phone numbers printed on the original member cards have been excluded.</SiteText>
        </p>
      </Container>
    </>
  );
}
