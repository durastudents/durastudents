import SiteText from "@/components/SiteText";

export default function UnderConstructionNotice() {
  return (
    <aside
      className="card mb-6 border-amber-500/50 bg-amber-500/5"
      aria-labelledby="under-construction-title"
    >
      <h2 id="under-construction-title" className="font-semibold">
        <SiteText>Under construction / maintenance</SiteText>
      </h2>
      <p className="mt-2 text-sm leading-relaxed muted">
        <SiteText>This page is being kept to show the proposed structure of the website. Its current content is sample or preliminary material, not a finished collection. Further research, review, and development are needed.</SiteText>
      </p>
    </aside>
  );
}
