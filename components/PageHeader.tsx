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
    <section className="mx-auto max-w-6xl px-4 pb-8 pt-14 md:pb-10 md:pt-20">
      {eyebrow && (
        <p className="eyebrow reveal">
          <SiteText>{eyebrow}</SiteText>
        </p>
      )}
      <h1 className="reveal reveal-delay-1 mt-3 max-w-3xl text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
        <SiteText>{title}</SiteText>
      </h1>
      {lead && (
        <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg leading-relaxed muted md:text-xl">
          <SiteText>{lead}</SiteText>
        </p>
      )}
    </section>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">{children}</div>;
}

export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="card border-dashed text-sm muted" role="note" style={{ boxShadow: "none" }}>
      {children}
    </div>
  );
}
