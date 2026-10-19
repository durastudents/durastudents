// Dura Lopa content. Source: dura-amar/duralopa.app (features.json, contributors.json).

export const features = [
  { icon: "🔤", title: "Alphabets", body: "Learn the Dura alphabets with clear visuals and audio support." },
  { icon: "📖", title: "Dictionary", body: "Explore the Dura–Nepali–English dictionary with search." },
  { icon: "🗣️", title: "Sentences with Audio", body: "Practice common sentences with native audio recordings." },
  { icon: "📝", title: "Vocabulary", body: "Build vocabulary with categorized word lists and audio." },
  { icon: "⚡", title: "Verbs", body: "Master verb forms in Dura." },
  { icon: "🎧", title: "Audio Book", body: "Listen to stories in the Dura language for better comprehension." },
];

export const screenshots = [1, 2, 3, 4, 5].map((n) => ({
  src: `/lopa/screens/preview${n}.jpg`,
  alt: `Dura Lopa app screenshot ${n}`,
}));

export const contributors = [
  { name: "Amar Dura", role: "Designer / Developer", photo: "amar" },
  { name: "Sudarshan Dura", role: "Developer", photo: "sudarshan" },
  { name: "Sanjita Dura", role: "Vocal", photo: "sanjita" },
  { name: "Raj Kumari Dura", role: "Advisor", photo: "rajkumari" },
  { name: "Muna Dura", role: "Advisor", photo: "muna" },
  { name: "Dipesh Dura", role: "Content Writer", photo: "dipesh" },
  { name: "Prabina Dura", role: "Content Writer", photo: "prabina" },
  { name: "Bikesh Dura", role: "Content Writer", photo: "bikesh" },
].map((c) => ({ ...c, src: `/lopa/contributors/${c.photo}.jpg` }));

export const language = {
  iso: "drq", // shown in the app footer as "ISO 639-3: drq"
};
