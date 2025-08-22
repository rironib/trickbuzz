"use client";
import { useEffect } from "react";

const InArticleAds = ({ AdSlot }) => {
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
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2274017621360737"
        data-ad-slot={AdSlot}
      ></ins>
    </div>
  );
};

export default InArticleAds;
