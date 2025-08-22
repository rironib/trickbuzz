export const revalidate = 3600;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const devtoUsername = process.env.NEXT_PUBLIC_DEVTO_USERNAME;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const pageSize = 10;

  const res = await fetch(
    `${apiUrl}?username=${devtoUsername}&page=${page}&per_page=${pageSize}`,
  );
  const posts = await res.json();

  const countRes = await fetch(`${apiUrl}?username=${devtoUsername}`);
  const allPosts = await countRes.json();
  const totalPages = Math.ceil(allPosts.length / pageSize);

  return Response.json({ posts, totalPages });
}
