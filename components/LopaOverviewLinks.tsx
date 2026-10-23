"use client";

import Link from "next/link";
import { useLopaLanguage } from "@/components/LopaLanguageProvider";

const links = {
  en: [
    { href: "/language/dictionary/", label: "Open the Dura dictionary", description: "Search 2,029 Dura–Nepali–English entries." },
    { href: "/language/sentences/", label: "Practice with sentences", description: "Search Dura and Nepali example sentences." },
    { href: "/language/timelines/", label: "Explore language timelines", description: "See language classes, campaigns, books and research." },
    { href: "/language/sources/", label: "Browse learning resources", description: "Read or download language books and learning materials." },
  ],
  ne: [
    { href: "/language/dictionary/", label: "दुरा शब्दकोश खोल्नुहोस्", description: "२,०२९ दुरा–नेपाली–अंग्रेजी शब्द खोज्नुहोस्।" },
    { href: "/language/sentences/", label: "वाक्यबाट अभ्यास गर्नुहोस्", description: "दुरा र नेपाली उदाहरण वाक्य खोज्नुहोस्।" },
    { href: "/language/timelines/", label: "भाषा संरक्षणको समयरेखा", description: "भाषा कक्षा, अभियान, पुस्तक र अनुसन्धान हेर्नुहोस्।" },
    { href: "/language/sources/", label: "सिकाइ सामग्री हेर्नुहोस्", description: "भाषाका पुस्तक र पाठ्यसामग्री पढ्नुहोस् वा डाउनलोड गर्नुहोस्।" },
  ],
};

export default function LopaOverviewLinks() {
  const language = useLopaLanguage();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links[language].map((link) => (
        <Link key={link.href} href={link.href} className="card hover:border-brand-500">
          <h2 className="font-semibold">{link.label}</h2>
          <p className="mt-2 text-sm muted">{link.description}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-accent">
            {language === "ne" ? "खोल्नुहोस् →" : "Explore →"}
          </span>
        </Link>
      ))}
    </div>
  );
}
