import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ReactElement } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { theme } from "@/theme";

import type { Post } from "@/types";

import { colors, prose, typography } from "@/styles";

import * as styles from "./styles";

import { ThreeHeartExample } from "./examples";
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
    SyntaxHighlighter,
    ThreeHeartExample,
  } as MDXRemoteProps["components"];

  return (
    <section css={styles.section}>
      <h1 css={styles.title}>{title}</h1>
      <h2 css={styles.date}>{date}</h2>
      <article
        ref={articleRef}
        css={css`
          padding: 24px 0;

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

          a {
            ${prose.link}
          }

          img {
            vertical-align: middle;
            overflow-clip-margin: content-box;
            overflow: clip;
          }

          blockquote {
            ${prose.quote}
            border-left: 4px solid ${theme.border.focus};
            background-color: ${theme.interactive.secondary};
          }

          hr {
            background: ${theme.border.default};
            height: 1px;
            border: 0;
            margin: 1rem 0;
          }

          ul {
            ${prose.ul}
          }

          ol {
            ${prose.ol}
          }

          li {
            ${prose.li}
          }

          p {
            code {
              ${prose.code}
              background-color: ${theme.interactive.secondaryHover};
            }
          }

          pre {
            position: relative;

            &[data-language="text"]::after {
              content: " ";
            }

            &:not([data-language="text"])::after {
              ${typography.caption}

              content: attr(data-language);
              position: sticky;
              bottom: 100%;
              left: 0;
              display: inline-block;
              text-align: right;
              color: ${colors.white};
              font-family: monospace;
              font-size: 10px;
              text-transform: uppercase;
              transform: translateY(-32px);
              background-color: ${theme.interactive.primary};
              padding: 4px 8px;
              border-radius: 0 0 4px 4px;
            }
          }
        `}
      >
        <MDXRemote components={components} {...mdxSource} />
      </article>
    </section>
  );
}
