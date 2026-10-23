import Image from "next/image";
import type { Metadata } from "next";
import LopaRouteTitle from "@/components/LopaRouteTitle";
import { Container } from "@/components/PageHeader";
import { books } from "@/data/lopa/books";

export const metadata: Metadata = {
  title: "Dura Language Learning Resources",
  description: "Dura language grammar, dictionary and Dura Lopa learning books.",
};

export default function SourcesPage() {
  return (
    <>
      <LopaRouteTitle
        eyebrow="Dura Lopa · Resources"
        titleEn="Books and learning materials."
        titleNe="पुस्तक तथा सिकाइ सामग्री।"
        leadEn="Read or download Dura language publications and learning materials."
        leadNe="दुरा भाषा प्रकाशन र पाठ्यसामग्री पढ्नुहोस् वा डाउनलोड गर्नुहोस्।"
      />
      <Container>
        <ul className="grid gap-5 sm:grid-cols-2">
          {books.map((book) => (
            <li key={book.id} className="card overflow-hidden">
              <div className="relative flex h-56 items-center justify-center bg-white p-4">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  width={800}
                  height={600}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-5">
                <h2 lang="ne" className="devanagari-display text-lg font-semibold">{book.title}</h2>
                <p lang="ne" className="devanagari-text mt-2 text-sm muted">{book.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a className="btn btn-primary" href={book.pdf} target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                  <a className="btn btn-ghost" href={book.pdf} download={book.fileName}>
                    Download
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs muted">
          Materials and descriptions are reproduced from Dura Lopa project sources. Publication
          credits are included in the original documents.
        </p>
      </Container>
    </>
  );
}
