import type { Metadata } from "next";
import PageHeader, { Container } from "@/components/PageHeader";
import { quiz } from "@/data/society";
import SiteText from "@/components/SiteText";

export const metadata: Metadata = {
  title: "Inter-District Quiz Contest",
  description:
    "The Shree Khaje Dura Smriti Inter-District Quiz Contest, with historical results, teams, participants and sponsors.",
};

export default function Quiz() {
  const winsByDistrict = quiz.events.reduce<Record<string, number>>((wins, event) => {
    if (event.winner) wins[event.winner] = (wins[event.winner] ?? 0) + 1;
    return wins;
  }, {});
  const winnerStats = Object.entries(winsByDistrict).sort(
    ([districtA, winsA], [districtB, winsB]) =>
      winsB - winsA || districtA.localeCompare(districtB),
  );
  const mostWins = winnerStats[0]?.[1] ?? 0;

  return (
    <>
      <PageHeader eyebrow="Programs" title={quiz.name} lead={quiz.purpose} />
      <Container>
        <dl className="grid gap-4 sm:grid-cols-3">
          {quiz.publishedHighlights.map((highlight) => (
            <div key={highlight.label} className="card">
              <dd className="text-3xl font-bold text-accent">{highlight.value}</dd>
              <dt className="mt-1 text-sm muted"><SiteText>{highlight.label}</SiteText></dt>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-sm muted">
          <SiteText>Teams have represented</SiteText> {quiz.districts.join(", ")}. <SiteText>Years are in Bikram Sambat (BS).</SiteText>
        </p>

        <section aria-labelledby="quiz-winners" className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="quiz-winners" className="text-2xl font-bold">
                <SiteText>Champions through the years</SiteText>
              </h2>
              <p className="mt-2 text-sm muted">
                <SiteText>Recorded wins in the years held; this does not show second or third place.</SiteText>
              </p>
            </div>
            <p className="text-sm muted">
              {quiz.events.filter((event) => event.status === "held").length} <SiteText>competitions held</SiteText>
            </p>
          </div>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {winnerStats.map(([district, wins]) => (
              <li key={district} className="card p-4!">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold">{district}</h3>
                  <p className="text-sm font-semibold text-accent">
                    {wins} <SiteText>{wins === 1 ? "win" : "wins"}</SiteText>
                  </p>
                </div>
                <div
                  className="mt-3 h-2 overflow-hidden rounded-full"
                  style={{ background: "var(--line)" }}
                  role="meter"
                  aria-label={`${district} recorded quiz wins`}
                  aria-valuemin={0}
                  aria-valuemax={mostWins}
                  aria-valuenow={wins}
                >
                  <div
                    className="h-full rounded-full bg-brand-600"
                    style={{ width: `${(wins / mostWins) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="quiz-history" className="mt-12">
          <h2 id="quiz-history" className="text-2xl font-bold">
            <SiteText>Quiz competition history</SiteText>
          </h2>
          <ol
            className="relative mt-8 space-y-5 border-l-2 pl-6 sm:pl-8"
            style={{ borderColor: "var(--line)" }}
          >
            {quiz.events.map((event) => (
              <li key={event.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border-2 sm:-left-[2.55rem]"
                  style={{
                    borderColor: event.status === "held" ? "var(--accent)" : "var(--muted)",
                    background: "var(--bg)",
                  }}
                />
                <div className="card overflow-hidden p-0!">
                  <details>
                    <summary className="cursor-pointer p-5 sm:p-6">
                      <span className="eyebrow">{event.year} BS</span>
                      <h3 className="mt-1 text-lg font-semibold">
                        {event.status === "not-held"
                          ? <SiteText>Competition not held</SiteText>
                          : <SiteText>Annual Quiz Competition</SiteText>}
                      </h3>
                      <span className="mt-1 block text-sm muted">
                        {event.status === "not-held"
                          ? <SiteText>{event.note ?? ""}</SiteText>
                          : <><SiteText>Winner:</SiteText> {event.winner}</>}
                        {event.venue ? <> · <SiteText>Venue:</SiteText> {event.venue}</> : ""}
                      </span>
                    </summary>

                    {event.status === "held" && (
                      <div
                        className="border-t p-5 sm:p-6"
                        style={{ borderColor: "var(--line)" }}
                      >
                        {event.teams.length > 0 && (
                          <section aria-label={`Participating teams in ${event.year} BS`}>
                            <h4 className="font-semibold"><SiteText>Participating teams</SiteText></h4>
                            {event.teamsInPositionOrder && (
                              <p className="mt-1 text-sm muted">
                                <SiteText>Teams are listed in position order, as recorded in the source.</SiteText>
                              </p>
                            )}
                            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              {event.teams.map((team) => (
                                <li
                                  key={team.name}
                                  className={`card p-4! ${team.name === event.winner ? "border-brand-500" : ""}`}
                                >
                                  <h5 className="font-semibold">
                                    {team.name}{" "}
                                    {team.name === event.winner && (
                                      <span className="ml-2 text-sm text-accent"><SiteText>Winner</SiteText></span>
                                    )}
                                  </h5>
                                  {team.participants.length > 0 ? (
                                    <ul className="mt-2 space-y-1 text-sm muted">
                                      {team.participants.map((participant) => (
                                        <li key={participant}>{participant}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="mt-2 text-sm muted">
                                      <SiteText>Participant names were not listed in the archived source.</SiteText>
                                    </p>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {event.prizeSponsors.length > 0 && (
                          <section className="mt-6" aria-label={`Prize sponsors for ${event.year} BS`}>
                            <h4 className="font-semibold"><SiteText>Prize sponsors</SiteText></h4>
                            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                              {event.prizeSponsors.map((sponsor) => (
                                <li
                                  key={sponsor}
                                  className="rounded-xl border p-3 text-sm muted"
                                  style={{ borderColor: "var(--line)" }}
                                >
                                  {sponsor}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {event.additionalSponsors.length > 0 && (
                          <section
                            className="mt-6"
                            aria-label={`Additional sponsors for ${event.year} BS`}
                          >
                            <h4 className="font-semibold"><SiteText>Additional sponsors</SiteText></h4>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {event.additionalSponsors.map((sponsor) => (
                                <li
                                  key={sponsor}
                                  className="rounded-full border px-3 py-1.5 text-sm muted"
                                  style={{ borderColor: "var(--line)" }}
                                >
                                  {sponsor}
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}
                      </div>
                    )}
                  </details>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Container>
    </>
  );
}
