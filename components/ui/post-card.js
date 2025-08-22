import Image from "next/image";
import { RiArrowRightLine, RiCalendarLine, RiTimeLine } from "react-icons/ri";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const PostCard = ({ article }) => {
  const formattedDate = formatDistanceToNow(
    new Date(article.published_at || article.published_timestamp),
    { addSuffix: true },
  );

  return (
    <div
      key={article.id}
      className="dark:bg-default-100 h-max overflow-clip rounded-md border bg-white dark:border-slate-700"
    >
      <Link key={article.id} href={`/blog/${article.slug}`}>
        <div className="grid w-full sm:grid-cols-5">
          <Image
            src={article.cover_image || article.social_image}
            alt={article.title}
            width="1200"
            height="760"
            className="h-full w-full sm:col-span-2"
          />
          <div className="space-y-3 p-4 sm:col-span-3 lg:p-4 dark:border-slate-700">
            <h3 className="mb-4 text-lg font-semibold md:text-xl lg:text-xl dark:text-slate-300">
              {article.title}
            </h3>
            <p className="text-slate-500">{article.description}</p>
            <div className="flex justify-between text-xs font-light sm:text-sm">
              <div className="flex gap-2">
                <div className="flex items-center gap-1 dark:text-gray-500">
                  <RiCalendarLine /> {formattedDate}
                </div>
                <div className="flex items-center gap-1 dark:text-gray-500">
                  <RiTimeLine /> {article.reading_time_minutes} min
                </div>
              </div>
              <div className="flex items-center gap-2 dark:text-blue-500">
                Continue Reading <RiArrowRightLine />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
