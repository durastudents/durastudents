import type { Metadata } from "next";
import Link from "next/link";
import PuraneyColoringStudio from "@/components/PuraneyColoringStudio";

export const metadata: Metadata = {
  title: "Puraney Coloring Page",
  description:
    "Color a geometric Puraney illustration, save your work in your browser, and download or print your finished page.",
};

export default function PuraneyColoringPage() {
  return (
    <div className="heritage-page">
      <header className="mx-auto max-w-6xl px-4 pb-7 pt-8 sm:pt-12">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
          href="/heritage/"
        >
          <span aria-hidden="true">←</span> Heritage project
        </Link>
        <p className="eyebrow mt-6">Heritage · Creative activity</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Puraney coloring page.
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed muted">
          Add color to a geometric rosette inspired by the Puraney illustration. Color online,
          save your progress, or make a print-ready copy.
        </p>
      </header>
      <PuraneyColoringStudio />
    </div>
  );
}
