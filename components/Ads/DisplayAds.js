"use client";

import { useEffect } from "react";

const DisplayAds = ({ AdSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Error loading ads", e);
    }
  }, []);

  return (
    <div className="ads">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2274017621360737"
        data-ad-slot={AdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default DisplayAds;
