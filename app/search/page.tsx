import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Search",
  description: "Search every page of the Dura Students Society and Dura Digital Heritage site.",
  robots: { index: false },
};

export default function Search() {
  return (
    <>
      <PageHeader eyebrow="Search" title="Search the site." />
      {/* Keep the search page itself out of the search index. */}
      <div data-pagefind-ignore>
        <Container>
          <SearchBox />
        </Container>
      </div>
    </>
  );
}
