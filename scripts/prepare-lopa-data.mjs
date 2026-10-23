import { copyFile, mkdir, readFile } from "node:fs/promises";

const dictionaryPath = new URL("../data/lopa/dictionary.json", import.meta.url);
const sentencesPath = new URL("../data/lopa/sentences.json", import.meta.url);
const timelineFiles = [
  ["books-materials-research.json", 9],
  ["campaigns.json", 11],
  ["classes.json", 2],
];
const dictionaryOutput = new URL("../public/lopa/data/dictionary.json", import.meta.url);

function fail(message) {
  throw new Error(`Dura Lopa data validation failed: ${message}`);
}

const dictionary = JSON.parse(await readFile(dictionaryPath, "utf8"));
if (!Array.isArray(dictionary) || dictionary.length !== 2029) {
  fail(`expected 2,029 dictionary entries, received ${dictionary?.length ?? "invalid data"}`);
}

const ids = new Set();
for (const [index, entry] of dictionary.entries()) {
  if (!Number.isSafeInteger(entry.id) || entry.id < 1 || ids.has(entry.id)) {
    fail(`entry ${index + 1} has an invalid or duplicate ID`);
  }
  ids.add(entry.id);
  if (typeof entry.dura !== "string" || !entry.dura.trim()) {
    fail(`entry ${entry.id} needs a Dura headword`);
  }
  for (const field of ["ipa", "nepali", "nepaliPos", "english", "englishPos"]) {
    if (entry[field] !== undefined && typeof entry[field] !== "string") {
      fail(`entry ${entry.id} has a non-text ${field} value`);
    }
  }
}

const sentences = JSON.parse(await readFile(sentencesPath, "utf8"));
if (!Array.isArray(sentences) || sentences.length !== 80) {
  fail(`expected 80 sentence records, received ${sentences?.length ?? "invalid data"}`);
}
for (const [index, sentence] of sentences.entries()) {
  if (
    typeof sentence.dura !== "string" ||
    !sentence.dura.trim() ||
    typeof sentence.nepali !== "string" ||
    !sentence.nepali.trim()
  ) {
    fail(`sentence ${index + 1} needs Dura and Nepali text`);
  }
}

for (const [file, expectedCount] of timelineFiles) {
  const timelinePath = new URL(`../data/lopa/timelines/${file}`, import.meta.url);
  const events = JSON.parse(await readFile(timelinePath, "utf8"));
  if (!Array.isArray(events) || events.length !== expectedCount) {
    fail(`${file} must contain ${expectedCount} timeline records`);
  }
  for (const [index, event] of events.entries()) {
    if (
      typeof event.Title !== "string" ||
      !event.Title.trim() ||
      typeof event.Description !== "string" ||
      !event.Description.trim() ||
      typeof event.Year !== "string" ||
      !event.Year.trim()
    ) {
      fail(`${file} record ${index + 1} needs a title, description and year`);
    }
  }
}

await mkdir(new URL("../public/lopa/data/", import.meta.url), { recursive: true });
await copyFile(dictionaryPath, dictionaryOutput);
console.log(
  `Validated ${dictionary.length} dictionary entries, ${sentences.length} sentences and all timeline records.`,
);
