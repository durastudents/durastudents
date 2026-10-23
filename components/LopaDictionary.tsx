"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { DictionaryEntry, UiLanguage } from "@/data/lopa/types";
import { useLopaLanguage } from "@/components/LopaLanguageProvider";

const PAGE_SIZE = 50;

const labels: Record<UiLanguage, Record<string, string>> = {
  en: {
    search: "Search Dura, Nepali, English or IPA",
    placeholder: "Type a word or meaning",
    loading: "Loading the dictionary…",
    retry: "Try again",
    results: "matching words",
    noResults: "No words match your search.",
    choose: "Select a word to see its details.",
    missing: "This word could not be found. Search the dictionary to continue.",
    more: "Show more",
    ipa: "IPA",
    nepali: "Nepali",
    nepaliPos: "Nepali part of speech",
    english: "English",
    englishPos: "English part of speech",
    unavailable: "Not recorded",
    failed: "The dictionary could not be loaded.",
    dictionaryLinks: "More Dura Lopa",
    sentences: "Explore bilingual sentences",
    sources: "Books and learning resources",
    timelines: "Language timelines",
  },
  ne: {
    search: "दुरा, नेपाली, अंग्रेजी वा IPA बाट खोज्नुहोस्",
    placeholder: "शब्द वा अर्थ लेख्नुहोस्",
    loading: "शब्दकोश खुल्दैछ…",
    retry: "फेरि प्रयास गर्नुहोस्",
    results: "वटा शब्द भेटिए",
    noResults: "तपाईंको खोजीसँग मिल्ने शब्द भेटिएन।",
    choose: "विवरण हेर्न कुनै शब्द छान्नुहोस्।",
    missing: "यो शब्द भेटिएन। जारी राख्न शब्दकोशमा खोज्नुहोस्।",
    more: "थप शब्द देखाउनुहोस्",
    ipa: "उच्चारण (IPA)",
    nepali: "नेपाली अर्थ",
    nepaliPos: "नेपाली शब्द वर्ग",
    english: "अंग्रेजी अर्थ",
    englishPos: "अंग्रेजी शब्द वर्ग",
    unavailable: "उपलब्ध छैन",
    failed: "शब्दकोश लोड हुन सकेन।",
    dictionaryLinks: "थप दुरा लोपा",
    sentences: "द्विभाषिक वाक्यहरू",
    sources: "पुस्तक तथा सिकाइ सामग्री",
    timelines: "भाषा संरक्षणका समयरेखा",
  },
};

function normalize(value: string) {
  return value.normalize("NFC").trim().toLocaleLowerCase();
}

function isDictionary(value: unknown): value is DictionaryEntry[] {
  return (
    Array.isArray(value) &&
    value.every(
      (entry) =>
        entry &&
        Number.isSafeInteger(entry.id) &&
        typeof entry.dura === "string" &&
        ["ipa", "nepali", "nepaliPos", "english", "englishPos"].every(
          (field) => entry[field] === undefined || typeof entry[field] === "string",
        ),
    )
  );
}

