import ArticleSchema from "@/components/ArticleSchema";
import InArticleAds from "@/components/Ads/InArticleAds";
import RecentPosts from "@/components/Blog/RecentPosts";
import { getPost } from "@/hooks/getPost";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  RiBookLine,
  RiCalendarLine,
  RiChat1Line,
  RiHeartLine,
} from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return notFound();
  const { title, description, user, cover_image, tags, social_image } = article;

  return {
    title: title,
    description: description,
    keywords: tags,
    author: user.name,
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: title,
      description: description,
      images: [social_image || cover_image],
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      site_name: "TrickBuzz",
      locale: "en_BD",
    },
    twitter: {
      card: "summary_large_image",
      url: `${baseUrl}/blog/${slug}`,
      title: title,
      description: description,
      images: [social_image || cover_image],
      site: "@TrickBuzz",
      creator: "@trickbuzz",
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return notFound();

  const {
    title,
    body_html,
    cover_image,
    tags,
    comments_count,
    public_reactions_count,
    reading_time_minutes,
    social_image,
    published_at,
    published_timestamp,
  } = article;

  const formattedDate = formatDistanceToNow(
    new Date(article.published_at || article.published_timestamp),
    { addSuffix: true },
  );

  return (
    <>
      <ArticleSchema articleData={article} />
      <div className="w-full md:col-span-6">
        <header className="px-4 sm:px-4 md:px-6 lg:p-0">
          <Image
            src={cover_image || social_image}
            alt={title || "Blog cover image"}
            width={1200}
            height={760}
            className="h-auto w-full rounded-xl"
          />
          <div className="p-6 xl:p-8">
            <div className="text-default-700 dark:text-default-500 mb-4 flex items-center justify-center gap-4 font-medium lg:gap-6">
              <div className="flex items-center gap-2">
                <RiCalendarLine /> {formattedDate}
              </div>
              <div className="flex items-center gap-2">
                <RiChat1Line /> {comments_count ?? 0}
              </div>
              <div className="flex items-center gap-2">
                <RiHeartLine /> {public_reactions_count ?? 0}
              </div>
              <div className="flex items-center gap-2">
                <RiBookLine /> {reading_time_minutes ?? 0}
              </div>
            </div>
            <h1 className="text-center text-2xl font-bold lg:text-3xl dark:text-white">
              {title}
            </h1>
          </div>
        </header>
        <div className="pt-4 sm:pt-6">
          <InArticleAds AdSlot={3578982468} />
          <div
            className="content text-styles my-6 px-4 sm:px-4 md:px-6 lg:p-0"
            dangerouslySetInnerHTML={{ __html: body_html }}
          />
          <InArticleAds AdSlot={2265900791} />
          <div className="mt-8 px-4 text-center sm:px-4 md:px-6 lg:p-0 dark:text-slate-500">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-default-200 text-default-700 m-1 inline-block rounded px-2 py-1 text-base"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <RecentPosts />
    </>
  );
}
