import socialCover from "@/public/images/social_cover.png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata() {
  const data = {
    title: "Contact Us - TrickBuzz",
    description:
      "Get in touch with the TrickBuzz team. Reach out for support, feedback, business inquiries, or any questions you may have about our website and services.",
    keywords: "contact, trickbuzz, support, feedback, business inquiries",
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    author: "trickbuzz",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/page/contact`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: `${socialCover.src}`,
          width: 1200,
          height: 630,
          alt: "TrickBuzz Social Cover",
        },
      ],
      url: `${baseUrl}/page/contact`,
      type: "article",
      site_name: "TrickBuzz",
      locale: "en_BD",
    },
    twitter: {
      card: "summary_large_image",
      url: `${baseUrl}/page/contact`,
      title: data.title,
      description: data.description,
      images: [`${socialCover.src}`],
      site: "@TrickBuzz",
      creator: "@trickbuzz",
    },
  };
}

const Contact = () => {
  return (
    <div className="h-[1150px] min-h-screen w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe871jDP1h_Wy4h3d7mjqfJG77Bvv4UC4H96Kob076Bvpzt_w/viewform?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
