// Digital archive items shown on /heritage/archive.
//
// Add an item only when its contributor has consented to publication and its
// rights, source and verification status are recorded. Large media (audio, video,
// high-resolution scans) should NOT be committed to this repo: host it elsewhere and
// put the full URL in `files[].src`. Keep original master files in at least two
// places outside this repository.
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
  type: "image" | "audio" | "video" | "pdf";
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
};

const items: ArchiveItem[] = [];

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
  }
  return list;
}

export const archive = validate(items);

// Only Public items are shown. Community, Restricted and Archival items stay in the
// archive but are never rendered on this static site.
export const publicItems = archive.filter((i) => i.access === "Public");
