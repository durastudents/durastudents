"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { UiLanguage } from "@/data/lopa/types";

const LanguageContext = createContext<UiLanguage>("ne");
const STORAGE_KEY = "lopa-language";
const listeners = new Set<() => void>();
let currentLanguage: UiLanguage | undefined;

function getLanguageSnapshot(): UiLanguage {
  if (currentLanguage) return currentLanguage;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ne") return saved;
  } catch (error) {
    console.error("Unable to read the saved Dura Lopa interface language", error);
  }

  return "ne";
}

function getServerLanguageSnapshot(): UiLanguage {
  return "ne";
}

function subscribeToLanguage(callback: () => void) {
  listeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
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

export function LopaLanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  function toggleLanguage() {
    const next = language === "ne" ? "en" : "ne";
    currentLanguage = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      console.error("Unable to save the Dura Lopa interface language", error);
    }
    listeners.forEach((listener) => listener());
  }

  return (
    <LanguageContext.Provider value={language}>
      {children}
      <button
        type="button"
        onClick={toggleLanguage}
        className="fixed bottom-4 right-4 z-40 rounded-full border px-4 py-2 text-sm font-semibold shadow-lg"
        style={{ background: "var(--card)", borderColor: "var(--line)", color: "var(--fg)" }}
        aria-label={language === "ne" ? "Switch interface language to English" : "नेपाली भाषामा बदल्नुहोस्"}
      >
        {language === "ne" ? "English" : "नेपाली"}
      </button>
    </LanguageContext.Provider>
  );
}

export function useLopaLanguage() {
  return useContext(LanguageContext);
}
