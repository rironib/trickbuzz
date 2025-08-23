"use client";

import { useDisclosure } from "@heroui/react";
import { useEffect } from "react";

export default function AdBlockDetector() {
  const { isOpen, onOpen } = useDisclosure();

  useEffect(() => {
    function getCookie(name) {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
          return c.substring(name.length + 1);
        }
      }
      return null;
    }

    const b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

    b.onerror = () => {
      console.log("Ad-Blocker detected! 😒");
      window.adblock = true;

      const ck = getCookie("_dAB");

      if (ck == null) {
        setTimeout(() => {
          onOpen(); // <-- opens the banner
        }, 3000);
      }
    };

    b.onload = () => {
      console.log("No Ad-Blocker detected! 🤪");
    };

    const e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e);
  }, [onOpen]);

  // Only show banner if adblock detected
  if (!isOpen) return null;

  return (
    <div className="bg-warning-500 border-danger-500 fixed right-0 bottom-0 left-0 z-50 mx-auto flex min-h-20 w-full max-w-3xl items-center justify-center rounded-t-2xl border-t-2 text-center shadow-2xl">
      <div className="space-y-2 p-2 pt-6 pb-4">
        <div className="text-danger-500 text-xl font-bold">
          Ad Blocker Detected!!!
        </div>
        <div className="text-sm">
          To support us, please consider whitelisting our site in your ad
          blocker.
        </div>
      </div>
    </div>
  );
}
