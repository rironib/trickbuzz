import "./globals.css";
import { Providers } from "./providers";
import AdSense from "../components/AdSense";
import Analytics from "../components/Analytics";
import Ahrefs from "../components/Ahrefs";
import { hind_siliguri } from "@/config/fonts";
import Header from "../components/ui/Header";
import AdBlockDetector from "../components/AdBlockDetector";
import DisplayAds from "../components/Ads/DisplayAds";
import MultiplexAds from "../components/Ads/MultiplexAds";
import Footer from "../components/ui/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "TrickBuzz - Tech Tricks, Blogging Tips & Digital Insights",
    template: "%s - TrickBuzz Blog",
  },
  description:
    "আপডেট থাকা সহজ এখন আরও সহজ! টেকনোলজি-বিষয়ক সর্বশেষ খবর, টিপস ও বিশ্লেষণ সবার আগে পেতে নিয়মিত ভিজিট করুন আমাদের ওয়েবসাইটে।",
  keywords:
    "TrickBuzz, tech tricks, blogging tips, digital insights, blog, tutorials, guides",
  author: "TrickBuzz",
  robots: "index, follow",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <AdSense />
        <Analytics />
        <Ahrefs />
      </head>
      <body className={`${hind_siliguri.className}`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Header />
          <AdBlockDetector />
          <div className="h-auto w-full pt-4 pb-10">
            <DisplayAds AdSlot={2571150064} />
            <main className="grid gap-4 py-6 md:gap-4 md:py-8 lg:grid-cols-12 lg:gap-6">
              <div
                className="sticky top-[80px] z-10 hidden lg:col-span-3 lg:block"
                style={{ height: "max-content", minHeight: "20px" }}
              >
                <DisplayAds AdSlot={1597453431} />
              </div>
              <div className="lg:col-span-6">{children}</div>
              <div
                className="sticky top-[80px] z-10 hidden lg:col-span-3 lg:block"
                style={{ height: "max-content", minHeight: "20px !important" }}
              >
                <DisplayAds AdSlot={3659041381} />
              </div>
            </main>
            <MultiplexAds AdSlot={5874137387} />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
