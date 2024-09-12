import { Metadata } from "next";

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  });
  return response.json();
}

interface IPost {
  title: string;
  body: string;
}

type Props = {
  params: { id: string };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const { id } = params;

  return {
    title: `Blog - ${id}`,
  };
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: IPost = await getData(id);
  console.log(post);

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
