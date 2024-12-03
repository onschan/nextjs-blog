import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { HomeView } from "@/views";

import type { PostType } from "@/types";

interface Props {
  postList: PostType[];
}

export default function HomePage({ postList }: Props) {
  return <HomeView postList={postList} />;
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const postList = files.map(fileName => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "posts", fileName), "utf-8");

    const { data: postInfo } = matter(markdownWithMeta);

    return {
      postInfo,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return {
    props: {
      postList,
    },
  };
};
