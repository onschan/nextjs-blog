import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

import PostCard from "@/components/PostCard";

import type { PostType } from "@/types";

import * as styles from "@/styles/pages";

import MainLayout from "@/layout/MainLayout";

interface Props {
  postList: PostType[];
}

export default function HomePage({ postList }: Props) {
  return (
    <MainLayout>
      <div css={styles.postListWrapper}>
        {postList.map((post, index) => (
          <Link key={index} href={`post/${post.slug}`}>
            <PostCard post={post.postInfo} />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const postList = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join("src", "posts", filename), "utf-8");

    const { data: postInfo } = matter(markdownWithMeta);

    return {
      postInfo,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      postList,
    },
  };
};
