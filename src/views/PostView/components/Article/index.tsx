import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import type { Post } from "@/types";

import * as styles from "./styles";

import { Bio, CaptionImage } from "./components";
import { ThreeHeartExample, ThreeHeartExample2 } from "./examples";
import { useArticleAnchor } from "./hooks";

interface Props {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Article(props: Props) {
  const { post, mdxSource } = props;
  const { title, date } = post;

  const { articleRef } = useArticleAnchor();

  const components = {
    pre: ({ children: code }: { children: ReactElement }) => {
      const language = code.props.className?.replace("language-", "") || "text";

      return (
        <SyntaxHighlighter
          language={language}
          useInlineStyles={false}
          style={{}}
          customStyle={{
            margin: "2rem 0",
            padding: language === "text" ? "24px 24px 0" : "32px 24px 0",
            borderRadius: "12px",
            boxShadow:
              "0px -1px 2px rgba(0,0,0,0.04),0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
          }}
          {...{ "data-language": language }}
        >
          {code.props.children}
        </SyntaxHighlighter>
      );
    },
    CaptionImage,
    SyntaxHighlighter,
    ThreeHeartExample,
    ThreeHeartExample2,
  } as MDXRemoteProps["components"];

  return (
    <section css={styles.section}>
      <h1 css={styles.title}>{title}</h1>
      <h2 css={styles.date}>{date}</h2>
      <article ref={articleRef} css={styles.article}>
        <MDXRemote components={components} {...mdxSource} />
      </article>
      <Bio />
    </section>
  );
}
