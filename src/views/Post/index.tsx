import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";
import { useWindowSize } from "react-use";

import { BREAK_POINT } from "@/constants";

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

  const { width: browserWidth } = useWindowSize();

  const isWide = browserWidth > BREAK_POINT;

  return (
    <Layout>
      {isWide && <div />}
      <ArticleAnchorContext.Provider value={{ anchors, setAnchors }}>
        <Article postInfo={postInfo} mdxSource={mdxSource} />
        {isWide && <Anchor />}
      </ArticleAnchorContext.Provider>
    </Layout>
  );
}
