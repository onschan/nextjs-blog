import Image from "next/image";

import type { Post } from "@/types";

import * as styles from "./styles";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <article css={styles.postContainer}>
      <div css={styles.imageWrapper}>
        <Image alt={post.title} src={post.thumbnail} width={160} height={160} css={styles.image} />
      </div>
      <div css={styles.textWrapper}>
        <span css={styles.title}>{post.title || "무제"} </span>
        <span css={styles.description}>{post.description || post.preview}</span>
        <span css={styles.date}>{post.date}</span>
      </div>
    </article>
  );
}
