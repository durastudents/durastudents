"use client";

import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "/pagefind/pagefind-ui.css";
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = "/pagefind/pagefind-ui.js";
    script.onload = () => {
      if (!host.current || !window.PagefindUI) return setFailed(true);
      new window.PagefindUI({
        element: host.current,
        showSubResults: true,
        showImages: false,
        resetStyles: false,
        autofocus: true,
      });
      // Pagefind's input only has a placeholder; give it a real accessible name.
      const label = () =>
        host.current?.querySelector("input")?.setAttribute("aria-label", "Search the site");
      label();
      requestAnimationFrame(label);
    };
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);

    return () => {
      css.remove();
      script.remove();
    };
  }, []);

  return (
    <>
      <div ref={host} />
      {failed && (
        <p className="text-sm muted" role="status">
          Search is only available on the published site. Run <code>npm run build</code> and{" "}
          <code>npm start</code> to try it locally.
        </p>
      )}
    </>
  );
}
