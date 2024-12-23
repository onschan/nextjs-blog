import type { Post } from "@/types";

import { PostList, Tag } from "./components";
import Layout from "./layout";

interface Props {
  postList: Post[];
  tagsWithCount: { tag: string; count: number }[];
  currentTag: string | null;
  totalPosts: number;
}

export default function PostListView(props: Props) {
  const { postList, tagsWithCount, currentTag, totalPosts } = props;

  return (
    <Layout>
      <Tag tagsWithCount={tagsWithCount} currentTag={currentTag} totalPosts={totalPosts} />
      <PostList postList={postList} />
    </Layout>
  );
}
