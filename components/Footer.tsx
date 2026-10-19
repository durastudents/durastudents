import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-bold">{site.name}</p>
          <p className="mt-2 max-w-md text-sm muted">
            Connecting Dura youth, strengthening community identity, preserving language and
            culture, and building a community-owned digital heritage.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/heritage/">Digital Heritage</Link></li>
            <li><Link href="/language/">Dura Language</Link></li>
            <li><Link href="/resources/">Resources</Link></li>
            <li><Link href="/impact/">Impact</Link></li>
            <li><Link href="/team/">Team & Governance</Link></li>
            <li><Link href="/heritage/policy/">Rights & Consent</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Connect</p>
          <ul className="mt-3 space-y-2">
            <li><a href={site.facebook}>Facebook</a></li>
            <li><a href={site.youtube}>YouTube</a></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t py-5 text-center text-xs muted" style={{ borderColor: "var(--line)" }}>
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </p>
    </footer>
  );
}
