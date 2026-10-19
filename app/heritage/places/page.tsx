import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import PlacesExplorer from "@/components/PlacesExplorer";
import { places } from "@/data/places";

export const metadata: Metadata = { title: "Dura Places" };

export default function Places() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage · Places"
        title="Mapping Dura residences across the globe."
        lead="Where Dura communities live in Nepal and abroad. Each place will grow to carry its Dura name, meaning, stories, photographs and sources."
      />
      <Container>
        <PlacesExplorer places={places} />
        <div className="mt-6">
          <Notice>
            Draft data: these six pins have not yet been verified by the community, so each is
            marked “Unknown”. Place names (गाउँको नाम), Dura names and meanings will be added as
            they are documented.
          </Notice>
        </div>
      </Container>
    </>
  );
}
