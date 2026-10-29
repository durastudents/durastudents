"use client";

import { useCallback, useEffect, useReducer, useState } from "react";
import { puraneyColoringPaths } from "@/data/puraney";

const REGION_COUNT = puraneyColoringPaths.length;
const STORAGE_KEY = "ddhp-puraney-coloring-v2";
const EMPTY_COLOR = "#ffffff";
const HISTORY_LIMIT = 50;
const PNG_EXPORT_SIZE = 1600;

const palette = [
  { name: "Charcoal", value: "#26312b" },
  { name: "Forest", value: "#315c43" },
  { name: "Leaf", value: "#76a66a" },
  { name: "River", value: "#57899a" },
  { name: "Sky", value: "#9bc5d0" },
  { name: "Clay", value: "#bd765a" },
  { name: "Sun", value: "#e5b54f" },
  { name: "Blossom", value: "#c27b98" },
];

type ColoringState = {
  fills: string[];
  past: string[][];
  future: string[][];
  message: string;
};

type CopiesPerSheet = 1 | 2 | 4 | 6;

type ColoringAction =
  | { type: "hydrate"; fills: string[] }
  | { type: "color"; index: number; color: string }
  | { type: "color-all"; color: string }
  | { type: "reset" }
  | { type: "undo" }
  | { type: "redo" }
  | { type: "message"; message: string };

const initialState: ColoringState = {
  fills: Array.from({ length: REGION_COUNT }, () => EMPTY_COLOR),
  past: [],
  future: [],
  message: "",
};

function saveChange(state: ColoringState, fills: string[]): ColoringState {
  if (fills.every((fill, index) => fill === state.fills[index])) return state;

  return {
    ...state,
    fills,
    past: [...state.past, state.fills].slice(-HISTORY_LIMIT),
    future: [],
    message: "",
  };
}

function coloringReducer(state: ColoringState, action: ColoringAction): ColoringState {
  switch (action.type) {
    case "hydrate":
      return { ...state, fills: action.fills };
    case "message":
      return { ...state, message: action.message };
    case "color": {
      if (action.index < 0 || action.index >= state.fills.length) return state;
      const fills = [...state.fills];
      fills[action.index] = action.color;
      return saveChange(state, fills);
    }
    case "color-all":
      return saveChange(
        state,
        state.fills.map(() => action.color),
      );
    case "reset":
      return saveChange(
        state,
        state.fills.map(() => EMPTY_COLOR),
      );
    case "undo": {
      const previous = state.past.at(-1);
      if (!previous) return state;
      return {
        ...state,
        fills: previous,
        past: state.past.slice(0, -1),
        future: [state.fills, ...state.future].slice(0, HISTORY_LIMIT),
        message: "",
      };
    }
    case "redo": {
      const next = state.future[0];
      if (!next) return state;
      return {
        ...state,
        fills: next,
        past: [...state.past, state.fills].slice(-HISTORY_LIMIT),
        future: state.future.slice(1),
        message: "",
      };
    }
  }
}

function isColor(value: unknown): value is string {
  return typeof value === "string" && /^#[\da-f]{6}$/i.test(value);
}