export default function LopaDictionary() {
  const language = useLopaLanguage();
  const text = labels[language];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("word");
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/lopa/data/dictionary.json", { signal: controller.signal, cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error(`Dictionary request failed (${response.status})`);
        return response.json() as Promise<unknown>;
      })
      .then((data) => {
        if (!isDictionary(data)) throw new Error("The dictionary data format is invalid");
        setEntries(data);
      })
      .catch((cause: unknown) => {
        if (cause instanceof DOMException && cause.name === "AbortError") return;
        console.error("Unable to load Dura Lopa dictionary", cause);
        setError(true);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [retry]);

  const results = useMemo(() => {
    const term = normalize(query);
    if (!term) return entries;
    return entries.filter((entry) =>
      [entry.dura, entry.ipa, entry.nepali, entry.english]
        .filter((value): value is string => typeof value === "string")
        .some((value) => normalize(value).includes(term)),
    );
  }, [entries, query]);

  const selectWord = useCallback(
    (id: number) => {
      const next = new URLSearchParams(searchParams.toString());
      next.set("word", String(id));
      router.push(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const selected = selectedId ? entries.find((entry) => String(entry.id) === selectedId) : undefined;
  const selectedMissing = Boolean(selectedId && !loading && !error && !selected);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12" aria-label={text.dictionaryLinks}>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)]">
        <div className="min-w-0">
          <label htmlFor="lopa-dictionary-search" className="mb-2 block text-sm font-semibold">
            {text.search}
          </label>
          <input
            id="lopa-dictionary-search"
            type="search"
            value={query}
            onChange={(event) => {
              setLimit(PAGE_SIZE);
              setQuery(event.target.value);
            }}
            placeholder={text.placeholder}
            className="w-full rounded-xl border bg-(--card) px-4 py-3"
            style={{ borderColor: "var(--line)", color: "var(--fg)" }}
          />

          {loading && <p className="mt-4 muted" role="status">{text.loading}</p>}
          {error && (
            <div className="card mt-4" role="alert">
              <p>{text.failed}</p>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={() => {
                  setLoading(true);
                  setError(false);
                  setRetry((n) => n + 1);
                }}
              >
                {text.retry}
              </button>
            </div>
          )}
          {!loading && !error && (
            <>
              <p className="mt-3 text-sm muted" role="status" aria-live="polite">
                {results.length} {text.results}
              </p>
              {results.length === 0 ? (
                <p className="card mt-3 text-sm muted">{text.noResults}</p>
              ) : (
                <ul className="mt-3 max-h-[65vh] space-y-2 overflow-y-auto pr-1">
                  {results.slice(0, limit).map((entry) => (
                    <li key={entry.id}>
                      <button
                        type="button"
                        aria-current={selectedId === String(entry.id) ? "true" : undefined}
                        onClick={() => selectWord(entry.id)}
                        className={`card w-full text-left p-4! hover:border-brand-500 ${
                          selectedId === String(entry.id) ? "border-brand-500" : ""
                        }`}
                      >
                        <span className="block text-xl font-semibold">{entry.dura}</span>
                        {entry.ipa && <span className="block text-sm muted">/{entry.ipa}/</span>}
                        <span className="mt-1 block text-sm">{entry.nepali || entry.english}</span>
                        {entry.english && <span className="mt-1 block text-sm muted">{entry.english}</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {results.length > limit && (
                <button type="button" className="btn btn-ghost mt-3" onClick={() => setLimit((n) => n + PAGE_SIZE)}>
                  {text.more} ({results.length - limit})
                </button>
              )}
            </>
          )}
        </div>

        <aside className="order-first md:order-last" aria-label={text.dictionaryLinks}>
          {selected ? (
            <div className="card sticky top-24">
              <h2 className="text-3xl font-bold">{selected.dura}</h2>
              <dl className="mt-5 grid gap-x-4 gap-y-3 text-sm sm:grid-cols-[9rem_1fr]">
                {([
                  [text.ipa, selected.ipa],
                  [text.nepali, selected.nepali],
                  [text.nepaliPos, selected.nepaliPos],
                  [text.english, selected.english],
                  [text.englishPos, selected.englishPos],
                ] as const).map(([label, value]) =>
                  value ? (
                    <div key={label} className="contents">
                      <dt className="font-semibold">{label}</dt>
                      <dd className="muted">{value}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
              <p className="mt-5 text-xs muted">ID: {selected.id}</p>
            </div>
          ) : (
            <div className="card sticky top-24 text-sm muted">
              {selectedMissing ? text.missing : text.choose}
            </div>
          )}
          <nav className="mt-4 grid gap-2 text-sm" aria-label={text.dictionaryLinks}>
            <a className="text-accent underline underline-offset-4" href="/language/sentences/">{text.sentences}</a>
            <a className="text-accent underline underline-offset-4" href="/language/sources/">{text.sources}</a>
            <a className="text-accent underline underline-offset-4" href="/language/timelines/">{text.timelines}</a>
          </nav>
        </aside>
      </div>
    </section>
  );
}
