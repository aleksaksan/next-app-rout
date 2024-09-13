import { IPost } from "@/app/blog/page";
import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { create } from "zustand";

type UsePostsType = {
  posts: IPost[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePostsType>(set => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({loading: true});
    const posts = await getAllPosts();
    set({posts, loading: false});
  },
  getPostsBySearch: async (search) => {
    set({loading: true});
    const posts = await getPostsBySearch(search);
    set({posts, loading: false});
  },
}));
