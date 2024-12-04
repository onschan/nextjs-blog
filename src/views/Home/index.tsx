import type { Post } from "@/types";

import { PostList } from "./components";
import { Hero } from "./components/Hero/Three";
import Layout from "./layout";

interface Props {
  postList: Post[];
}

export default function Home(props: Props) {
  const { postList } = props;

  return (
    <Layout>
      <Hero />
      <PostList postList={postList} />
    </Layout>
  );
}
