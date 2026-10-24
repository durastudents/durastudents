import type { Metadata } from "next";
import PageHeader, { Container, Notice } from "@/components/PageHeader";
import { news } from "@/data/news";
import { site } from "@/data/site";
import BrandIcon from "@/components/BrandIcon";
import UnderConstructionNotice from "@/components/UnderConstructionNotice";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from Dura Students Society.",
};

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="News & stories"
        title="Updates from the community."
        lead="Announcements, event reports, and stories about Dura people, language, and heritage."
      />
      <Container>
        <UnderConstructionNotice />
        {news.length === 0 ? (
          <Notice>
            <SiteText>No posts yet. Announcements and event reports will appear here. In the meantime, follow us on</SiteText>{" "}
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
              <li key={`${p.isoDate}-${p.title}`}>
                <article className="card">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full border px-2 py-1 font-semibold"><SiteText>{p.category}</SiteText></span>
                    <time className="muted" dateTime={p.isoDate}>{p.date}</time>
                  </div>
                  <h2 className="mt-3 text-xl font-bold"><SiteText>{p.title}</SiteText></h2>
                  <div className="mt-3 space-y-3 text-sm muted">
                    {p.body.map((para, i) => (
                      <p key={i}><SiteText>{para}</SiteText></p>
                    ))}
                  </div>
                  {p.link && (
                    <p className="mt-4">
                      <a className="btn btn-ghost" href={p.link.href}><SiteText>{p.link.label}</SiteText></a>
                    </p>
                  )}
                  {p.sources && (
                    <div className="mt-4 border-t pt-3 text-sm">
                      <p className="font-semibold"><SiteText>Background sources</SiteText></p>
                      <ul className="mt-1 list-inside list-disc">
                        {p.sources.map((source) => (
                          <li key={source.href}>
                            <a
                              className="text-accent hover:underline underline-offset-4"
                              href={source.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
