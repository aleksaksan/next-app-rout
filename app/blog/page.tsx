'use client';
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
export interface IPost {
  id: number;
  title: string;
}

// export const metadata: Metadata = {
//   title: "Blog | Next App",
//   description: "blog page",
// };

export const Blog = () => {

  return (
    <div className="page">
      <h1>Blog Page</h1>
      <PostSearch  />
      <Posts />
    </div>
  );
};

export default Blog;
