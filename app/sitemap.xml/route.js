export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const devtoUsername = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

  let articles = [];

  try {
    const res = await fetch(`${apiUrl}?username=${devtoUsername}`, {
      next: { revalidate: 60 },
    });
    articles = await res.json();
  } catch (e) {
    console.error(e);
  }

  const staticRoutes = [
    { url: `${baseUrl}/`, lastmod: "2025-04-15T18:28:45.137Z" },
    { url: `${baseUrl}/about`, lastmod: "2025-04-15T18:28:45.137Z" },
    { url: `${baseUrl}/contact`, lastmod: "2025-04-15T18:28:45.137Z" },
    { url: `${baseUrl}/privacy`, lastmod: "2025-04-15T18:28:45.137Z" },
    { url: `${baseUrl}/terms`, lastmod: "2025-04-15T18:28:45.137Z" },
  ];

  const dynamicRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article?.slug}`,
    lastmod:
      article?.published_at ||
      article?.published_timestamp ||
      "2025-04-15T18:28:45.137Z",
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        ({ url, lastmod }) => `
    <url>
        <loc>${url}</loc>
        <lastmod>${lastmod}</lastmod>
    </url>`,
      )
      .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
