"use client";

import { useMemo, useState } from "react";
import type { LopaSentence } from "@/data/lopa/types";
import { useLopaLanguage } from "@/components/LopaLanguageProvider";

const copy = {
  en: {
    search: "Search in Dura or Nepali",
    placeholder: "Type a word or phrase",
    count: "sentences",
    empty: "No sentences match your search.",
  },
  ne: {
    search: "दुरा वा नेपालीमा खोज्नुहोस्",
    placeholder: "शब्द वा वाक्यांश लेख्नुहोस्",
    count: "वाक्य",
    empty: "तपाईंको खोजीसँग मिल्ने वाक्य भेटिएन।",
  },
};

function normalize(value: string) {
  return value.normalize("NFC").trim().toLocaleLowerCase();
}

export default function LopaSentencesExplorer({ sentences }: { sentences: LopaSentence[] }) {
  const language = useLopaLanguage();
  const text = copy[language];
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = normalize(query);
    if (!term) return sentences;
    return sentences.filter((sentence) =>
      [sentence.dura, sentence.nepali].some((value) => normalize(value).includes(term)),
    );
  }, [query, sentences]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <label htmlFor="lopa-sentence-search" className="mb-2 block text-sm font-semibold">
        <span lang={language} className={language === "ne" ? "devanagari-text" : ""}>{text.search}</span>
      </label>
      <input
        id="lopa-sentence-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={text.placeholder}
        lang={language}
        className={`w-full rounded-xl border bg-(--card) px-4 py-3 ${language === "ne" ? "devanagari-text" : ""}`}
        style={{ borderColor: "var(--line)", color: "var(--fg)" }}
      />
      <p className="mt-3 text-sm muted" role="status" aria-live="polite">
        {results.length} <span lang={language} className={language === "ne" ? "devanagari-text" : ""}>{text.count}</span>
      </p>
      {results.length === 0 ? (
        <p lang={language} className={`card mt-4 text-sm muted ${language === "ne" ? "devanagari-text" : ""}`}>{text.empty}</p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {results.map((sentence, index) => (
            <li key={`${sentence.dura}-${index}`} className="card">
              <p lang="drq" className="devanagari-display text-lg font-semibold">{sentence.dura}</p>
              <p lang="ne" className="devanagari-text mt-2 text-sm muted">{sentence.nepali}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
