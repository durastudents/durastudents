// Posts shown on /news, newest first. Only publish approved announcements and
// consented material.

export type NewsCategory =
  | "Announcement"
  | "Event report"
  | "Community story"
  | "Language & heritage";

export type NewsPost = {
  title: string;
  date: string;
  isoDate: string;
  category: NewsCategory;
  body: string[];
  link?: { href: string; label: string };
  sources?: { href: string; label: string }[];
};

const posts: NewsPost[] = [
  {
    title: "Dura Lopa learning resources are available online",
    date: "October 24, 2026",
    isoDate: "2026-10-24",
    category: "Announcement",
    body: [
      "The Dura Lopa learning page brings together alphabet lessons, a Dura–Nepali–English dictionary, vocabulary, verbs, sentences with native audio, and an audio book. Learners can explore these resources online and connect language learning with Dura heritage.",
    ],
    link: { href: "/language/", label: "Explore Dura Lopa" },
    sources: [
      { href: "https://durastudents.org.np/language/", label: "Dura Lopa" },
    ],
  },
  {
    title: "From the archive: Dura Students Society members in Handikhola",
    date: "October 24, 2026",
    isoDate: "2026-10-24",
    category: "Event report",
    body: [
      "A photograph in the Society's archive shows Dura Students Society members at the 32nd Anniversary of Dura Service Society in Handikhola, Lamjung. The image offers a glimpse of a community gathering; the original caption does not provide the event date or further program details.",
    ],
    link: { href: "/heritage/archive/", label: "Explore the community archive" },
    sources: [
      { href: "https://durastudents.org.np/", label: "Dura Students Society homepage and photo caption" },
    ],
  },
  {
    title: "A heritage project shaped with the community",
    date: "October 24, 2026",
    isoDate: "2026-10-24",
    category: "Community story",
    body: [
      "The Dura Digital Heritage Project describes a community-owned approach to documenting, preserving, organizing, and sharing Dura heritage. Its work is undertaken with the Dura community, centering community knowledge and participation.",
    ],
    link: { href: "/heritage/", label: "Explore the heritage project" },
    sources: [
      { href: "https://durastudents.org.np/heritage/", label: "Dura Digital Heritage Project" },
    ],
  },
  {
    title: "Language learning connects with Dura heritage",
    date: "October 24, 2026",
    isoDate: "2026-10-24",
    category: "Language & heritage",
    body: [
      "Dura Lopa connects language learning with the wider story of Dura heritage. Its online learning tools include vocabulary, example sentences with native audio, and a dictionary—resources learners can explore at their own pace.",
    ],
    link: { href: "/language/", label: "Visit the Dura Lopa page" },
    sources: [
      { href: "https://durastudents.org.np/language/", label: "Dura Lopa" },
    ],
  },
];

export const news = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
