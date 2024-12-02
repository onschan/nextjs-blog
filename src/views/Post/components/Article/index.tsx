import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import type { PostInfoType } from "@/types";

import { prose, typography } from "@/styles";

import { useArticleAnchor } from "./hooks";

interface Props {
  postInfo: PostInfoType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Article(props: Props) {
  const { postInfo, mdxSource } = props;
  const { title, date } = postInfo;

  const { articleRef } = useArticleAnchor();

  const components = {
    pre: ({ children: code }: { children: ReactElement }) => {
      const language = code.props.className?.replace("language-", "");

      if (language) {
        return (
          <SyntaxHighlighter
            language={language}
            useInlineStyles={false}
            style={{}}
            customStyle={{
              margin: 0,
              padding: "20px",
              borderRadius: "12px",
              boxShadow:
                "0px -2px 4px rgba(0,0,0,0.08),0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {code.props.children}
          </SyntaxHighlighter>
        );
      }

      return <pre>{code}</pre>;
    },
    SyntaxHighlighter,
  } as MDXRemoteProps["components"];

  return (
    <section>
      <h1
        css={css`
          ${typography.large}
        `}
      >
        {title}
      </h1>
      <h2>{date}</h2>
      <article
        ref={articleRef}
        css={css`
          * {
            scroll-margin-top: 50px;
          }

          h1 {
            ${prose.h1}
          }
          h2 {
            ${prose.h2}
          }
          h3 {
            ${prose.h3}
          }
          h4 {
            ${prose.h4}
          }
          p {
            ${prose.paragraph}
          }
          blockquote {
            ${prose.quote}
          }
          ul,
          ol {
            ${prose.list}
          }
          code {
            ${prose.inlineCode}
          }
          pre code {
            ${prose.code}
          }
        `}
      >
        <MDXRemote components={components} {...mdxSource} />
      </article>
    </section>
  );
}
