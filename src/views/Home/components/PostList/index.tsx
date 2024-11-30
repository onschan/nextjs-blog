import Link from "next/link";

import type { PostType } from "@/types";

import PostCard from "./elements/PostCard";

interface Props {
  postList: PostType[];
}

export default function PostList(props: Props) {
  const { postList } = props;

  return (
    <div>
      {postList.map((post, index) => (
        <Link key={index} href={`post/${post.slug}`}>
          <PostCard post={post.postInfo} />
        </Link>
      ))}
    </div>
  );
}
