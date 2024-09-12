'use client'
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";
export interface IPost {
  id: number;
  title: string;
}

// export const metadata: Metadata = {
//   title: "Blog | Next App",
//   description: "blog page",
// };

export const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, [])

  return (
    <div className="page">
      <h1>Blog Page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
};

export default Blog;
