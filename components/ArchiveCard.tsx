import Link from "next/link";
import { kinds, type ArchiveItem } from "@/data/archive";
import SiteText from "@/components/SiteText";

export default function ArchiveCard({ item }: { item: ArchiveItem }) {
  return (
    <li className="card card-interactive p-5!">
      <p className="text-xs muted">
        <code className="font-semibold text-accent">{item.id}</code> · <SiteText>{kinds[item.kind]}</SiteText>
      </p>
      <h3 className="mt-2 font-semibold">
        <Link href={`/heritage/archive/${item.id}/`}>{item.title}</Link>
      </h3>
      <p className="mt-1 line-clamp-3 text-sm muted">{item.description}</p>
      <p className="mt-3 text-xs muted">
        {[item.date, item.place].filter(Boolean).join(" · ")}
        {item.date || item.place ? " · " : ""}
        <SiteText>{item.status}</SiteText>
      </p>
    </li>
  );
}
