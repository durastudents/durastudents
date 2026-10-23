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
        {text.search}
      </label>
      <input
        id="lopa-sentence-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={text.placeholder}
        className="w-full rounded-xl border bg-(--card) px-4 py-3"
        style={{ borderColor: "var(--line)", color: "var(--fg)" }}
      />
      <p className="mt-3 text-sm muted" role="status" aria-live="polite">
        {results.length} {text.count}
      </p>
      {results.length === 0 ? (
        <p className="card mt-4 text-sm muted">{text.empty}</p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {results.map((sentence, index) => (
            <li key={`${sentence.dura}-${index}`} className="card">
              <p className="text-lg font-semibold">{sentence.dura}</p>
              <p className="mt-2 text-sm muted">{sentence.nepali}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
