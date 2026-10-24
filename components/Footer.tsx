import Link from "next/link";
import { site } from "@/data/site";
import BrandIcon from "@/components/BrandIcon";

export default function Footer() {
  return (
    <footer className="mt-20 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto grid max-w-6xl gap-9 px-4 py-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-4 md:py-12">
        <div className="sm:col-span-2">
          <Link href="/" className="inline-flex flex-col rounded-sm">
            <span className="font-bold">{site.name}</span>
            <span lang="ne" className="devanagari-text text-sm muted">
              {site.nameNe}
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm muted">{site.tagline}</p>
          <div
            className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-brand-700 dark:text-brand-200"
            aria-label="Our focus"
          >
            <span>Roots</span>
            <span aria-hidden="true">·</span>
            <span>Language</span>
            <span aria-hidden="true">·</span>
            <span>Heritage</span>
          </div>
        </div>
        <nav aria-label="Footer: explore" className="text-sm">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-2">
            <li>
              <Link href="/about/">About</Link>
            </li>
            <li>
              <Link href="/programs/">Programs</Link>
            </li>
            <li>
              <Link href="/heritage/">Digital Heritage</Link>
            </li>
            <li>
              <Link href="/language/">Dura Language</Link>
            </li>
            <li>
              <Link href="/resources/">Resources</Link>
            </li>
            <li>
              <Link href="/team/">Team & Governance</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer: connect" className="text-sm">
          <p className="eyebrow">Connect</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-2">
            <li>
              <Link
                className="inline-flex items-center gap-2"
                href="/contact/"
              >
                <BrandIcon name="contact" />
                Contact
              </Link>
            </li>
            <li>
              <a className="inline-flex items-center gap-2" href={site.facebook}>
                <BrandIcon name="facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2" href={site.youtube}>
                <BrandIcon name="youtube" />
                YouTube
              </a>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-2"
                href="/heritage/policy/"
              >
                <BrandIcon name="rights-consent" />
                Rights & Consent
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
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
