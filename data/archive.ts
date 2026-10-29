// Digital archive items shown on /heritage/archive.
//
// Add an item only when its contributor has consented to publication and its
// rights, source and verification status are recorded. Large media (audio, video,
// high-resolution scans) should NOT be committed to this repo: host it elsewhere and
// put the full URL in `files[].src`. Keep original master files in at least two
// places outside this repository.
//
// To publish a gallery item, add a consented archive record below with `gallery: true`.
// Put small, optimized photos and video posters in public/gallery/ and use paths such
// as "/gallery/community-gathering.jpg". For large videos, use an approved external
// viewing link (`type: "link"`) or a direct playable media URL (`type: "video"`).
//
// The build fails if an item breaks the rules in `validate()` below.

import type { Verification } from "./types";

export const kinds = {
  PHO: "Photograph",
  AUD: "Audio",
  VID: "Video",
  DOC: "Document",
  PER: "Person",
  PLC: "Place",
  LNG: "Language",
  OBJ: "Artifact",
  INT: "Intangible Heritage",
} as const;

export type ArchiveKind = keyof typeof kinds;
export type AccessLevel = "Public" | "Community" | "Restricted" | "Archival";

export type ArchiveFile = {
  type: "image" | "audio" | "video" | "pdf" | "link";
  src: string; // "/archive/..." for small files, or a full https URL
  label?: string;
  alt?: string; // required for images
};

export type ArchiveItem = {
  id: string; // DHP-<KIND>-<5 digits>, e.g. DHP-PHO-00001
  kind: ArchiveKind;
  title: string;
  description: string;
  date?: string; // free text: "1985", "1980s", "2073 BS"
  place?: string;
  people?: string[]; // only people who consented, or whose family has
  language?: string;
  source: string; // provenance: who held it and how it reached the archive
  contributor?: string;
  rights: string; // e.g. "Contributor; shared with the Society for display"
  access: AccessLevel;
  status: Verification;
  files: ArchiveFile[];
  consent: true; // must be true to publish
  gallery?: boolean; // opt in approved photographs/videos to the public gallery
};

