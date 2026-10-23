import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Teko, Tiro_Devanagari_Hindi } from "next/font/google";

const nepaliReading = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-devanagari-reading",
  preload: false,
});

const nepaliDisplay = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-devanagari-display",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://durastudents.org.np"),
  title: {
    default: "Dura Students Society | Dura Indigenous Community",
    template: "%s | Dura Students Society",
  },
  description:
    "Dura Students Society connects Dura youth, preserves the Dura language and documents the heritage of the Dura Indigenous Community of Nepal.",
  keywords: ["Dura", "Dura Students Society", "Dura language", "Dura Lopa", "Dura Digital Heritage"],
  openGraph: {
    type: "website",
    siteName: "Dura Students Society",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply a saved theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}',
          }}
        />
      </head>
      <body className={`font-sans antialiased ${nepaliReading.variable} ${nepaliDisplay.variable}`}>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} data-pagefind-body>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
