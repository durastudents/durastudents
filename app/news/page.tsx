import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import { news } from "@/data/news";
import { site } from "@/data/site";
import BrandIcon from "@/components/BrandIcon";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from Dura Students Society.",
};

export default function News() {
  return (
    <>
      <PageHeader eyebrow="News & stories" title="Updates from the community." />
      <Container>
        {news.length === 0 ? (
          <Notice>
            No posts yet. Announcements and event reports will appear here. In the meantime,
            follow us on{" "}
            <a className="inline-flex items-center gap-1" href={site.facebook}>
              <BrandIcon name="facebook" />
              Facebook
            </a>{" "}
            or{" "}
            <a className="inline-flex items-center gap-1" href={site.youtube}>
              <BrandIcon name="youtube" />
              YouTube
            </a>
            .
          </Notice>
        ) : (
          <ul className="max-w-3xl space-y-6">
            {news.map((p) => (
              <li key={`${p.isoDate}-${p.title}`} className="card">
                <p className="text-xs muted">
                  <time dateTime={p.isoDate}>{p.date}</time>
                </p>
                <h2 className="mt-1 text-xl font-bold">{p.title}</h2>
                <div className="mt-3 space-y-3 text-sm muted">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {p.link && (
                  <p className="mt-4">
                    <a className="btn btn-ghost" href={p.link.href}>{p.link.label}</a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
