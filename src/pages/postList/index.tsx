import fs from "fs";
import matter from "gray-matter";
import { useRouter } from "next/router";
import path from "path";

import { PostListView } from "@/views";

import { SEO } from "@/components";

import type { Post } from "@/types";

interface Props {
  allPosts: Post[];
  tagsWithCount: { tag: string; count: number }[];
  latestPostDate: string | null;
}

const getTagFromPath = (asPath: string) => {
  const [, queryString] = asPath.split("?");

  if (!queryString) {
    return null;
  }

  return new URLSearchParams(queryString).get("tag");
};

export default function PostListPage({ allPosts, tagsWithCount, latestPostDate }: Props) {
  const router = useRouter();
  const tag =
    typeof router.query.tag === "string" ? router.query.tag : getTagFromPath(router.asPath);

  const postList = tag ? allPosts.filter(post => post.tags.includes(tag)) : allPosts;

  return (
    <>
      <SEO title="Post List" url="/postList" />
      <PostListView
        postList={postList}
        tagsWithCount={tagsWithCount}
        currentTag={tag || null}
        totalPosts={allPosts.length}
        latestPostDate={latestPostDate}
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
  )
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);

  return {
    props: {
      allPosts,
      tagsWithCount,
      latestPostDate: allPosts[0]?.date || null,
    },
  };
};
