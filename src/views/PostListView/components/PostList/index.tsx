import type { Post } from "@/types";

import * as styles from "./styles";

import PostCard from "./elements/PostCard";

interface Props {
  postList: Post[];
  currentTag: string | null;
}

export default function PostList(props: Props) {
  const { postList, currentTag } = props;

  return (
    <section css={styles.container} aria-live="polite">
      {postList.length > 0 ? (
        postList.map(post => <PostCard key={post.slug} post={post} />)
      ) : (
        <p css={styles.empty}>
          {currentTag ? `"${currentTag}" 태그의 글이 아직 없습니다.` : "아직 등록된 글이 없습니다."}
        </p>
      )}
    </section>
  );
}
