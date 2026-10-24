import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import { statistics } from "@/data/statistics";
import SiteText, { BilingualSiteText } from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Dura Statistics",
  description:
    "Dura population, sub-castes, native speakers, residences, organizations and districts (provisional figures).",
};

export default function Statistics() {
  const unsourced = statistics.some((s) => !s.source);
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Statistics"
        title="The Dura community in numbers."
        lead="Population, sub-castes, native speakers, residences, organizations and districts."
      />
      <Container>
        <dl className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {statistics.map((s) => (
            <div key={s.key} className="card">
              <dt className="text-sm muted">
                <BilingualSiteText english={s.labelEn} nepali={s.labelNe} />
              </dt>
              <dd className="mt-3 text-4xl font-bold text-accent">
                {s.value.toLocaleString("en-US")}
              </dd>
              {(s.source || s.year) && (
                <p className="mt-2 text-xs muted">
                  {[s.source, s.year].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          ))}
        </dl>
        {unsourced && (
          <div className="mt-6">
            <Notice>
              <SiteText>These figures come from the Dura Peto project data. Their source and year have not been recorded yet, so please treat them as provisional until each is cited. Note also that “5 organizations” is counted here, while three organizations are listed on the</SiteText> <a className="text-accent hover:underline" href="/heritage/organizations/"><SiteText>Organizations</SiteText></a> <SiteText>page.</SiteText>
            </Notice>
          </div>
        )}
      </Container>
    </>
  );
}
