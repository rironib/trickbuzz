"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HomePageLoading from "./HomePageLoading";
import { Pagination } from "@heroui/react";
import PostCard from "../ui/post-card";

const HomePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        await fetch(`/api/posts?page=${page}`)
          .then((res) => res.json())
          .then((data) => {
            setPosts(data.posts);
            setTotalPages(data.totalPages);
          });
      } catch (e) {
        console.error("Failed to fetch articles:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (loading) {
    return <HomePageLoading />;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="py-10 text-center text-red-500">No posts found!</div>
    );
  }

  const handleChange = (newPage) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="space-y-2 lg:space-y-3">
        {posts.map((article) => (
          <PostCard
            key={article.id || article.url || article.title}
            article={article}
          />
        ))}
      </div>
      <Pagination
        onChange={handleChange}
        page={page}
        total={totalPages}
        showControls
      />
    </div>
  );
};

export default HomePage;
