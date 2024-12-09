import type { Post } from "@/types";

import { PostList } from "./components";
import Layout from "./layout";

interface Props {
  postList: Post[];
}

export default function PostListView(props: Props) {
  const { postList } = props;

  return (
    <Layout>
      <PostList postList={postList} />
    </Layout>
  );
}
