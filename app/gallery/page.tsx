import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import GalleryCard from "@/components/GalleryCard";
import UnderConstructionNotice from "@/components/UnderConstructionNotice";
import { galleryItems } from "@/data/archive";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Community Gallery",
  description:
    "Photographs and videos that share moments, people, and connections from Dura Students Society.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dura Students Society · Gallery"
        title="Community moments."
        lead="Stories in photographs and video, shared with care for the people, places, and knowledge they hold."
      />
      <Container>
        <UnderConstructionNotice />
        {galleryItems.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <Notice>
            <SiteText>We are preparing the community gallery. Approved photographs and videos will appear here as they are reviewed and added.</SiteText>{" "}
            <Link className="text-accent underline underline-offset-4" href="/contact/">
              <SiteText>Contact the Society</SiteText>
            </Link>{" "}
            <SiteText>to ask about sharing a story.</SiteText>
          </Notice>
        )}
        <p className="mt-8 text-sm muted">
          <SiteText>Each item includes its archive record and access information. See</SiteText>{" "}
          <Link className="text-accent underline underline-offset-4" href="/heritage/policy/">
            <SiteText>rights, consent and access</SiteText>
          </Link>
          . <SiteText>Contact Dura Students Society to request a correction, restriction, or removal.</SiteText>
        </p>
      </Container>
    </>
  );
}
