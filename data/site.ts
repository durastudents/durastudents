// Single source of truth for site-wide content. Edit here, not in pages.

export const site = {
  name: "Dura Students Society",
  nameNe: "दुरा विद्यार्थी समाज",
  tagline: "Our identity. Our language. Our heritage.",
  domain: "durastudents.org.np",
  // Existing public address from the old Society site. Switch to a domain address when available.
  email: "durastudents@gmail.com",
  location: "Lamjung, Gandaki, Nepal",
  facebook: "https://www.facebook.com/durastudents",
  youtube: "https://www.youtube.com/@DuraStudentsSociety",
  playStore: "https://play.google.com/store/apps/details?id=org.durapetodss.duralopa",
  appStore: "https://apps.apple.com/np/app/dura-lopa/id6751883250",
  // Dictionary web app (old: dura-lopa-web.onrender.com). Move to a subdomain.
  lopaWeb: "https://dura-lopa-web.onrender.com",
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/programs/", label: "Programs" },
  { href: "/heritage/", label: "Heritage" },
  { href: "/language/", label: "Language" },
  { href: "/resources/", label: "Resources" },
  { href: "/news/", label: "News" },
  { href: "/contact/", label: "Contact" },
];

export const programs = [
  {
    title: "Language Classes",
    body: "Classes for youth and elders, with teaching materials and basic literacy.",
  },
  {
    title: "Documentation",
    body: "Oral histories, songs and vocabulary, and community archiving.",
  },
  {
    title: "Cultural Events",
    body: "Festivals, performances, exhibitions and school outreach.",
  },
  {
    title: "Publications",
    body: "Books, primers and digital resources for learners.",
  },
  {
    title: "Inter-District Quiz Competition",
    body: "A quiz programme that brings Dura students from different districts together.",
  },
];

export const organizations: { name: string; ne: string; logo?: string }[] = [
  { name: "Dura Sewa Samaj", ne: "दुरा सेवा समाज", logo: "/orgs/dura-sewa-samaj.jpg" },
  // Logo to be supplied by Dura Mahila Samaj.
  { name: "Dura Mahila Samaj", ne: "दुरा महिला समाज" },
  { name: "Dura Students Society", ne: "दुरा विद्यार्थी समाज", logo: "/orgs/dura-students-society.jpg" },
];

export const collections = [
  { slug: "history", title: "Dura History", body: "Origins, migration and settlement, historical figures, timelines and community development." },
  { slug: "language", title: "Dura Language", body: "Vocabulary, pronunciation, audio, example sentences and learning resources connected with Dura Lopa." },
  { slug: "oral-history", title: "Oral History", body: "Recorded memories and knowledge from elders, knowledge holders and cultural practitioners." },
  { slug: "places", title: "Places", body: "Dura places, names, meanings, stories and the people connected to them." },
  { slug: "people", title: "People", body: "Notable figures and ordinary community members who preserved and passed on Dura knowledge." },
  { slug: "culture", title: "Living Culture", body: "Festivals, rituals, songs, music, dance, crafts and traditional knowledge." },
  { slug: "photographs", title: "Photographs", body: "Family and community photographs with people, places, dates, sources and rights." },
  { slug: "documents", title: "Documents", body: "Books, manuscripts, research, certificates, newspapers and maps." },
  { slug: "audio-video", title: "Audio & Video", body: "Conversations, songs, oral histories, rituals and storytelling." },
];

export const phases = [
  { n: "01", title: "Foundation", body: "Governance, taxonomy, metadata and a pilot dataset." },
  { n: "02", title: "Documentation", body: "Oral histories, language, places and people." },
  { n: "03", title: "Digitization", body: "Photographs, documents, audio and video." },
  { n: "04", title: "Platform", body: "Search, map, timeline and heritage collections." },
  { n: "05", title: "Public Launch", body: "Community access, training and public rollout." },
  { n: "06", title: "Future", body: "AI-assisted tools, knowledge graph, museum and immersive experiences." },
];

// Proposed planning targets from the DDHP report. NOT completed totals.
export const targets = [
  { value: "1,000+", label: "Digital photographs" },
  { value: "100+", label: "Oral histories" },
  { value: "200+", label: "Audio recordings" },
  { value: "500+", label: "Historical documents" },
  { value: "3,000+", label: "Dura words" },
  { value: "100+", label: "Heritage places" },
  { value: "200+", label: "People documented" },
  { value: "50+", label: "Cultural practices" },
  { value: "100+", label: "Videos" },
  { value: "20+", label: "Podcasts / documentaries" },
];

export const accessLevels = [
  { name: "Public", body: "Anyone can access." },
  { name: "Community", body: "Registered community members." },
  { name: "Restricted", body: "Requires permission." },
  { name: "Archival", body: "Preserved but not publicly displayed." },
];

export const verification = [
  { name: "Verified", body: "Supported by reliable sources or multiple independent records." },
  { name: "Community Account", body: "A documented oral or community narrative, not independently verified." },
  { name: "Research Interpretation", body: "An interpretation made by researchers." },
  { name: "Unknown", body: "Needs further investigation." },
];
