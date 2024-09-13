'use client';
import { IPost } from "@/app/blog/page";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

// type Props = {
//   posts: IPost[];
// }

const Posts = () => {
  
  const [posts, loading, getAllPosts] = usePosts(state => [
    state.posts,
    state.loading,
    state.getAllPosts
  ], shallow);

  useEffect(() => {
    getAllPosts();
  },[getAllPosts]);

  return loading ? <h3>Loading...</h3> : 
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
};

export default Posts;