// Fails when the built site contains Devanagari text that is not tagged with a
// language (lang="ne" for Nepali, lang="drq" for Dura). Tagged text receives the
// Tiro Devanagari / Teko fonts from app/globals.css (`:lang(ne)`, `:lang(drq)`
// and the .devanagari-text / .devanagari-display classes).
//
// Run after `npm run build`:  npm run check:nepali-fonts
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = "out";
const DEVANAGARI = /[ऀ-ॿ]/;
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr", "path", "circle", "rect", "line", "polyline", "polygon"]);
const SKIP_TEXT = new Set(["script", "style", "title", "noscript"]);
const OK_LANGS = new Set(["ne", "drq"]);

function htmlFiles(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    if (name === "pagefind") continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files.push(...htmlFiles(path));
    else if (name.endsWith(".html") && name !== "404.html") files.push(path);
  }
  return files;
}

function langOf(attrs) {
  const match = /\slang=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(attrs);
  return match ? (match[1] ?? match[2] ?? match[3]).toLowerCase() : null;
}

function check(html) {
  const problems = [];
  const stack = [];
  const token = /<!--[\s\S]*?-->|<\/([a-zA-Z][\w:-]*)\s*>|<([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>|([^<]+)/g;
  let m;
  while ((m = token.exec(html))) {
    if (m[1]) {
      const name = m[1].toLowerCase();
      const at = stack.map((s) => s.name).lastIndexOf(name);
      if (at >= 0) stack.length = at;
    } else if (m[2]) {
      const name = m[2].toLowerCase();
      const selfClosing = m[3].trimEnd().endsWith("/");
      if (!VOID.has(name) && !selfClosing) stack.push({ name, lang: langOf(m[3]) });
      if (name === "script" || name === "style") {
        const close = html.indexOf(`</${name}`, token.lastIndex);
        if (close > 0) token.lastIndex = close;
      }
    } else if (m[4] && DEVANAGARI.test(m[4]) && !stack.some((s) => SKIP_TEXT.has(s.name))) {
      const nearest = [...stack].reverse().find((s) => s.lang)?.lang ?? null;
      if (!OK_LANGS.has(nearest ?? "")) {
        problems.push(`${m[4].trim().slice(0, 60)}  (lang=${nearest ?? "none"})`);
      }
    }
  }
  return problems;
}

let failures = 0;
const files = htmlFiles(OUT);
for (const file of files) {
  const problems = check(readFileSync(file, "utf8"));
  if (problems.length) {
    failures += problems.length;
    console.error(`\n${relative(".", file)}: ${problems.length} untagged Devanagari text node(s)`);
    for (const p of problems.slice(0, 5)) console.error(`  - ${p}`);
  }
}
if (failures) {
  console.error(`\nFound ${failures} Devanagari text node(s) without lang="ne" or lang="drq". Add the attribute and the devanagari-text / devanagari-display class.`);
  process.exit(1);
}
console.log(`Nepali typography check passed for ${files.length} pages.`);
