"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { UiLanguage } from "@/data/lopa/types";

const LanguageContext = createContext<UiLanguage>("en");
const STORAGE_KEY = "site-language";
const LEGACY_STORAGE_KEY = "lopa-language";
const listeners = new Set<() => void>();
let currentLanguage: UiLanguage | undefined;

function getLanguageSnapshot(): UiLanguage {
  if (currentLanguage) return currentLanguage;

  try {
    const saved = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_STORAGE_KEY);
    if (saved === "en" || saved === "ne") return saved;
  } catch (error) {
    console.error("Unable to read the saved site interface language", error);
  }

  return "en";
}

function getServerLanguageSnapshot(): UiLanguage {
  return "en";
}

function subscribeToLanguage(callback: () => void) {
  listeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === LEGACY_STORAGE_KEY || event.key === null) {
      currentLanguage = undefined;
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function SiteLanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

export function SiteLanguageToggle() {
  const language = useSiteLanguage();

  function toggleLanguage() {
    const next = language === "ne" ? "en" : "ne";
    currentLanguage = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      console.error("Unable to save the site interface language", error);
    }
    listeners.forEach((listener) => listener());
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "ne" ? "अंग्रेजी भाषामा बदल्नुहोस्" : "नेपाली भाषामा बदल्नुहोस्"}
      className="btn btn-ghost px-3!"
    >
      {language === "ne" ? "English" : <span lang="ne" className="devanagari-text">नेपाली</span>}
    </button>
  );
}

export function useSiteLanguage() {
  return useContext(LanguageContext);
}
