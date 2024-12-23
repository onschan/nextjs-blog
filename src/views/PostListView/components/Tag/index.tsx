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
    <div css={styles.container}>
      <Link href={`/postList`} css={[styles.tag, !currentTag && styles.activeTag]}>
        All ({totalPosts})
      </Link>
      {tagsWithCount.map(({ tag, count }) => (
        <Link
          key={tag}
          css={[styles.tag, currentTag === tag && styles.activeTag]}
          href={`/postList?tag=${tag}`}
        >
          {tag} ({count})
        </Link>
      ))}
    </div>
  );
}
