import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import UnderConstructionNotice from "@/components/UnderConstructionNotice";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Resources and publications",
  description:
    "Approved documents, reports and publications from Dura Students Society and the Dura Digital Heritage Project.",
};

type ResourceCategory = "society" | "reports" | "programs";

type Resource = {
  title: string;
  description: string;
  category: ResourceCategory;
  href?: string;
  year?: number;
  language: string;
  format: string;
  fileSize: string;
  attribution?: string;
  demo?: boolean;
};

const categories: { id: ResourceCategory; title: string }[] = [
  { id: "society", title: "Society and governance" },
  { id: "reports", title: "Reports and publications" },
  { id: "programs", title: "Programs and learning" },
];

// Demo entries show the intended layout; replace them only with approved files.
const resources: Resource[] = [
  {
    title: "Demo: Society constitution",
    description: "Example listing for an approved Society governance document.",
    category: "society",
    language: "English (example)",
    format: "PDF (example)",
    fileSize: "Example only",
    demo: true,
  },
  {
    title: "Demo: Annual report",
    description: "Example listing for a Society report with publication details.",
    category: "reports",
    language: "English (example)",
    format: "PDF (example)",
    fileSize: "Example only",
    demo: true,
  },
  {
    title: "Demo: Program guide",
    description: "Example listing for an approved guide or event resource.",
    category: "programs",
    language: "English (example)",
    format: "PDF (example)",
    fileSize: "Example only",
    demo: true,
  },
];

export default function Resources() {
  const populatedCategories = categories
    .map((category) => ({
      ...category,
      resources: resources.filter((resource) => resource.category === category.id),
    }))
    .filter((category) => category.resources.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Resources & publications"
        title="Documents and learning materials."
        lead="Find approved Society documents, reports and publications. Dura language books and learning materials are available in the Dura Lopa collection."
      />
      <Container>
        <UnderConstructionNotice />
        {populatedCategories.length === 0 ? (
          <Notice>
            <SiteText>No Society documents are available here yet. We will add resources after their sources and publication permissions have been reviewed.</SiteText>
          </Notice>
        ) : (
          <div className="space-y-12">
            {populatedCategories.map((category) => (
              <section key={category.id} aria-labelledby={`resources-${category.id}`}>
                <h2
                  id={`resources-${category.id}`}
                  className="mb-5 text-2xl font-bold tracking-tight"
                >
                  <SiteText>{category.title}</SiteText>
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {category.resources.map((resource) => (
                    <li key={resource.title} className="card p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold"><SiteText>{resource.title}</SiteText></h3>
                        {resource.demo && (
                          <span className="rounded-full border border-current px-2 py-0.5 text-xs muted">
                            <SiteText>Demo only</SiteText>
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm muted"><SiteText>{resource.description}</SiteText></p>
                      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                        {resource.year !== undefined && (
                          <>
                            <dt className="muted"><SiteText>Published</SiteText></dt>
                            <dd>{resource.year}</dd>
                          </>
                        )}
                        <dt className="muted"><SiteText>Language</SiteText></dt>
                        <dd>{resource.language}</dd>
                        <dt className="muted"><SiteText>Format</SiteText></dt>
                        <dd>{resource.format}</dd>
                        <dt className="muted"><SiteText>File size</SiteText></dt>
                        <dd>{resource.fileSize}</dd>
                        {resource.attribution && (
                          <>
                            <dt className="muted"><SiteText>Attribution</SiteText></dt>
                            <dd>{resource.attribution}</dd>
                          </>
                        )}
                      </dl>
                      {resource.href ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          <a
                            className="btn btn-primary"
                            href={resource.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <SiteText>View</SiteText> {resource.format}
                          </a>
                          <a className="btn btn-ghost" href={resource.href} download>
                            <SiteText>Download</SiteText>
                          </a>
                        </div>
                      ) : (
                        <p className="mt-5 text-sm muted">
                          <SiteText>Sample listing only; no document is available.</SiteText>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <aside className="card mt-8 p-5" aria-labelledby="resource-help">
          <h2 id="resource-help" className="font-semibold">
            <SiteText>Need help with a resource?</SiteText>
          </h2>
          <p className="mt-2 text-sm muted">
            <SiteText>Contact the Society to report an inaccessible file or request a correction.</SiteText>
          </p>
          <Link className="btn btn-ghost mt-4" href="/contact/">
            <SiteText>Contact the Society</SiteText>
          </Link>
        </aside>

        <p className="mt-8 text-sm muted">
          <SiteText>Looking for Dura language books and learning materials?</SiteText>{" "}
          <Link className="text-accent" href="/language/sources/">
            <SiteText>Browse the Dura Lopa collection</SiteText>
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
