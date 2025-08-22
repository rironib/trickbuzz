const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const ArticleSchema = ({ articleData }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.title,
    description: articleData.description,
    author: {
      "@type": "Person",
      name: articleData.user.name,
      url: articleData.user.website_url || baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "TrickBuzz",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    datePublished: articleData.published_at || articleData.published_timestamp,
    dateModified:
      articleData.edited_at ||
      articleData.published_at ||
      articleData.published_timestamp,
    image: articleData.cover_image || articleData.social_image,
    url: `${baseUrl}/blog/${articleData.slug}` || articleData.canonical_url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${articleData.slug}` || articleData.canonical_url,
    },
    inLanguage: articleData.language || "bn",
    keywords: articleData.tags.join(", "),
    articleSection: articleData.tag_list,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ArticleSchema;
