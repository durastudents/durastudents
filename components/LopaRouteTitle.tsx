"use client";

import { useLopaLanguage } from "@/components/LopaLanguageProvider";

export default function LopaRouteTitle({
  eyebrow,
  titleEn,
  titleNe,
  leadEn,
  leadNe,
}: {
  eyebrow: string;
  titleEn: string;
  titleNe: string;
  leadEn: string;
  leadNe: string;
}) {
  const language = useLopaLanguage();
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-14">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
        {language === "ne" ? <span lang="ne" className="devanagari-display">{titleNe}</span> : titleEn}
      </h1>
      <p className="mt-4 max-w-2xl text-lg muted">
        {language === "ne" ? <span lang="ne" className="devanagari-text">{leadNe}</span> : leadEn}
      </p>
    </section>
  );
}
