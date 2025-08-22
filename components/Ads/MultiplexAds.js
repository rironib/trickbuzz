"use client";
import { useEffect } from "react";

const MultiplexAds = ({ AdSlot }) => {
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
        data-ad-format="autorelaxed"
      ></ins>
    </div>
  );
};

export default MultiplexAds;
