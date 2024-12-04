import Image from "next/image";

import type { Post } from "@/types";

import * as styles from "./styles";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <article css={styles.postContainer}>
      <Image alt={post.title} src={post.thumbnail} width={216} height={216} />
      <div css={styles.textWrapper}>
        <span css={styles.title}>{post.title || "무제"} </span>
        <span css={styles.description}>{post.description}</span>
        <span css={styles.date}>{post.date}</span>
      </div>
    </article>
  );
}
