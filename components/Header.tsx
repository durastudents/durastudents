"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, site } from "@/data/site";
import { SiteLanguageToggle, useSiteLanguage } from "@/components/SiteLanguageProvider";
import { translateSiteText } from "@/components/SiteText";
import ThemeToggle from "./ThemeToggle";

function SearchIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function isCurrent(pathname: string, href: string) {
  const base = href.replace(/\/$/, "");
  return pathname === base || pathname === href || pathname.startsWith(`${base}/`);
}

export default function Header() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const language = useSiteLanguage();
  const text = (value: string) => translateSiteText(language, value);

  // Close the mobile menu on navigation, on Escape, and on outside click.
  useEffect(() => {
    if (mobileMenu.current) mobileMenu.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const menu = mobileMenu.current;
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-md"
      style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--bg) 86%, transparent)", minHeight: "var(--header-h)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-bold">{site.name}</span>
            <span lang="ne" className="devanagari-text block text-xs muted">{site.nameNe}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label={text("Main")}>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="nav-link"
              aria-current={isCurrent(pathname, n.href) ? "page" : undefined}
            >
              {text(n.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/search/"
            aria-label={text("Search the site")}
            title={text("Search")}
            className="btn btn-ghost hidden px-3! sm:inline-flex"
          >
            <SearchIcon />
          </Link>
          <span className="hidden sm:inline-flex">
            <SiteLanguageToggle />
          </span>
          <ThemeToggle />
          <Link href="/donate/" className="btn btn-primary hidden lg:inline-flex">
            {text("Donate")}
          </Link>

          <details ref={mobileMenu} className="relative lg:hidden">
            <summary className="btn btn-ghost list-none" aria-label={text("Menu")}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <span className="hidden sm:inline">{text("Menu")}</span>
            </summary>
            <nav
              aria-label={text("Main")}
              className="card absolute right-0 mt-2 flex w-64 flex-col gap-1 p-2! text-sm"
              style={{ boxShadow: "var(--shadow-lift)" }}
            >
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isCurrent(pathname, n.href) ? "page" : undefined}
                  className="flex min-h-11 cursor-pointer items-center rounded-lg px-3 font-medium hover:bg-brand-50 aria-[current=page]:font-semibold aria-[current=page]:text-accent dark:hover:bg-brand-900"
                  style={isCurrent(pathname, n.href) ? { background: "var(--accent-soft)" } : undefined}
                >
                  {text(n.label)}
                </Link>
              ))}
              <div className="mt-1 flex items-center gap-2 border-t pt-2 sm:hidden" style={{ borderColor: "var(--line)" }}>
                <Link href="/search/" className="btn btn-ghost flex-1">
                  <SearchIcon />
                  {text("Search")}
                </Link>
                <SiteLanguageToggle />
              </div>
              <Link href="/donate/" className="btn btn-primary mt-1">
                {text("Donate")}
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
