import socialCover from "@/public/images/social_cover.png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata() {
  const data = {
    title: "Terms & Conditions - TrickBuzz",
    description:
      "Read the comprehensive Terms & Conditions for using TrickBuzz. Understand your rights, responsibilities, and the legal framework that governs your access to our technology news, articles, and resources.",
    keywords:
      "terms and conditions, trickbuzz, legal, user rights, responsibilities, technology blog, website policies, user agreement, access rules",
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    author: "trickbuzz",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/page/terms`,
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
      url: `${baseUrl}/page/terms`,
      type: "article",
      site_name: "TrickBuzz",
      locale: "en_BD",
    },
    twitter: {
      card: "summary_large_image",
      url: `${baseUrl}/page/terms`,
      title: data.title,
      description: data.description,
      images: [`${socialCover.src}`],
      site: "@TrickBuzz",
      creator: "@trickbuzz",
    },
  };
}

const TermsAndConditions = () => {
  return (
    <div>
      <div className="mb-6 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
        Terms & Conditions
      </div>
      <div className="space-y-4 *:text-justify">
        <p>
          Welcome to TrickBuzz. By accessing or using our website, you agree to
          comply with and be bound by these Terms & Conditions. Please read them
          carefully before using our services. If you do not agree with any part
          of these terms, you must not use our website.
        </p>
        <p>
          <strong>1. Acceptance of Terms:</strong> By using TrickBuzz, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms & Conditions, as well as our Privacy Policy. These terms
          apply to all visitors, users, and others who access or use the site.
        </p>
        <p>
          <strong>2. Use of Content:</strong> All content provided on TrickBuzz,
          including articles, images, graphics, logos, and other materials, is
          for informational purposes only. You may not reproduce, distribute,
          modify, or republish any content from this website without prior
          written consent from TrickBuzz or the respective copyright owner.
        </p>
        <p>
          <strong>3. User Conduct:</strong> You agree to use TrickBuzz only for
          lawful purposes. You must not post or transmit any material that is
          unlawful, harmful, threatening, abusive, harassing, defamatory,
          vulgar, obscene, or otherwise objectionable. TrickBuzz reserves the
          right to remove any content or restrict access to any user who
          violates these terms.
        </p>
        <p>
          <strong>4. Intellectual Property:</strong> All intellectual property
          rights in the website and its content are owned by TrickBuzz or its
          licensors. Unauthorized use of any materials may violate copyright,
          trademark, and other laws.
        </p>
        <p>
          <strong>5. Third-Party Links:</strong> TrickBuzz may contain links to
          third-party websites for your convenience. We do not endorse or assume
          responsibility for the content, privacy policies, or practices of any
          external sites. Accessing third-party links is at your own risk.
        </p>
        <p>
          <strong>6. Disclaimer:</strong> The information on TrickBuzz is
          provided &quot;as is&quot; without warranties of any kind, either
          express or implied. We do not warrant the accuracy, completeness, or
          reliability of any content. Your use of the website is at your own
          risk.
        </p>
        <p>
          <strong>7. Limitation of Liability:</strong> TrickBuzz, its
          affiliates, and contributors shall not be liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from
          your use of, or inability to use, the website or any content therein.
        </p>
        <p>
          <strong>8. Changes to Terms:</strong> TrickBuzz reserves the right to
          update or modify these Terms & Conditions at any time without prior
          notice. It is your responsibility to review this page periodically for
          changes. Continued use of the website after any modifications
          constitutes acceptance of the updated terms.
        </p>
        <p>
          <strong>9. Governing Law:</strong> These Terms & Conditions are
          governed by and construed in accordance with the laws of the
          jurisdiction in which TrickBuzz operates, without regard to its
          conflict of law provisions.
        </p>
        <p>
          <strong>10. Contact Us:</strong> If you have any questions or concerns
          about these Terms & Conditions, please contact us through our Contact
          page. We value your feedback and are committed to maintaining a safe
          and respectful environment for all users.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
