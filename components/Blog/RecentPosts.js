import { getRecentPosts } from "../../hooks/getRecentPosts";
import PostCard from "../ui/post-card";

const RecentPosts = async () => {
  const articles = await getRecentPosts();

  return (
    <div className="mt-8 space-y-2 px-4 sm:px-4 md:px-6 lg:space-y-3 lg:p-0">
      {articles.map((article, index) => (
        <PostCard key={index} article={article} />
      ))}
    </div>
  );
};

export default RecentPosts;
