const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const devtoUsername = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

export const getRecentPosts = async () => {
  const pageSize = 4;
  const res = await fetch(
    `${apiUrl}?username=${devtoUsername}&page=1&per_page=${pageSize}`,
    { cache: "no-store" },
  );
  return await res.json();
};
