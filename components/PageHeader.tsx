import SiteText from "@/components/SiteText";

export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-14">
      {eyebrow && <p className="eyebrow"><SiteText>{eyebrow}</SiteText></p>}
      <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl"><SiteText>{title}</SiteText></h1>
      {lead && <p className="mt-4 max-w-2xl text-lg muted"><SiteText>{lead}</SiteText></p>}
    </section>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>;
}

export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="card border-dashed text-sm muted" role="note">
      {children}
    </div>
  );
}
