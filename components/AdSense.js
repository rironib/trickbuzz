import Script from "next/script";

const AdSense = () => {
  return (
    <Script
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2274017621360737`}
      crossOrigin="anonymous"
      data-overlays="bottom"
    />
  );
};

export default AdSense;
