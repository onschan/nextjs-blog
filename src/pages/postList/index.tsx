import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import path from "path";

import { PostListView } from "@/views";

import { SEO } from "@/components";

import type { Post } from "@/types";

interface Props {
  postList: Post[];
  tagsWithCount: { tag: string; count: number }[];
  currentTag: string | null;
  totalPosts: number;
}

export default function PostListPage({ postList, tagsWithCount, currentTag, totalPosts }: Props) {
  return (
    <>
      <SEO
        title={currentTag ? `Posts about ${currentTag}` : "All Posts."}
        url={currentTag ? `/postList?tag=${currentTag}` : "/postList"}
      />
      <PostListView
        postList={postList}
        tagsWithCount={tagsWithCount}
        currentTag={currentTag}
        totalPosts={totalPosts}
      />
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

  const tagsWithCount = Array.from(
    allPosts
      .flatMap(post => post.tags)
      .reduce((acc, tag) => acc.set(tag, (acc.get(tag) || 0) + 1), new Map<string, number>())
  ).map(([tag, count]) => ({ tag, count }));

  const postList = tag ? allPosts.filter(post => post.tags.includes(tag as string)) : allPosts;

  return {
    props: {
      postList,
      tagsWithCount,
      currentTag: tag || null,
      totalPosts: allPosts.length,
    },
  };
};
