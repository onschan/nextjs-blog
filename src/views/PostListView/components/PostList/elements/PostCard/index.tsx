import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/types";

import * as styles from "./styles";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link key={post.slug} href={`post/${post.slug}`} css={styles.postContainer}>
      <span className="title" css={styles.title}>
        {post.title || "무제"}
      </span>
      <span css={styles.description}>{post.description}</span>
      <span css={styles.date}>{post.date}</span>
    </Link>
  );
}
