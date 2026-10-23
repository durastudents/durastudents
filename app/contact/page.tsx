import type { Metadata } from "next";
import Link from "next/link";
import PageHeader, { Container } from "@/components/PageHeader";
import { site } from "@/data/site";
import BrandIcon from "@/components/BrandIcon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dura Students Society about its programs, volunteering, Dura language resources or the Dura Digital Heritage Project.",
};

const contactTopics = [
  {
    title: "Programs and general questions",
    body: "Ask about the Society, upcoming activities, events or community initiatives.",
    subject: "Programs and general inquiry",
  },
  {
    title: "Volunteering and collaboration",
    body: "Tell us about your skills, interest in volunteering or a possible collaboration.",
    subject: "Volunteering and collaboration",
  },
  {
    title: "Dura language resources",
    body: "Share feedback, corrections or suggestions about Dura Lopa learning materials.",
    subject: "Dura language resources",
  },
  {
    title: "Heritage contributions and corrections",
    body: "Suggest a story, place or person to document, or request a correction or removal.",
    subject: "Heritage contribution or correction",
  },
];

export default function Contact() {
  const emailHref = (subject: string) =>
    `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect."
        lead="Have a question, want to get involved, or have knowledge to share? Dura students, elders, researchers, storytellers, language learners and volunteers are welcome."
      />
      <Container>
        <section
          aria-labelledby="contact-details"
          className="grid gap-4 md:grid-cols-2"
        >
          <div className="card">
            <h2 id="contact-details" className="text-xl font-semibold">
              Email the Society
            </h2>
            <p className="mt-2 text-sm muted">
              Email is the best way to reach us. Choose a topic below to start a
              message with a helpful subject line.
            </p>
            {site.email ? (
              <p className="mt-4 break-all font-semibold">
                <a href={emailHref("Contact Dura Students Society")}>{site.email}</a>
              </p>
            ) : (
              <p className="mt-4 text-sm muted">Official email address to be added.</p>
            )}
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold">Based in</h2>
            <p className="mt-2 muted">{site.location}</p>
            <p className="mt-4 text-sm muted">
              Follow Society updates on{" "}
              <a className="mx-1 inline-flex items-center gap-1" href={site.facebook}>
                <BrandIcon name="facebook" />
                Facebook
              </a>{" "}
              and{" "}
              <a className="mx-1 inline-flex items-center gap-1" href={site.youtube}>
                <BrandIcon name="youtube" />
                YouTube
              </a>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="community-location" className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="community-location" className="text-2xl font-bold">
                Dura Students Society Central Office
              </h2>
              <p className="mt-2 max-w-2xl text-sm muted">
                Located at the Dura Sewa Samaj Building, Kathmandu.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 font-semibold text-accent"
              href="https://www.google.com/maps/search/?api=1&query=Dura+Sewa+Samaj+Building%2C+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="googlemaps" />
              Open in Google Maps →
            </a>
          </div>
          <div
            className="mt-5 overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--line)" }}
          >
            <iframe
              className="aspect-video w-full"
              title="Map showing the Dura Students Society Central Office at Dura Sewa Samaj Building, Kathmandu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.6886986783729!2d85.28952947560205!3d27.724014333469707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1986c034e4a1%3A0x7160a593ab2c5dae!2sDura%20Sewa%20Samaj!5e1!3m2!1sen!2snp!4v1777217923112!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="contact-topics" className="mt-12">
          <h2 id="contact-topics" className="text-2xl font-bold">
            What would you like to discuss?
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {contactTopics.map((topic) => (
              <li key={topic.subject} className="card">
                <h3 className="font-semibold">{topic.title}</h3>
                <p className="mt-2 text-sm muted">{topic.body}</p>
                {site.email ? (
                  <a
                    className="mt-4 inline-block font-semibold text-accent"
                    href={emailHref(topic.subject)}
                  >
                    Email about this topic →
                  </a>
                ) : (
                  <p className="mt-4 text-sm muted">Email contact details to be added.</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="committee-contact" className="card mt-8">
          <h2 id="committee-contact" className="font-semibold">
            Looking for the current committee?
          </h2>
          <p className="mt-2 text-sm muted">
            Meet the Central Committee on our Team &amp; Governance page.
          </p>
          <Link className="mt-4 inline-block font-semibold text-accent" href="/team/">
            Meet the committee →
          </Link>
        </section>

        <aside className="card mt-8">
          <h2 className="font-semibold">Sharing heritage material</h2>
          <p className="mt-2 text-sm muted">
            Before sharing photographs, recordings or stories, make sure you have
            permission to share them. Some cultural knowledge may be sensitive;
            please ask before sending it. Read our{" "}
            <Link href="/heritage/policy/">draft rights, consent and access guidance</Link>.
          </p>
        </aside>
      </Container>
    </>
  );
}
