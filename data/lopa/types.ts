export type DictionaryEntry = {
  id: number;
  dura: string;
  ipa?: string;
  nepali?: string;
  nepaliPos?: string;
  english?: string;
  englishPos?: string;
};

export type LopaSentence = {
  dura: string;
  nepali: string;
};

export type TimelineEvent = {
  Title: string;
  Description: string;
  Year: string;
};

export type UiLanguage = "en" | "ne";
