import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and updates from Dura Students Society.",
};

export default function News() {
  return (
    <>
      <PageHeader eyebrow="News & stories" title="Updates from the community." />
      <Container>
        <Notice>
          No posts yet. Dura Talks episodes and workshop reports will appear here.
        </Notice>
      </Container>
    </>
  );
}
