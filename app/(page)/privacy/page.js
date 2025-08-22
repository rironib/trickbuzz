import socialCover from "@/public/images/social_cover.png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata() {
  const data = {
    title: "Privacy Policy - TrickBuzz",
    description:
      "Read our Privacy Policy to understand how TrickBuzz collects, uses, and protects your personal information when you use our website and services.",
    keywords:
      "privacy, policy, trickbuzz, data protection, personal information",
  };

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    author: "trickbuzz",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/page/privacy`,
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
      url: `${baseUrl}/page/privacy`,
      type: "article",
      site_name: "TrickBuzz",
      locale: "en_BD",
    },
    twitter: {
      card: "summary_large_image",
      url: `${baseUrl}/page/privacy`,
      title: data.title,
      description: data.description,
      images: [`${socialCover.src}`],
      site: "@TrickBuzz",
      creator: "@trickbuzz",
    },
  };
}

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="mb-6 text-center text-2xl font-bold md:text-3xl xl:text-4xl">
          Privacy Policy
        </div>
        <div className="space-y-3 *:text-justify">
          <p>
            At TrickBuzz, your privacy is of utmost importance to us. We are
            committed to protecting your personal information and being
            transparent about how we collect, use, and safeguard your data. This
            Privacy Policy outlines the types of information we gather when you
            visit our website, how we use it, and the choices you have regarding
            your information.
          </p>
          <p>
            When you interact with TrickBuzz, we may collect information such as
            your name, email address, IP address, and browsing behavior. This
            data helps us improve our services, personalize your experience, and
            provide relevant content and advertisements. We use cookies and
            similar technologies to enhance site functionality and analyze user
            engagement, but you can manage your cookie preferences at any time
            through your browser settings.
          </p>
          <p>
            We take data security seriously and implement industry-standard
            measures to protect your information from unauthorized access,
            alteration, or disclosure. Your personal data is never sold or
            shared with third parties for marketing purposes without your
            explicit consent. However, we may share information with trusted
            partners who assist us in operating our website, conducting
            business, or serving you, provided they agree to keep this
            information confidential.
          </p>
          <p>
            TrickBuzz may contain links to external sites that are not operated
            by us. Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies. We encourage you to
            review the privacy statements of any third-party websites you visit.
          </p>
          <p>
            Our Privacy Policy is subject to change as we continue to evolve and
            improve our services. We will notify you of any significant updates
            by posting the revised policy on this page. Your continued use of
            TrickBuzz after such changes constitutes your acceptance of the
            updated policy.
          </p>
          <p>
            If you have any questions, concerns, or requests regarding your
            personal information or our privacy practices, please do not
            hesitate to contact us through our Contact page. We value your trust
            and are dedicated to ensuring your experience with TrickBuzz is
            safe, secure, and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
