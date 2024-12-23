import type { Post } from "@/types";

import { PostList, Tag } from "./components";
import Layout from "./layout";

interface Props {
  postList: Post[];
  tags: string[];
  currentTag: string | null;
}

export default function PostListView(props: Props) {
  const { postList, tags, currentTag } = props;

  return (
    <Layout>
      <Tag tags={tags} currentTag={currentTag} />
      <PostList postList={postList} />
    </Layout>
  );
}
