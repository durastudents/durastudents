"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LMap, LayerGroup, CircleMarker } from "leaflet";
import type { Place } from "@/data/places";

type Filter = "All" | "Nepal" | "Abroad";
const COLORS = { Nepal: "#2f7d4a", Abroad: "#b5733a" } as const;

export default function PlacesExplorer({ places }: { places: Place[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  const el = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const markers = useRef<Map<number, CircleMarker>>(new Map());
  const leaflet = useRef<typeof import("leaflet") | null>(null);

  const visible = useMemo(
    () => places.filter((p) => filter === "All" || p.type === filter),
    [places, filter],
  );

  // Create the map once (Leaflet needs the browser, so it is imported lazily).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !el.current) return;
      leaflet.current = L;
      const map = L.map(el.current, { scrollWheelZoom: false }).setView([28.2, 84.4], 6);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      layerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setReady(true);
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Redraw markers whenever the filter changes.
  useEffect(() => {
    const L = leaflet.current;
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!ready || !L || !map || !layer) return;

    layer.clearLayers();
    markers.current.clear();

    visible.forEach((p) => {
      const m = L.circleMarker([p.lat, p.lng], {
        radius: 10,
        color: "#ffffff",
        weight: 2,
        fillColor: COLORS[p.type],
        fillOpacity: 0.95,
      });
      // Build the popup from DOM nodes so place text is never parsed as HTML.
      const box = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = p.name;
      const desc = document.createElement("p");
      desc.textContent = p.description;
      desc.style.margin = "4px 0 0";
      const meta = document.createElement("p");
      meta.textContent = `${p.type} · ${p.status}`;
      meta.style.cssText = "margin:4px 0 0;font-size:12px;opacity:.7";
      box.append(title, desc, meta);
      m.bindPopup(box);
      m.on("click", () => setSelected(p.id));
      m.addTo(layer);
      markers.current.set(p.id, m);
    });

    if (visible.length > 0) {
      map.fitBounds(L.latLngBounds(visible.map((p) => [p.lat, p.lng] as [number, number])), {
        padding: [40, 40],
        maxZoom: 7,
      });
    }
    setSelected(null);
  }, [ready, visible]);

  function focusPlace(p: Place) {
    setSelected(p.id);
    const map = mapRef.current;
    const m = markers.current.get(p.id);
    if (map && m) {
      map.setView([p.lat, p.lng], Math.max(map.getZoom(), 8));
      m.openPopup();
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter places">
        {(["All", "Nepal", "Abroad"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`btn ${filter === f ? "btn-primary" : "btn-ghost"}`}
          >
            {f}
          </button>
        ))}
        <span className="ml-2 text-sm muted">{visible.length} places</span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div
          ref={el}
          role="application"
          aria-label="Map of Dura places"
          className="z-0 h-[420px] overflow-hidden rounded-2xl border lg:col-span-2 lg:h-[520px]"
          style={{ borderColor: "var(--line)" }}
        />
        <ul className="max-h-[520px] space-y-3 overflow-y-auto" aria-label="Places list">
          {visible.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => focusPlace(p)}
                aria-current={selected === p.id}
                className={`card w-full text-left !p-4 hover:border-brand-500 ${
                  selected === p.id ? "border-brand-500" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-3 w-3 rounded-full"
                    style={{ background: COLORS[p.type] }}
                  />
                  <span className="font-semibold">{p.name}</span>
                </span>
                <span className="mt-1 block text-sm muted">{p.description}</span>
                <span className="mt-2 block text-xs muted">
                  {p.type} · {p.status}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
