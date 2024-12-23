import Link from "next/link";

import * as styles from "./styles";

interface Props {
  tags: string[];
  currentTag: string | null;
}

export default function Tag(props: Props) {
  const { tags, currentTag } = props;

  return (
    <div css={styles.container}>
      <Link href={`/postList`} css={[styles.tag, !currentTag && styles.activeTag]}>
        All
      </Link>
      {tags.map(tag => (
        <Link
          key={tag}
          css={[styles.tag, currentTag === tag && styles.activeTag]}
          href={`/postList?tag=${tag}`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
