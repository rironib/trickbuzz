import socialCover from "@/public/images/social_cover.png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata() {
  const data = {
    title: "About - TrickBuzz",
    description:
      "Discover the story behind TrickBuzz, our mission, vision, and the team dedicated to delivering the latest tech news, tips, and resources to our community.",
    keywords:
      "about, trickbuzz, team, mission, vision, tech news, technology, resources",
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    author: "trickbuzz",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/page/about`,
    },
    openGraph: {
      title: data.title,
      description: data.description,

      url: `${baseUrl}/page/about`,
      type: "article",
      site_name: "TrickBuzz",
      locale: "en_BD",
      images: [
        {
          url: `${socialCover.src}`,
          width: 1200,
          height: 630,
          alt: "TrickBuzz Social Cover",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      url: `${baseUrl}/page/about`,
      title: data.title,
      description: data.description,
      images: [`${socialCover.src}`],
      site: "@TrickBuzz",
      creator: "@trickbuzz",
    },
  };
}

const AboutUs = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="mb-6 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
          About Us
        </div>
        <div className="space-y-3 *:text-justify">
          <p>
            TrickBuzz is a dynamic and innovative technology blog dedicated to
            delivering the latest news, insightful articles, and practical tips
            to tech enthusiasts, professionals, and curious minds alike. Founded
            with a passion for technology and a commitment to quality content,
            TrickBuzz has quickly become a trusted source for readers seeking to
            stay informed and inspired in the ever-evolving world of technology.
          </p>

          <p>
            Our mission at TrickBuzz is to bridge the gap between complex
            technological advancements and everyday users. We strive to make
            technology accessible, understandable, and useful for everyone,
            regardless of their background or expertise. Whether you are a
            seasoned developer, a business owner exploring digital solutions, or
            a student eager to learn about emerging trends, TrickBuzz offers
            something valuable for you.
          </p>

          <p>
            At the heart of TrickBuzz is a dedicated team of writers, editors,
            and tech experts who are passionate about sharing their knowledge
            and experiences. Our team works tirelessly to research, analyze, and
            present information in a clear and engaging manner. We cover a wide
            range of topics, including software development, gadgets,
            cybersecurity, artificial intelligence, digital marketing, and much
            more. Each article is crafted with the reader in mind, ensuring that
            our content is both informative and actionable.
          </p>

          <p>
            In addition to news and tutorials, TrickBuzz features in-depth
            reviews, opinion pieces, and interviews with industry leaders. We
            believe in fostering a community where readers can interact, share
            ideas, and grow together. Our comment sections and social media
            channels are open spaces for discussion, feedback, and
            collaboration.
          </p>

          <p>
            As technology continues to shape our world, TrickBuzz remains
            committed to keeping our audience ahead of the curve. We regularly
            update our blog with fresh content, ensuring that our readers have
            access to the most current and relevant information. Our goal is to
            empower individuals and organizations to make informed decisions,
            embrace innovation, and thrive in the digital age.
          </p>

          <p>
            Thank you for being a part of the TrickBuzz community. We invite you
            to explore our articles, join the conversation, and embark on a
            journey of discovery with us. Together, let&apos;s unlock the full
            potential of technology and create a brighter, smarter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
