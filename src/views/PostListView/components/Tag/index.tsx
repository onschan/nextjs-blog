import Link from "next/link";

import * as styles from "./styles";

interface Props {
  tagsWithCount: { tag: string; count: number }[];
  currentTag: string | null;
  totalPosts: number;
}

export default function Tag(props: Props) {
  const { tagsWithCount, currentTag, totalPosts } = props;

  return (
    <nav css={styles.container} aria-label="포스트 태그">
      <Link
        href="/postList"
        css={[styles.tag, !currentTag && styles.activeTag]}
        aria-current={!currentTag ? "page" : undefined}
      >
        All ({totalPosts})
      </Link>
      {tagsWithCount.map(({ tag, count }) => (
        <Link
          key={tag}
          css={[styles.tag, currentTag === tag && styles.activeTag]}
          href={{ pathname: "/postList", query: { tag } }}
          aria-current={currentTag === tag ? "page" : undefined}
        >
          {tag} ({count})
        </Link>
      ))}
    </nav>
  );
}
