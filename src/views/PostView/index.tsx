import { css } from "@emotion/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";

import { BREAK_POINT } from "@/constants";

import type { Post as PostType } from "@/types";

import { Anchor, Article } from "./components";
import { ArticleAnchorContext } from "./contexts";
import Layout from "./layout";
import type { Anchor as AnchorType } from "./types";

interface Props {
  post: PostType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function PostView(props: Props) {
  const { post, mdxSource } = props;

  const [anchors, setAnchors] = useState<AnchorType[]>([]);

  return (
    <Layout>
      <div
        css={css`
          @media screen and (max-width: ${BREAK_POINT}px) {
            display: none;
          }
        `}
      />

      <ArticleAnchorContext.Provider value={{ anchors, setAnchors }}>
        <Article post={post} mdxSource={mdxSource} />
        <Anchor />
      </ArticleAnchorContext.Provider>
    </Layout>
  );
}
