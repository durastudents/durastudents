import type { Metadata } from "next";
import LopaRouteTitle from "@/components/LopaRouteTitle";
import { Container } from "@/components/PageHeader";
import booksMaterials from "@/data/lopa/timelines/books-materials-research.json";
import campaigns from "@/data/lopa/timelines/campaigns.json";
import classes from "@/data/lopa/timelines/classes.json";
import type { TimelineEvent } from "@/data/lopa/types";

export const metadata: Metadata = {
  title: "Dura Language Timelines",
  description: "Timeline of Dura language classes, campaigns, books and research.",
};

const timelineGroups = [
  { id: "classes", title: "Language classes · भाषा कक्षा", events: classes satisfies TimelineEvent[] },
  { id: "campaigns", title: "Language campaigns · भाषा अभियान", events: campaigns satisfies TimelineEvent[] },
  { id: "books", title: "Books and research · पुस्तक तथा अनुसन्धान", events: booksMaterials satisfies TimelineEvent[] },
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
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <ol className="mt-5 space-y-5 border-l-2 pl-6" style={{ borderColor: "var(--line)" }}>
                {group.events.map((event, index) => (
                  <li key={`${group.id}-${index}`} className="relative">
                    <span aria-hidden="true" className="absolute -left-[1.72rem] top-2 h-3 w-3 rounded-full bg-brand-500" />
                    <p className="text-sm font-semibold text-accent">{event.Year}</p>
                    <h3 className="mt-1 font-semibold">{event.Title}</h3>
                    <p className="mt-1 text-sm muted">{event.Description}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
        <p className="mt-10 text-xs muted">
          Source: Dura Lopa project timeline records, reproduced in Nepali from the source data.
        </p>
      </Container>
    </>
  );
}
