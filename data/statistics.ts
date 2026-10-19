// Ported from dura-amar/durapeto-web (statisticsData.ts).
// The source repo records no origin or year for these figures.
// Add `source` and `year` to each entry once confirmed (e.g. census or survey).

export type Stat = {
  key: string;
  labelEn: string;
  labelNe: string;
  value: number;
  source?: string;
  year?: number;
};

export const statistics: Stat[] = [
  { key: "people", labelEn: "Total people", labelNe: "कुल व्यक्तित्व", value: 5581 },
  { key: "subcastes", labelEn: "Sub-castes", labelNe: "उप थरहरु", value: 5 },
  { key: "speakers", labelEn: "Native speakers", labelNe: "वक्ता सङ्ख्या", value: 1921 },
  { key: "places", labelEn: "Residences (place names)", labelNe: "स्थाननाम", value: 75 },
  { key: "orgs", labelEn: "Organizations", labelNe: "संगठनहरु", value: 5 },
  { key: "districts", labelEn: "Districts", labelNe: "जिल्लाहरु", value: 9 },
];
