import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { HomeView } from "@/views";

import { SEO } from "@/components";

import type { Post } from "@/types";

interface Props {
  postList: Post[];
}

export default function HomePage({ postList }: Props) {
  return (
    <>
      <SEO title="온승찬 블로그" description="안녕하세요" url="" />
      <HomeView postList={postList} />
    </>
  );
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
