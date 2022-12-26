import Image from "next/image";

import type { PostType } from "@/types";

import * as styles from "./styles";

interface Props {
  post: PostType;
}

export default function PostCard({ post }: Props) {
  return (
    <article css={styles.postContainer}>
      <Image alt="" src={post.thumbnail} width={216} height={216} />
      <div css={styles.textWrapper}>
        <span css={styles.title}>{post.title || "제목 없음"} </span>
        <span css={styles.description}>{post.description || "설명 없음"}</span>
        <span css={styles.date}>{post.date.toDateString()}</span>
      </div>
    </article>
  );
}
