import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dura Students Society. Students, elders, researchers, storytellers and volunteers are welcome.",
};

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Be part of the work." lead="Students, elders, researchers, storytellers, photographers, language learners and technology volunteers are all welcome." />
      <Container>
        <div className="card max-w-xl">
          <p><strong>Location:</strong> {site.location}</p>
          {site.email ? (
            <p className="mt-2"><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          ) : (
            <p className="mt-2 text-sm muted">Official email address to be added.</p>
          )}
          <p className="mt-4 flex gap-4 text-sm">
            <a className="text-brand-500" href={site.facebook}>Facebook</a>
            <a className="text-brand-500" href={site.youtube}>YouTube</a>
          </p>
        </div>
      </Container>
    </>
  );
}
