import type { PostType } from "@/types";

import { PostList } from "./components";
import Layout from "./layout";

interface Props {
  postList: PostType[];
}

export default function Home(props: Props) {
  const { postList } = props;

  return (
    <Layout>
      Frontend Developer
      <PostList postList={postList} />
    </Layout>
  );
}
