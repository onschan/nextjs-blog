import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import path from "path";

import { PostListView } from "@/views";

import { SEO } from "@/components";

import type { Post } from "@/types";

interface Props {
  allPosts: Post[];
  tagsWithCount: { tag: string; count: number }[];
}

export default function PostListPage({ allPosts, tagsWithCount }: Props) {
  const router = useRouter();
  const { tag } = router.query as { tag?: string };

  const postList = tag ? allPosts.filter(post => post.tags.includes(tag as string)) : allPosts;

  return (
    <>
      <SEO title="Post List" url="/postList" />
      <PostListView
        postList={postList}
        tagsWithCount={tagsWithCount}
        currentTag={tag || null}
        totalPosts={allPosts.length}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("_posts"));

  const allPosts = files.map(fileName => {
    const markdownWithMeta = fs.readFileSync(path.join("_posts", fileName), "utf-8");
    const { data: postData } = matter(markdownWithMeta);

    return {
      ...postData,
      slug: fileName.replace(".mdx", ""),
    };
  }) as Post[];

  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const tagsWithCount = Array.from(
    allPosts
      .flatMap(post => post.tags)
      .reduce((acc, tag) => acc.set(tag, (acc.get(tag) || 0) + 1), new Map<string, number>())
  ).map(([tag, count]) => ({ tag, count }));

  return {
    props: {
      allPosts,
      tagsWithCount,
    },
  };
};
