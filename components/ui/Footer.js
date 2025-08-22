import React from "react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiTelegram2Line,
  RiTwitterXLine,
  RiYoutubeLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="space-y-6 px-4 pb-6 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-3 gap-y-2">
        <Link href="/">Home</Link>
        <Link href="/about/">About</Link>
        <Link href="/contact/">Contact</Link>
        <Link href="/privacy/">Privacy Policy</Link>
        <Link href="/terms/">Terms & Conditions</Link>
        <Link href="/sitemap.xml">Sitemap</Link>
      </div>
      <div className="flex items-center justify-center gap-6 text-3xl font-bold">
        <Link href="https://web.facebook.com/trickbuzz.io">
          <RiFacebookFill />
        </Link>
        <Link href="https://x.com/">
          <RiTwitterXLine />
        </Link>
        <Link href="https://www.youtube.com/@TrickBuzzYT">
          <RiYoutubeLine />
        </Link>
        <Link href="https://t.me/trickbuzz4u">
          <RiTelegram2Line />
        </Link>
      </div>
      <div className="text-center">
        <h3>
          Copyright &copy; {new Date().getFullYear()} <strong>TrickBuzz</strong>
          . All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