const items: ArchiveItem[] = [
  {
    id: "DHP-PHO-00001",
    kind: "PHO",
    title: "Tanahun team at the inter-district quiz",
    description:
      "Young participants seated at a table marked Tanahun during the Shree Khaje Dura Smriti inter-district quiz competition.",
    source:
      "Dura Students Society YouTube community post: https://www.youtube.com/post/Ugkx6-TDGTJeQF1PhEC7Jtj8aD9Yg0PZLUKW",
    contributor: "Dura Students Society",
    rights: "Reuse on the Society website and consent for the selected photo confirmed by the Society.",
    access: "Public",
    status: "Verified",
    files: [
      {
        type: "image",
        src: "/gallery/quiz-tanahun-team.webp",
        alt: "Three young participants seated at a table marked Tanahun, with another person standing behind them.",
      },
    ],
    consent: true,
    gallery: true,
  },
  {
    id: "DHP-PHO-00002",
    kind: "PHO",
    title: "Kaski team at the inter-district quiz",
    description:
      "Young participants seated at a table marked Kaski during the Shree Khaje Dura Smriti inter-district quiz competition.",
    source:
      "Dura Students Society YouTube community post: https://www.youtube.com/post/Ugkx6-TDGTJeQF1PhEC7Jtj8aD9Yg0PZLUKW",
    contributor: "Dura Students Society",
    rights: "Reuse on the Society website and consent for the selected photo confirmed by the Society.",
    access: "Public",
    status: "Verified",
    files: [
      {
        type: "image",
        src: "/gallery/quiz-kaski-team.webp",
        alt: "Four young participants seated at a table marked Kaski.",
      },
    ],
    consent: true,
    gallery: true,
  },
  {
    id: "DHP-PHO-00003",
    kind: "PHO",
    title: "Participants with a quiz competition trophy",
    description:
      "Community members and young participants pose with a trophy at the gathering featured in the Society's inter-district quiz post.",
    source:
      "Dura Students Society YouTube community post: https://www.youtube.com/post/UgkxGkpSEOM3IfUWfvtAD7e6jxF1g50mxdck",
    contributor: "Dura Students Society",
    rights: "Reuse on the Society website and consent for the selected photo confirmed by the Society.",
    access: "Public",
    status: "Verified",
    files: [
      {
        type: "image",
        src: "/gallery/quiz-award-group.webp",
        alt: "A group of community members and young participants holding a trophy together.",
      },
    ],
    consent: true,
    gallery: true,
  },
  {
    id: "DHP-PHO-00004",
    kind: "PHO",
    title: "Trophy and awards at the quiz gathering",
    description:
      "A trophy and award plaques displayed at the gathering featured in the Society's inter-district quiz post.",
    source:
      "Dura Students Society YouTube community post: https://www.youtube.com/post/UgkxGkpSEOM3IfUWfvtAD7e6jxF1g50mxdck",
    contributor: "Dura Students Society",
    rights: "Reuse on the Society website and consent for the selected photo confirmed by the Society.",
    access: "Public",
    status: "Verified",
    files: [
      {
        type: "image",
        src: "/gallery/quiz-awards.webp",
        alt: "A gold-colored trophy displayed among red award plaques on a table.",
      },
    ],
    consent: true,
    gallery: true,
  },
  {
    id: "DHP-PHO-00005",
    kind: "PHO",
    title: "Community singing at a Dura gathering",
    description:
      "Women and a young performer sit together in traditional clothing while one sings into a microphone, with community members gathered nearby.",
    source:
      "Dura Lopa project, durapeto-web: https://github.com/dura-amar/durapeto-web/blob/main/public/images/hero/hero1.jpg",
    contributor: "Ramesh Dura · SatikMedia",
    rights:
      "The Society confirmed permission for website reuse and consent for this selected photo; original photographer credit retained.",
    access: "Public",
    status: "Community Account",
    files: [
      {
        type: "image",
        src: "/gallery/community-performance.webp",
        alt: "Women in traditional clothing sit together at a gathering as one sings into a microphone.",
      },
    ],
    consent: true,
    gallery: true,
  },
  {
    id: "DHP-PHO-00006",
    kind: "PHO",
    title: "32nd anniversary gathering of Dura Sewa Samaj",
    description:
      "Dura Students Society members at the 32nd Anniversary of Dura Service Society, Handikhola, Lamjung. The original photo caption dates the gathering to 2082 BS.",
    date: "2082 BS",
    place: "Handikhola, Lamjung",
    source:
      "Dura Lopa project, durapeto-web: https://github.com/dura-amar/durapeto-web/blob/main/public/images/hero/hero3.jpg",
    contributor: "Padam Gurung · Dura Students Society",
    rights:
      "The Society confirmed permission for website reuse and consent for this selected photo; original photographer credit retained.",
    access: "Public",
    status: "Community Account",
    files: [
      {
        type: "image",
        src: "/gallery/dura-service-society-32nd-anniversary.webp",
        alt: "Dura Students Society members gathered outdoors at the 32nd Anniversary of Dura Service Society in Handikhola, Lamjung.",
      },
    ],
    consent: true,
    gallery: true,
  },
];

const ID = /^DHP-([A-Z]{3})-(\d{5})$/;

function validate(list: ArchiveItem[]): ArchiveItem[] {
  const seen = new Set<string>();
  for (const i of list) {
    const m = ID.exec(i.id);
    if (!m || m[1] !== i.kind || !(m[1] in kinds)) {
      throw new Error(`Archive item "${i.id}": id must look like DHP-${i.kind}-00001 and match its kind`);
    }
    if (seen.has(i.id)) throw new Error(`Archive item "${i.id}" appears twice`);
    seen.add(i.id);
    if (i.consent !== true) throw new Error(`Archive item "${i.id}": consent must be recorded`);
    if (!i.title.trim() || !i.source.trim() || !i.rights.trim()) {
      throw new Error(`Archive item "${i.id}": title, source and rights are required`);
    }
    for (const f of i.files) {
      if (f.type === "image" && !f.alt?.trim()) {
        throw new Error(`Archive item "${i.id}": every image needs alt text`);
      }
    }
    if (i.gallery) {
      if (i.access !== "Public" || (i.kind !== "PHO" && i.kind !== "VID")) {
        throw new Error(`Archive item "${i.id}": gallery items must be public photographs or videos`);
      }
      if (!i.description.trim()) {
        throw new Error(`Archive item "${i.id}": gallery items need a descriptive caption`);
      }
      if (!i.files.some((f) => f.type === "image")) {
        throw new Error(`Archive item "${i.id}": gallery items need an image or video poster`);
      }
      if (i.kind === "VID" && !i.files.some((f) => f.type === "video" || f.type === "link")) {
        throw new Error(`Archive item "${i.id}": gallery videos need a video file or external link`);
      }
    }
  }
  return list;
}

export const archive = validate(items);

// Only Public items are shown. Community, Restricted and Archival items stay in the
// archive but are never rendered on this static site.
export const publicItems = archive.filter((i) => i.access === "Public");
export const galleryItems = publicItems.filter((i) => i.gallery === true);
