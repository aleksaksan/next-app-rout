import { Metadata } from "next";
import Link from "next/link";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

interface IPost {
  id: number;
  title: string;
}

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "blog page",
};

const Blog = async () => {
  const posts = await getData();
  return (
    <div className="page">
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: IPost) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
