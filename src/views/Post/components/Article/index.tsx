import { MDXRemote } from "next-mdx-remote";
import { useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useMount } from "react-use";

import type { PostInfoType } from "@/types";

import { useArticleAnchor } from "./hooks";

import { useArticleAnchorContext } from "../../contexts";

interface Props {
  postInfo: PostInfoType;
  mdxSource: any;
}

export default function Article(props: Props) {
  const { postInfo, mdxSource } = props;
  const { title, date } = postInfo;

  const { articleRef } = useArticleAnchor();

  return (
    <article ref={articleRef}>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
    </article>
  );
}
