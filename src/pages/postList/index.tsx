import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import path from "path";

import { PostListView } from "@/views";

import { SEO } from "@/components";

import type { Post } from "@/types";

interface Props {
  postList: Post[];
  tags: string[];
  currentTag: string | null;
}

export default function PostListPage({ postList, tags, currentTag }: Props) {
  return (
    <>
      <SEO
        title={currentTag ? `Posts about ${currentTag}` : "All Posts."}
        url={currentTag ? `/postList?tag=${currentTag}` : "/postList"}
      />
      <PostListView postList={postList} tags={tags} currentTag={currentTag} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { tag } = context.query;

  const files = fs.readdirSync(path.join("_posts"));

  const allPosts = files.map(fileName => {
    const markdownWithMeta = fs.readFileSync(path.join("_posts", fileName), "utf-8");
    const { data: postData } = matter(markdownWithMeta);

    return {
      ...postData,
      slug: fileName.replace(".mdx", ""),
    };
  }) as Post[];

  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags))).sort();

  const postList = tag ? allPosts.filter(post => post.tags.includes(tag as string)) : allPosts;

  return {
    props: {
      postList,
      tags,
      currentTag: tag || null,
    },
  };
};
