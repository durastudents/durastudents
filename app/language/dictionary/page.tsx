import { Suspense } from "react";
import type { Metadata } from "next";
import LopaDictionary from "@/components/LopaDictionary";
import LopaRouteTitle from "@/components/LopaRouteTitle";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Dura Lopa Dictionary",
  description:
    "Search the Dura Lopa Dura–Nepali–English dictionary online, with IPA pronunciation and parts of speech for each Dura word.",
};

export default function DictionaryPage() {
  return (
    <>
      <LopaRouteTitle
        eyebrow="Dura Lopa · Dictionary"
        titleEn="Dura language dictionary."
        titleNe="दुरा भाषाको शब्दकोश।"
        leadEn="Search Dura, Nepali, English or pronunciation. Select a word to see its full entry."
        leadNe="दुरा, नेपाली, अंग्रेजी वा उच्चारणबाट खोज्नुहोस्। पूरा विवरण हेर्न शब्द छान्नुहोस्।"
      />
      <Suspense fallback={<p className="mx-auto max-w-6xl px-4 pb-12 muted" role="status"><SiteText>Loading dictionary…</SiteText></p>}>
        <LopaDictionary />
      </Suspense>
    </>
  );
}
