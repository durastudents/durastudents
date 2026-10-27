import Image from "next/image";
import Link from "next/link";
import { kinds, type ArchiveItem } from "@/data/archive";
import SiteText from "@/components/SiteText";

export default function GalleryCard({ item }: { item: ArchiveItem }) {
  const poster = item.files.find((file) => file.type === "image");
  if (!poster || poster.type !== "image") {
    throw new Error(`Gallery item "${item.id}" is missing its image or video poster`);
  }

  return (
    <li>
      <article className="card card-interactive overflow-hidden p-0!">
        <Link
          href={`/heritage/archive/${item.id}/`}
          aria-label={`View ${item.title} in the digital archive`}
          className="group block"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={poster.src}
              alt={poster.alt ?? item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">
              <SiteText>{kinds[item.kind]}</SiteText>
            </span>
          </div>
          <div className="p-5">
            <h2 className="font-semibold group-hover:text-accent">{item.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed muted">{item.description}</p>
            <p className="mt-3 text-xs muted">
              {[item.date, item.place].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 text-xs muted"><SiteText>Credit:</SiteText> {item.contributor || item.source}</p>
          </div>
        </Link>
      </article>
    </li>
  );
}
