import { css } from "@emotion/react";
import Link from "next/link";

import type { Post } from "@/types";

import * as styles from "./styles";

import PostCard from "./elements/PostCard";

interface Props {
  postList: Post[];
}

export default function PostList(props: Props) {
  const { postList } = props;

  return (
    <div css={styles.container}>
      {postList.map(post => (
        <Link key={post.slug} href={`post/${post.slug}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
