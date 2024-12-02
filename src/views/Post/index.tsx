import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import type { PostInfoType } from "@/types";

import { Anchor, Article } from "./components";
import { ArticleAnchorContext } from "./contexts";
import Layout from "./layout";
import type { Anchor as AnchorType } from "./types";

interface Props {
  postInfo: PostInfoType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Post(props: Props) {
  const { postInfo, mdxSource } = props;

  const [anchors, setAnchors] = useState<AnchorType[]>([]);

  return (
    <Layout>
      <div />
      <ArticleAnchorContext.Provider value={{ anchors, setAnchors }}>
        <Article postInfo={postInfo} mdxSource={mdxSource} />
        <Anchor />
      </ArticleAnchorContext.Provider>
    </Layout>
  );
}
