import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the work of Dura Students Society. Donation details will be published once confirmed by the committee.",
};

export default function Donate() {
  return (
    <>
      <PageHeader
        eyebrow="Support our work"
        title="Help run classes, document stories and publish resources."
      />
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card">
            <h2 className="font-semibold"><SiteText>Donate in Nepal</SiteText></h2>
            <p className="mt-2 text-sm muted"><SiteText>Bank transfer, eSewa and Khalti details will appear here.</SiteText></p>
          </div>
          <div className="card">
            <h2 className="font-semibold"><SiteText>International</SiteText></h2>
            <p className="mt-2 text-sm muted"><SiteText>Bank transfer details for international donors will appear here.</SiteText></p>
          </div>
        </div>
        <div className="mt-6">
          <Notice>
            <SiteText>Real payment details must be added by the Society treasurer. The earlier site showed a sample account number, which was deliberately not copied.</SiteText>
          </Notice>
        </div>
      </Container>
    </>
  );
}
