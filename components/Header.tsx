"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, site } from "@/data/site";
import { SiteLanguageToggle, useSiteLanguage } from "@/components/SiteLanguageProvider";
import { translateSiteText } from "@/components/SiteText";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const language = useSiteLanguage();
  const text = (value: string) => translateSiteText(language, value);

  useEffect(() => {
    if (mobileMenu.current) mobileMenu.current.open = false;
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-sm"
      style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="leading-tight">
            <span className="block text-sm font-bold">{site.name}</span>
            <span lang="ne" className="devanagari-text block text-xs muted">{site.nameNe}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label={text("Main")}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-accent">
              {text(n.label)}
            </Link>
          ))}
          <Link href="/search/" aria-label={text("Search the site")} title={text("Search")} className="btn btn-ghost px-3!">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <SiteLanguageToggle />
          <ThemeToggle />
          <Link href="/donate/" className="btn btn-primary">
            {text("Donate")}
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/search/"
            aria-label={text("Search the site")}
            title={text("Search")}
            className="btn btn-ghost px-3!"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <SiteLanguageToggle />
          <ThemeToggle />
          <details ref={mobileMenu} className="relative">
            <summary className="btn btn-ghost cursor-pointer list-none">{text("Menu")}</summary>
            <div className="card absolute right-0 mt-2 flex w-56 flex-col gap-3 p-4! text-sm">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {text(n.label)}
                </Link>
              ))}
              <Link href="/donate/" className="btn btn-primary justify-center">
                {text("Donate")}
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
