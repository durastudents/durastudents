import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-bold">{site.name}</span>
            <span className="block text-xs muted">{site.nameNe}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-500">
              {n.label}
            </Link>
          ))}
          <Link href="/donate/" className="btn btn-primary">
            Donate
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="btn btn-ghost cursor-pointer list-none">Menu</summary>
          <div className="card absolute right-0 mt-2 flex w-56 flex-col gap-3 !p-4 text-sm">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/donate/" className="btn btn-primary justify-center">
              Donate
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
