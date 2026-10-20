// Posts shown on /news, newest first.
//
// To add a post, add an object to the top of `posts` below. Only publish things the
// Society has actually decided to announce. Keep `body` to a few short paragraphs; for a
// long story, write a short summary and set `link` to the full article or video.
//
//   {
//     title: "Quiz contest results announced",
//     date: "2083-06-15 BS",      // shown to readers (Bikram Sambat is fine)
//     isoDate: "2026-10-01",      // YYYY-MM-DD, used only for sorting
//     body: ["First paragraph.", "Second paragraph."],
//     link: { href: "https://www.youtube.com/...", label: "Watch on YouTube" }, // optional
//   },

export type NewsPost = {
  title: string;
  date: string;
  isoDate: string;
  body: string[];
  link?: { href: string; label: string };
};

const posts: NewsPost[] = [];

export const news = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
