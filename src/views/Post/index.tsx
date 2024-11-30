import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";

import type { PostInfoType } from "@/types";

import { Anchor, Article } from "./components";
import { ArticleAnchorContext } from "./contexts";
import Layout from "./layout";

interface Props {
  postInfo: PostInfoType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Post(props: Props) {
  const { postInfo, mdxSource } = props;

  const [anchors, setAnchors] = useState<Anchor[]>([]);

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
