import Link from "next/link";

import * as styles from "./styles";

interface Props {
  tagsWithCount: { tag: string; count: number }[];
  currentTag: string | null;
  totalPosts: number;
}

export default function Tag(props: Props) {
  const { tagsWithCount, currentTag, totalPosts } = props;
  const visibleTags = tagsWithCount.slice(0, 8);
  const hiddenTags = tagsWithCount.slice(8);
  const isCurrentTagHidden = hiddenTags.some(({ tag }) => tag === currentTag);

  const renderTag = ({ tag, count }: { tag: string; count: number }) => (
    <Link
      key={tag}
      css={[styles.tag, currentTag === tag && styles.activeTag]}
      href={{ pathname: "/postList", query: { tag } }}
      aria-current={currentTag === tag ? "page" : undefined}
    >
      <span>{tag}</span>
      <span css={styles.tagCount}>{count}</span>
    </Link>
  );

  return (
    <nav css={styles.container} aria-label="포스트 태그">
      <Link
        href="/postList"
        css={[styles.tag, !currentTag && styles.activeTag]}
        aria-current={!currentTag ? "page" : undefined}
      >
        <span>All</span>
        <span css={styles.tagCount}>{totalPosts}</span>
      </Link>
      {visibleTags.map(renderTag)}
      {hiddenTags.length > 0 && (
        <details css={styles.more} open={isCurrentTagHidden}>
          <summary css={styles.moreSummary}>More</summary>
          <div css={styles.moreContent}>{hiddenTags.map(renderTag)}</div>
        </details>
      )}
    </nav>
  );
}
