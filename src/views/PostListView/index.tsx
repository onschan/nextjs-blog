import type { Post } from "@/types";

import * as styles from "./styles";

import { PostList, Tag } from "./components";
import Layout from "./layout";

interface Props {
  postList: Post[];
  tagsWithCount: { tag: string; count: number }[];
  currentTag: string | null;
  totalPosts: number;
  latestPostDate: string | null;
}

export default function PostListView(props: Props) {
  const { postList, tagsWithCount, currentTag, totalPosts, latestPostDate } = props;

  return (
    <Layout>
      <section css={styles.hero}>
        <div css={styles.kicker}>Writing archive</div>
        <div css={styles.headingRow}>
          <h1 css={styles.title}>{currentTag ? currentTag : "Posts"}</h1>
          <p css={styles.count}>{postList.length} posts</p>
        </div>
        {!currentTag && (
          <p css={styles.description}>
            기술을 깊게 파고들며 배운 것과 제품을 만들며 고민한 것을 정리합니다.
          </p>
        )}
        <p css={styles.meta}>
          Total {totalPosts} posts
          {latestPostDate && ` · Latest ${latestPostDate}`}
        </p>
      </section>
      <Tag tagsWithCount={tagsWithCount} currentTag={currentTag} totalPosts={totalPosts} />
      <PostList postList={postList} currentTag={currentTag} />
    </Layout>
  );
}
