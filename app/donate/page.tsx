import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";

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
            <h2 className="font-semibold">Donate in Nepal</h2>
            <p className="mt-2 text-sm muted">Bank transfer, eSewa and Khalti details will appear here.</p>
          </div>
          <div className="card">
            <h2 className="font-semibold">International</h2>
            <p className="mt-2 text-sm muted">Bank transfer details for international donors will appear here.</p>
          </div>
        </div>
        <div className="mt-6">
          <Notice>
            Real payment details must be added by the Society treasurer. The earlier site showed a
            sample account number, which was deliberately not copied.
          </Notice>
        </div>
      </Container>
    </>
  );
}
