"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { translateSiteText } from "@/components/SiteText";

declare global {
  interface Window {
    PagefindUI?: new (options: Record<string, unknown>) => unknown;
  }
}

// Pagefind builds its index from the finished HTML during `npm run build`, so search
// works on the static site with no server. In `npm run dev` there is no index yet.
export default function SearchBox() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const language = useSiteLanguage();
  const text = useCallback((value: string) => translateSiteText(language, value), [language]);

  useEffect(() => {
    const hostElement = host.current;
    hostElement?.replaceChildren();
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/pagefind/pagefind-ui.css";
    css.dataset.pagefindUi = "true";
    document.head.appendChild(css);

    const initialize = () => {
      if (!hostElement || !window.PagefindUI) return setFailed(true);
      new window.PagefindUI({
        element: hostElement,
        showSubResults: true,
        showImages: false,
        resetStyles: false,
        autofocus: true,
        translations: language === "ne"
          ? {
              placeholder: "पृष्ठ खोज्नुहोस्",
              zero_results: "[SEARCH_TERM] का लागि कुनै नतिजा भेटिएन",
              many_results: "[COUNT] नतिजा [SEARCH_TERM] का लागि",
              one_result: "[COUNT] नतिजा [SEARCH_TERM] का लागि",
              alt_search: "[SEARCH_TERM] का लागि [COUNT] पृष्ठमा खोज्नुहोस्",
              searching: "खोज्दैछ…",
              clear_search: "खोजी हटाउनुहोस्",
              load_more: "थप नतिजा देखाउनुहोस्",
            }
          : undefined,
      });
      const label = () => hostElement.querySelector("input")?.setAttribute("aria-label", text("Search the site"));
      label();
      requestAnimationFrame(label);
    };

    const script = document.createElement("script");
    script.src = "/pagefind/pagefind-ui.js";
    script.onload = initialize;
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);

    return () => {
      css.remove();
      script.remove();
      hostElement?.replaceChildren();
    };
  }, [language, text]);

  return (
    <>
      <div ref={host} />
      {failed && (
        <p className="text-sm muted" role="status">
          {text("Search is only available on the published site. Run npm run build and npm start to try it locally.")}
        </p>
      )}
    </>
  );
}
