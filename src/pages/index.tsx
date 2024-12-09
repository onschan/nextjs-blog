import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { HomeView } from "@/views";

import type { Post } from "@/types";

interface Props {
  postList: Post[];
}

export default function HomePage({ postList }: Props) {
  return <HomeView postList={postList} />;
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("_posts"));

  const postList = files.map(fileName => {
    const markdownWithMeta = fs.readFileSync(path.join("_posts", fileName), "utf-8");

    const { data: postData } = matter(markdownWithMeta);

    return {
      ...postData,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return {
    props: {
      postList,
    },
  };
};
