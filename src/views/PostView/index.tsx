import { css } from "@emotion/react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";

import { BREAK_POINT } from "@/constants";

import type { Post as PostType, RelatedPost } from "@/types";

import { Anchor, Article } from "./components";
import { ArticleAnchorContext } from "./contexts";
import Layout from "./layout";
import type { Anchor as AnchorType } from "./types";

interface Props {
  post: PostType;
  mdxSource: MDXRemoteSerializeResult;
  relatedPosts: RelatedPost[];
}

export default function PostView(props: Props) {
  const { post, mdxSource, relatedPosts } = props;

  const [anchors, setAnchors] = useState<AnchorType[]>([]);

  return (
    <Layout>
      <div className="wide-only" />
      <ArticleAnchorContext.Provider value={{ anchors, setAnchors }}>
        <Article post={post} mdxSource={mdxSource} relatedPosts={relatedPosts} />
        <Anchor />
      </ArticleAnchorContext.Provider>
    </Layout>
  );
}
