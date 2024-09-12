import { Metadata } from "next";

type Props = {
  params: { id: string };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const { id } = params;

  return {
    title: `Blog - ${id}`,
  };
};

const Post = ({ params }: Props) => {
  const { id } = params;

  return (
    <div className="page">
      <div>Post page {id}</div>
    </div>
  );
};

export default Post;
