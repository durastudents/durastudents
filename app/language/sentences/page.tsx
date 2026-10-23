import sentences from "@/data/lopa/sentences.json";
import type { Metadata } from "next";
import LopaRouteTitle from "@/components/LopaRouteTitle";
import LopaSentencesExplorer from "@/components/LopaSentencesExplorer";
import type { LopaSentence } from "@/data/lopa/types";

export const metadata: Metadata = {
  title: "Dura Lopa Sentences",
  description: "Search bilingual Dura and Nepali example sentences for language learning.",
};

export default function SentencesPage() {
  return (
    <>
      <LopaRouteTitle
        eyebrow="Dura Lopa · Sentences"
        titleEn="Dura and Nepali sentences."
        titleNe="दुरा र नेपाली वाक्यहरू।"
        leadEn="Explore bilingual examples and search in either language."
        leadNe="द्विभाषिक उदाहरण हेर्नुहोस् र दुवै भाषामा खोज्नुहोस्।"
      />
      <LopaSentencesExplorer sentences={sentences satisfies LopaSentence[]} />
    </>
  );
}