function isCopiesPerSheet(value: number): value is CopiesPerSheet {
  return value === 1 || value === 2 || value === 4 || value === 6;
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

type PuraneySvgProps = {
  id: string;
  fills: string[];
  interactive?: boolean;
  onColorRegion?: (index: number) => void;
};

function PuraneySvg({ id, fills, interactive = false, onColorRegion }: PuraneySvgProps) {
  return (
    <svg
      aria-labelledby={`${id}-title ${id}-description`}
      className="block h-auto w-full"
      fill="none"
      id={id}
      role={interactive ? "group" : undefined}
      viewBox="0 0 637 637"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={`${id}-title`}>Puraney geometric coloring page</title>
      <desc id={`${id}-description`}>
        The Puraney illustration from the reference, divided into its original
        outlined path shapes{interactive ? ". Select any shape to fill it with your chosen color." : "."}
      </desc>
      <rect width="637" height="637" fill="#ffffff" />
      {puraneyColoringPaths.map((path, index) => (
        <path
          key={index}
          aria-label={interactive ? `Puraney coloring section ${index + 1}` : undefined}
          d={path}
          fill={fills[index]}
          role={interactive ? "button" : undefined}
          tabIndex={interactive ? 0 : undefined}
          onClick={interactive ? () => onColorRegion?.(index) : undefined}
          onKeyDown={
            interactive
              ? (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onColorRegion?.(index);
                  }
                }
              : undefined
          }
          stroke="#444"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function PuraneyColoringStudio() {
  const [state, dispatch] = useReducer(coloringReducer, initialState);
  const [selectedColor, setSelectedColor] = useState(palette[1].value);
  const [ready, setReady] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [copiesPerSheet, setCopiesPerSheet] = useState<CopiesPerSheet>(1);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length === REGION_COUNT &&
          parsed.every(isColor)
        ) {
          dispatch({ type: "hydrate", fills: parsed });
          dispatch({ type: "message", message: "Your saved coloring was restored." });
        } else {
          dispatch({
            type: "message",
            message: "Saved coloring could not be read; starting with a blank page.",
          });
        }
      }
    } catch {
      dispatch({
        type: "message",
        message: "Browser storage is unavailable; your coloring will not be saved.",
      });
    }
    const timer = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.fills));
    } catch {
      dispatch({ type: "message", message: "Could not save your coloring in this browser." });
    }
  }, [ready, state.fills]);

  const colorRegion = useCallback((index: number) => {
    dispatch({ type: "color", index, color: selectedColor });
  }, [selectedColor]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const modifier = event.metaKey || event.ctrlKey;
      if (!modifier || event.key.toLowerCase() !== "z") return;
      event.preventDefault();
      dispatch({ type: event.shiftKey ? "redo" : "undo" });
    },
    [],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const exportSvg = useCallback(() => {
    const svg = document.getElementById("puraney-coloring-art-svg");
    if (!(svg instanceof SVGSVGElement)) {
      dispatch({ type: "message", message: "The coloring page is not ready to export." });
      return;
    }

    try {
      const markup = new XMLSerializer().serializeToString(svg);
      downloadBlob(new Blob([markup], { type: "image/svg+xml;charset=utf-8" }), "puraney-coloring.svg");
      dispatch({ type: "message", message: "SVG coloring page downloaded." });
    } catch {
      dispatch({ type: "message", message: "Could not export the SVG file." });
    }
  }, []);

  const exportPng = useCallback(async () => {
    const svg = document.getElementById("puraney-coloring-art-svg");
    if (!(svg instanceof SVGSVGElement)) {
      dispatch({ type: "message", message: "The coloring page is not ready to export." });
      return;
    }

    setIsExporting(true);
    try {
      const markup = new XMLSerializer().serializeToString(svg);
      const imageUrl = URL.createObjectURL(
        new Blob([markup], { type: "image/svg+xml;charset=utf-8" }),
      );
      try {
        const image = new Image();
        image.src = imageUrl;
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = PNG_EXPORT_SIZE;
        canvas.height = PNG_EXPORT_SIZE;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas is unavailable");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const png = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("PNG encoding failed"));
          }, "image/png");
        });
        downloadBlob(png, "puraney-coloring.png");
        dispatch({ type: "message", message: "PNG coloring page downloaded." });
      } finally {
        URL.revokeObjectURL(imageUrl);
      }
    } catch {
      dispatch({
        type: "message",
        message: "Could not export the PNG file. Try downloading the SVG instead.",
      });
    } finally {
      setIsExporting(false);
    }
  }, []);

  const coloredCount = state.fills.filter((fill) => fill !== EMPTY_COLOR).length;

  return (
    <div className="coloring-studio mx-auto max-w-6xl px-4 pb-14">
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <section
          aria-label="Puraney geometric coloring illustration"
          className="coloring-paper min-w-0 rounded-3xl border p-3 shadow-sm sm:p-6"
        >
          <PuraneySvg
            id="puraney-coloring-art-svg"
            fills={state.fills}
            interactive
            onColorRegion={colorRegion}
          />
        </section>

        <aside aria-labelledby="coloring-tools-title" className="card h-fit p-5!">
          <p className="eyebrow">Coloring tools</p>
          <h2 id="coloring-tools-title" className="mt-1 text-xl font-bold">
            Make it yours
          </h2>
          <p className="mt-2 text-sm leading-relaxed muted">
            Choose a color, then select any part of the design. Your work saves in this browser.
          </p>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold">Color palette</legend>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {palette.map((color) => (
                <button
                  key={color.value}
                  aria-label={`${color.name} ${color.value}`}
                  aria-pressed={selectedColor === color.value}
                  className="coloring-swatch h-10 w-full rounded-lg border"
                  style={{ backgroundColor: color.value }}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                />
              ))}
            </div>
          </fieldset>

          <label className="mt-4 flex items-center justify-between gap-3 text-sm font-semibold">
            Custom color
            <input
              aria-label="Choose a custom coloring color"
              className="h-10 w-14 cursor-pointer rounded border-0 bg-transparent p-0"
              type="color"
              value={selectedColor}
              onChange={(event) => setSelectedColor(event.target.value)}
            />
          </label>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              className="btn btn-ghost justify-center"
              disabled={state.past.length === 0}
              type="button"
              onClick={() => dispatch({ type: "undo" })}
              title="Undo (Ctrl/Command + Z)"
            >
              Undo
            </button>
            <button
              className="btn btn-ghost justify-center"
              disabled={state.future.length === 0}
              type="button"
              onClick={() => dispatch({ type: "redo" })}
              title="Redo (Ctrl/Command + Shift + Z)"
            >
              Redo
            </button>
            <button
              className="btn btn-ghost col-span-2 justify-center"
              type="button"
              onClick={() => dispatch({ type: "color-all", color: selectedColor })}
            >
              Fill all with selected color
            </button>
            <button
              className="btn btn-ghost col-span-2 justify-center"
              disabled={coloredCount === 0}
              type="button"
              onClick={() => dispatch({ type: "reset" })}
            >
              Clear page
            </button>
          </div>

          <div className="mt-5 border-t pt-4">
            <p className="text-sm font-semibold">Save or print</p>
            <label className="mt-3 flex flex-col gap-1.5 text-sm font-medium">
              Copies per sheet
              <select
                className="rounded-xl border bg-[var(--card)] px-3 py-2.5 text-[var(--fg)]"
                value={copiesPerSheet}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  if (isCopiesPerSheet(value)) setCopiesPerSheet(value);
                }}
              >
                <option value={1}>1 large copy</option>
                <option value={2}>2 copies</option>
                <option value={4}>4 copies</option>
                <option value={6}>6 copies</option>
              </select>
            </label>
            <div className="mt-3 grid gap-2">
              <button
                className="btn btn-primary justify-center"
                disabled={isExporting}
                type="button"
                onClick={exportPng}
              >
                {isExporting ? "Preparing PNG…" : "Download PNG"}
              </button>
              <button className="btn btn-ghost justify-center" type="button" onClick={exportSvg}>
                Download SVG
              </button>
              <button className="btn btn-ghost justify-center" type="button" onClick={() => window.print()}>
                Print {copiesPerSheet} {copiesPerSheet === 1 ? "copy" : "copies"} per sheet
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed muted" aria-live="polite">
            {state.message || `${coloredCount} of ${REGION_COUNT} areas colored. Undo and redo also work with Ctrl/Command + Z.`}
          </p>
        </aside>
      </div>

      <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold">How to use</h3>
          <p className="mt-1 leading-relaxed muted">
            Pick a palette or custom color and click or tap a section. Keyboard users can tab to a section and press Enter or Space.
          </p>
        </div>
        <div className="rounded-2xl border p-4">
          <h3 className="font-semibold">About this activity</h3>
          <p className="mt-1 leading-relaxed muted">
            This is a creative coloring activity based on the geometric illustration in the Puraney reference. It is not presented as a verified traditional Dura motif.
          </p>
        </div>
      </div>

      <section
        aria-label="Print preview"
        className={`coloring-print-sheet coloring-print-sheet--${copiesPerSheet}`}
        id="puraney-print-sheet"
      >
        {Array.from({ length: copiesPerSheet }, (_, index) => (
          <PuraneySvg
            key={index}
            id={`puraney-print-art-${index + 1}`}
            fills={state.fills}
          />
        ))}
      </section>
    </div>
  );
}
