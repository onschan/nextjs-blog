import Link from "next/link";

import type { RelatedPost } from "@/types";

import * as styles from "./styles";

interface Props {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <nav css={styles.container} aria-labelledby="related-posts-heading">
      <h2 id="related-posts-heading" css={styles.heading}>
        함께 읽으면 좋은 글
      </h2>
      <ul css={styles.list}>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`} css={styles.item}>
              <span className="title" css={styles.title}>
                {post.title}
              </span>
              <span css={styles.description}>{post.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
