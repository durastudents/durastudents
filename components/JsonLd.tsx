import { site } from "@/data/site";

const SITE_URL = `https://${site.domain}`;

// Server component: renders one schema.org JSON-LD block. "<" is escaped so page content can
// never close the script tag early.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

// Site-wide Organization and WebSite markup. Rendered once in app/layout.tsx.
// Everything here comes from data/site.ts, so it stays in step with the visible site.
export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: site.name,
            alternateName: [site.nameNe],
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/assets/logo.png`,
            slogan: site.tagline,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dura Sewa Samaj Building",
              addressLocality: "Kathmandu",
              addressCountry: "NP",
            },
            sameAs: [site.facebook, site.youtube],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: site.name,
            inLanguage: ["en", "ne"],
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ],
      }}
    />
  );
}

// One archive photograph. Only fields the archive record really has are emitted.
export function ImageObjectJsonLd(props: {
  id: string;
  name: string;
  description: string;
  imageSrc: string; // site path ("/gallery/x.jpg") or full URL
  pagePath: string; // "/heritage/archive/DHP-PHO-00001/"
  date?: string; // only emitted when it is a valid ISO date or year
  credit?: string;
  rights?: string;
}) {
  const absolute = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);
  const isoDate = props.date && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(props.date) ? props.date : undefined;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ImageObject",
        identifier: props.id,
        name: props.name,
        description: props.description,
        contentUrl: absolute(props.imageSrc),
        url: `${SITE_URL}${props.pagePath}`,
        ...(isoDate ? { dateCreated: isoDate } : {}),
        ...(props.credit ? { creditText: props.credit } : {}),
        ...(props.rights ? { copyrightNotice: props.rights } : {}),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      }}
    />
  );
}
