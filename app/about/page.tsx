import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader, { Container } from "@/components/PageHeader";
import { organizations } from "@/data/site";
import { committee, history } from "@/data/society";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dura Students Society is a non-profit supporting the unity, education and development of Dura students and youth in Nepal.",
};

function CommitteeMemberCard({
  member,
}: {
  member: (typeof committee.members)[number];
}) {
  return (
    <li className="min-w-0">
      <Image
        src={member.photo}
        alt={member.name}
        width={400}
        height={460}
        sizes="(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 45vw"
        className="aspect-4/5 w-full rounded-xl object-cover"
      />
      <h4 className="mt-3 font-semibold">{member.name}</h4>
      <p className="text-sm muted"><SiteText>{member.role}</SiteText></p>
    </li>
  );
}

export default function About() {
  const president = committee.members.find((member) => member.role === "President");
  const executiveMembers = committee.members.filter(
    (member) => member.role !== "President" && member.role !== "Committee Member",
  );
  const committeeMembers = committee.members.filter(
    (member) => member.role === "Committee Member",
  );

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
          ].map(([title, body]) => (
            <div key={title} className="card">
              <h2 className="font-semibold"><SiteText>{title}</SiteText></h2>
              <p className="mt-2 text-sm muted"><SiteText>{body}</SiteText></p>
            </div>
          ))}
        </div>

        <section aria-labelledby="history-heading" className="mt-14">
          <h2 id="history-heading" className="text-2xl font-bold"><SiteText>Our history</SiteText></h2>
          <p className="mt-2 text-sm muted"><SiteText>Dates are in Bikram Sambat (BS).</SiteText></p>
          <ol className="mt-6 space-y-4 border-l-2 pl-6" style={{ borderColor: "var(--line)" }}>
            {history.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute left-[-31px] top-1.5 h-3 w-3 rounded-full bg-brand-500" />
                <p className="text-sm font-bold text-accent">
                  {item.year} · {item.place}
                </p>
                <p className="mt-1"><SiteText>{item.body}</SiteText></p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm muted">
            <SiteText>The Society thanks the Dura community, its elders, and organizations including Dura Sewa Samaj and Dura Mahila Samaj for their support.</SiteText>
          </p>
        </section>

        <section aria-labelledby="organizations-heading" className="mt-14">
          <h2 id="organizations-heading" className="text-2xl font-bold">
            <SiteText>Community organizations</SiteText>
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {organizations.map((organization) => (
              <li key={organization.name} className="card flex min-h-64 flex-col">
                <div
                  className="flex h-40 items-center justify-center rounded-xl p-4"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  {organization.logo ? (
                    <Image
                      src={organization.logo}
                      alt={`${organization.name} logo`}
                      width={300}
                      height={180}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <p className="max-w-48 text-center text-sm muted">
                      <SiteText>Organization logo not available</SiteText>
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">{organization.name}</h3>
                  <p lang="ne" className="devanagari-text text-sm muted">
                    {organization.ne}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="committee-heading" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow"><SiteText>Tenure</SiteText> {committee.tenure} · <SiteText>Bikram Sambat</SiteText></p>
              <h2 id="committee-heading" className="mt-2 text-2xl font-bold">
                <SiteText>Central Committee</SiteText>
              </h2>
              <p className="mt-2 max-w-2xl text-sm muted">
                <SiteText>The elected committee brings together Society leadership and members to support its work across the Dura community.</SiteText>
              </p>
            </div>
            <Link href="/team/" className="font-semibold text-accent">
              <SiteText>Committee details →</SiteText>
            </Link>
          </div>

          {president && (
            <div className="mx-auto mt-8 max-w-xs">
              <ul>
                <CommitteeMemberCard member={president} />
              </ul>
            </div>
          )}

          <h3 className="mt-10 border-b pb-3 text-lg font-semibold" style={{ borderColor: "var(--line)" }}>
            <SiteText>Executive committee</SiteText>
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-6">
            {executiveMembers.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </ul>

          <h3 className="mt-10 border-b pb-3 text-lg font-semibold" style={{ borderColor: "var(--line)" }}>
            <SiteText>Committee members</SiteText>
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {committeeMembers.map((member) => (
              <CommitteeMemberCard key={member.name} member={member} />
            ))}
          </ul>

          <p className="mt-6 text-xs muted">
            <SiteText>Member portraits are from the Society&apos;s archived website. Personal phone numbers shown on the original graphics are not included.</SiteText>
          </p>
        </section>
      </Container>
    </>
  );
}
