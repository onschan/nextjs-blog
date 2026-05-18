import Link from "next/link";

import type { Post } from "@/types";

import * as styles from "./styles";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link key={post.slug} href={`/post/${post.slug}`} css={styles.postContainer}>
      <span className="title" css={styles.title}>
        {post.title || "무제"}
      </span>
      <span css={styles.description}>{post.description}</span>
      <span css={styles.meta}>
        <time dateTime={post.date}>{post.date}</time>
        {post.tags.length > 0 && (
          <span css={styles.tags} aria-label="태그">
            {post.tags.map(tag => (
              <span key={tag} css={styles.tag}>
                {tag}
              </span>
            ))}
          </span>
        )}
      </span>
    </Link>
  );
}
