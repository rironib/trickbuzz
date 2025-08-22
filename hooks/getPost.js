const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const devtoUsername = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

export const getPost = async (slug) => {
  const res = await fetch(`${apiUrl}/${devtoUsername}/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};
