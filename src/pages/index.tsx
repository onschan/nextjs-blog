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
  const dirs = fs.readdirSync(path.join("src", "posts"));

  const postList = dirs.map(dirName => {
    const fileName = fs
      .readdirSync(path.join("src", "posts", dirName))
      .filter(file => file.endsWith(".mdx"))[0];

    const markdownWithMeta = fs.readFileSync(path.join("src", "posts", dirName, fileName), "utf-8");

    const { data: postInfo } = matter(markdownWithMeta);

    return {
      postInfo,
      slug: dirName,
    };
  });

  return {
    props: {
      postList,
    },
  };
};
