"use client";

import Link from "next/link";
import { site } from "@/data/site";
import BrandIcon from "@/components/BrandIcon";
import SiteText, { translateSiteText } from "@/components/SiteText";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";

export default function Footer() {
  const language = useSiteLanguage();
  const text = (value: string) => translateSiteText(language, value);

  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--accent-soft) 55%, var(--bg))" }}>
      <div className="mx-auto grid max-w-6xl gap-9 px-4 py-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-4 md:py-12">
        <div className="sm:col-span-2">
          <Link href="/" className="inline-flex min-h-11 flex-col justify-center rounded-sm">
            <span className="font-display text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{site.name}</span>
            <span lang="ne" className="devanagari-text text-sm muted">
              {site.nameNe}
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm muted"><SiteText>{site.tagline}</SiteText></p>
          <div
            className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-200"
            aria-label={text("Our focus")}
          >
            <span><SiteText>Roots</SiteText></span>
            <span aria-hidden="true">·</span>
            <span><SiteText>Language</SiteText></span>
            <span aria-hidden="true">·</span>
            <span><SiteText>Heritage</SiteText></span>
          </div>
        </div>
        <nav aria-label={text("Footer: explore")} className="text-sm">
          <p className="eyebrow"><SiteText>Explore</SiteText></p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-2">
            <li>
              <Link className="footer-link" href="/about/"><SiteText>About</SiteText></Link>
            </li>
            <li>
              <Link className="footer-link" href="/programs/"><SiteText>Programs</SiteText></Link>
            </li>
            <li>
              <Link className="footer-link" href="/heritage/"><SiteText>Digital Heritage</SiteText></Link>
            </li>
            <li>
              <Link className="footer-link" href="/language/"><SiteText>Dura Language</SiteText></Link>
            </li>
            <li>
              <Link className="footer-link" href="/resources/"><SiteText>Resources</SiteText></Link>
            </li>
            <li>
              <Link className="footer-link" href="/team/"><SiteText>Team & Governance</SiteText></Link>
            </li>
          </ul>
        </nav>
        <nav aria-label={text("Footer: connect")} className="text-sm">
          <p className="eyebrow"><SiteText>Connect</SiteText></p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-2">
            <li>
              <Link
                className="footer-link inline-flex items-center gap-2"
                href="/contact/"
              >
                <BrandIcon name="contact" />
                <SiteText>Contact</SiteText>
              </Link>
            </li>
            <li>
              <a className="footer-link inline-flex items-center gap-2" href={site.facebook}>
                <BrandIcon name="facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a className="footer-link inline-flex items-center gap-2" href={site.youtube}>
                <BrandIcon name="youtube" />
                YouTube
              </a>
            </li>
            <li>
              <Link
                className="footer-link inline-flex items-center gap-2"
                href="/heritage/policy/"
              >
                <BrandIcon name="rights-consent" />
                <SiteText>Rights & Consent</SiteText>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--card)" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </p>
          <a href="#main" className="w-fit hover:underline underline-offset-4">
            <SiteText>Back to top ↑</SiteText>
          </a>
        </div>
      </div>
    </footer>
  );
}
