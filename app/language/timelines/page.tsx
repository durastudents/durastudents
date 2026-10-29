import type { Metadata } from "next";
import LopaRouteTitle from "@/components/LopaRouteTitle";
import { Container } from "@/components/PageHeader";
import booksMaterials from "@/data/lopa/timelines/books-materials-research.json";
import campaigns from "@/data/lopa/timelines/campaigns.json";
import classes from "@/data/lopa/timelines/classes.json";
import type { TimelineEvent } from "@/data/lopa/types";
import SiteText, { BilingualSiteText } from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Dura Language Timelines",
  description: "Timeline of Dura language classes, campaigns, books and research.",
};

const timelineGroups = [
  { id: "classes", titleEn: "Language classes", titleNe: "भाषा कक्षा", events: classes satisfies TimelineEvent[] },
  { id: "campaigns", titleEn: "Language campaigns", titleNe: "भाषा अभियान", events: campaigns satisfies TimelineEvent[] },
  { id: "books", titleEn: "Books and research", titleNe: "पुस्तक तथा अनुसन्धान", events: booksMaterials satisfies TimelineEvent[] },
];

export default function TimelinesPage() {
  return (
    <>
      <LopaRouteTitle
        eyebrow="Dura Lopa · Timelines"
        titleEn="Language work through time."
        titleNe="समयसँगै दुरा भाषाको काम।"
        leadEn="Community records of language classes, campaigns, publications and research."
        leadNe="भाषा कक्षा, अभियान, प्रकाशन र अनुसन्धानका सामुदायिक अभिलेख।"
      />
      <Container>
        <div className="space-y-12">
          {timelineGroups.map((group) => (
            <section key={group.id}>
              <h2 className="text-2xl font-bold">
                <BilingualSiteText english={group.titleEn} nepali={group.titleNe} />
              </h2>
              <ol className="mt-5 space-y-5 border-l-2 pl-6" style={{ borderColor: "var(--line)" }}>
                {group.events.map((event, index) => (
                  <li key={`${group.id}-${index}`} className="relative">
                    <span aria-hidden="true" className="absolute -left-[1.72rem] top-2 h-3 w-3 rounded-full bg-brand-500" />
                    <p
                      lang={/[\u0900-\u097f]/u.test(event.Year) ? "ne" : "en"}
                      className={`text-sm font-semibold text-accent ${/[\u0900-\u097f]/u.test(event.Year) ? "devanagari-text" : ""}`}
                    >
                      {event.Year}
                    </p>
                    <h3 lang="ne" className="devanagari-display mt-1 font-semibold">{event.Title}</h3>
                    <p lang="ne" className="devanagari-text mt-1 text-sm muted">{event.Description}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <p className="mt-10 text-xs muted">
          <SiteText>Source: Dura Lopa project timeline records, reproduced in Nepali from the source data.</SiteText>
        </p>
      </Container>
    </>
  );
}
