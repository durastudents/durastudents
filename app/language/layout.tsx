import type { ReactNode } from "react";
import { LopaLanguageProvider } from "@/components/LopaLanguageProvider";

export default function LanguageLayout({ children }: { children: ReactNode }) {
  return <LopaLanguageProvider>{children}</LopaLanguageProvider>;
}
