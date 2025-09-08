export const revalidate = 3600;

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const devtoUsername = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

  let articles = [];

  try {
    const res = await fetch(`${apiUrl}?username=${devtoUsername}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      articles = await res.json();
    }
  } catch (e) {
    console.error("Error fetching articles:", e);
  }

  const now = new Date().toISOString();

  const staticRoutes = [
    { url: `${baseUrl}/`, lastmod: now },
    { url: `${baseUrl}/about`, lastmod: now },
    { url: `${baseUrl}/contact`, lastmod: now },
    { url: `${baseUrl}/privacy`, lastmod: now },
    { url: `${baseUrl}/terms`, lastmod: now },
  ];

  const dynamicRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article?.slug}`,
    lastmod: article?.published_at || article?.published_timestamp || now,
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
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
