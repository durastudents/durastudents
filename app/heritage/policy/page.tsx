import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import { accessLevels, site, verification } from "@/data/site";

export const metadata: Metadata = {
  title: "Rights, Consent and Access",
  description:
    "How the Dura Digital Heritage Project handles ownership, consent, access levels, sensitive knowledge and verification. Draft pending committee review.",
};

export default function Policy() {
  const removal = site.email
    ? `mailto:${site.email}?subject=${encodeURIComponent("Heritage item: removal or correction request")}`
    : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Heritage · Policy"
        title="Rights, consent and access."
        lead="The archive belongs to the Dura community. These are the principles we follow when we collect, label and share heritage material."
      />
      <Container>
        <Notice>
          <strong>Draft.</strong> This policy has not yet been reviewed or adopted by the
          committee and cultural reviewers. Until it is, treat it as the working proposal, and
          nothing is published without the consent steps below.
        </Notice>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold">Ownership and consent</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm muted">
              <li>The project is built with the Dura community, not only about it.</li>
              <li>
                People who give us photographs, recordings, documents or stories remain
                credited as the source. We record who gave each item and under what terms.
              </li>
              <li>
                Nothing is published without the contributor&apos;s consent. For a person
                featured in the archive, we need their consent, or their family&apos;s if they
                have passed away.
              </li>
              <li>
                Consent records are kept by the project team and are not published on this site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Sacred and sensitive knowledge</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm muted">
              <li>Not everything recorded should be public.</li>
              <li>
                Cultural reviewers and elders decide whether ritual, ceremonial or otherwise
                community-sensitive material is shown openly, limited, or kept in the archive only.
              </li>
              <li>
                Where a community member asks us to restrict or withdraw something, we
                restrict it first and then discuss.
              </li>
            </ul>
          </section>
        </div>

        <h2 className="mt-14 text-2xl font-bold">Access levels</h2>
        <p className="mt-2 max-w-2xl text-sm muted">
          Every archive item is assigned one level. The default for anything unclear is the
          more restrictive one.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accessLevels.map((a) => (
            <li key={a.name} className="card">
              <h3 className="font-semibold">{a.name}</h3>
              <p className="mt-1 text-sm muted">{a.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold">Verification labels</h2>
        <p className="mt-2 max-w-2xl text-sm muted">
          Not everything recorded is treated as historical fact. Each claim carries one label so
          readers can judge it for themselves.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {verification.map((v) => (
            <li key={v.name} className="card">
              <h3 className="font-semibold">{v.name}</h3>
              <p className="mt-1 text-sm muted">{v.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-bold">Reuse</h2>
            <p className="mt-4 text-sm muted">
              Proposed default: material may be viewed freely at the Public level. Copying,
              republishing or commercial use needs written permission from the Society and,
              where relevant, the contributor. Individual items will state their own terms once
              the archive opens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Corrections and removal</h2>
            <p className="mt-4 text-sm muted">
              If you see a mistake, or you or your family want something changed, restricted or
              taken down, tell us and quote the item&apos;s identifier (for example DHP-PHO-00001).
            </p>
            {removal ? (
              <p className="mt-4">
                <a className="btn btn-primary" href={removal}>Send a request</a>
              </p>
            ) : (
              <p className="mt-4 text-sm muted">Contact address to be added.</p>
            )}
          </section>
        </div>
      </Container>
    </>
  );
}
