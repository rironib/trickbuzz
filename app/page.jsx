import { Suspense } from "react";
import socialCover from "@/public/images/social_cover.png";
import HomePageLoading from "../components/Home/HomePageLoading";
import HomePage from "../components/Home/HomePage";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: "TrickBuzz - Tech Tricks, Blogging Tips & Digital Insights",
  description:
    "আপডেট থাকা সহজ এখন আরও সহজ! টেকনোলজি-বিষয়ক সর্বশেষ খবর, টিপস ও বিশ্লেষণ সবার আগে পেতে নিয়মিত ভিজিট করুন আমাদের ওয়েবসাইটে।",
  alternates: {
    canonical: baseUrl,
  },
  keywords:
    "TrickBuzz, tech tricks, blogging tips, digital insights, blog, tutorials, guides",
  author: "TrickBuzz",
  robots: "index, follow",
  openGraph: {
    title: "TrickBuzz - Tech Tricks, Blogging Tips & Digital Insights",
    description:
      "আপডেট থাকা সহজ এখন আরও সহজ! টেকনোলজি-বিষয়ক সর্বশেষ খবর, টিপস ও বিশ্লেষণ সবার আগে পেতে নিয়মিত ভিজিট করুন আমাদের ওয়েবসাইটে।",
    url: baseUrl,
    siteName: "TrickBuzz",
    images: [
      {
        url: `${socialCover.src}`,
        width: 1200,
        height: 630,
        alt: "TrickBuzz Social Cover",
      },
    ],
    type: "website",
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrickBuzz - Tech Tricks, Blogging Tips & Digital Insights",
    description:
      "টেকনোলজি-বিষয়ক সর্বশেষ খবর, টিপস ও বিশ্লেষণ – সব এক জায়গায় TrickBuzz-এ।",
    creator: "@trickbuzz",
    site: "@TrickBuzz",
    images: [`${socialCover.src}`],
  },
};

const Page = async () => {
  return (
    <div className="px-2 sm:px-4 lg:px-6">
      <Suspense fallback={<HomePageLoading />}>
        <HomePage />
      </Suspense>
    </div>
  );
};

export default Page;
