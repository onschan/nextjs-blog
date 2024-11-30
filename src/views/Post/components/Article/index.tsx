import { css } from "@emotion/react";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";

import type { PostInfoType } from "@/types";

import { prose } from "@/styles";

import { useArticleAnchor } from "./hooks";

interface Props {
  postInfo: PostInfoType;
  mdxSource: any;
}

export default function Article(props: Props) {
  const { postInfo, mdxSource } = props;
  const { title, date } = postInfo;

  const { articleRef } = useArticleAnchor();

  return (
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
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
    </article>
  );
}
