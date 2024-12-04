import { css } from "@emotion/react";
import Link from "next/link";

import type { Post } from "@/types";

import PostCard from "./elements/PostCard";

interface Props {
  postList: Post[];
}

export default function PostList(props: Props) {
  const { postList } = props;

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      {postList.map((post, index) => (
        <Link key={index} href={`post/${post.slug}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
}
