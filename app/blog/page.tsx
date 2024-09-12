import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "blog page",
};
const Blog = () => {
  return (
    <div className="page">
      <h1>Blog Page</h1>
    </div>
  );
};

export default Blog;
