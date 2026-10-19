import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Impact" };

export default function Impact() {
  return (
    <>
      <PageHeader eyebrow="Impact" title="What the Society has achieved." />
      <Container>
        <Notice>
          Impact figures (learners reached, events organized, publications) will be published
          here after the Society verifies them. The earlier site showed 250+, 40+ and 12+, which
          are not confirmed.
        </Notice>
      </Container>
    </>
  );
}
