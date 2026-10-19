// People shown on /heritage/people.
//
// Add an entry only when (1) the person's real name and role are confirmed,
// (2) they or their family have consented to being published, and
// (3) a verification status is set. Photos go in public/people/.
//
// The sample bios in the old durapeople.web repo (Priya, Rohan, Ananya, ...) and the
// unnamed "Person 1-9" photos in durapeto-web were NOT imported: they are placeholders
// and would present invented biographies as fact.

import type { Verification } from "./types";

export type Person = {
  id: number;
  name: string;
  role: string;
  story: string; // Nepali or English
  image?: string; // e.g. "/people/khaje-dura.jpg"
  status: Verification;
  consent: true; // must be true to publish
};

export const people: Person[] = [];
