import type { PostType } from "@/types";

import { PostList } from "./components";
import { Hero } from "./components/Hero/Three";
import Layout from "./layout";

interface Props {
  postList: PostType[];
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
