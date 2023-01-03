import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import SyntaxHighlighter from "react-syntax-highlighter";

import type { PostInfoType } from "@/types";

import MainLayout from "@/layout/MainLayout";

interface Props {
  postInfo: PostInfoType;
  mdxSource: MDXRemoteSerializeResult;
}

const components = { SyntaxHighlighter };

export default function Post({ postInfo: { title, date }, mdxSource }: Props) {
  return (
    <MainLayout>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <MDXRemote {...mdxSource} components={components} />
    </MainLayout>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src", "posts"));

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", slug + ".mdx"));

  const { data: postInfo, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
    },
  });

  return {
    props: {
      postInfo,
      slug,
      mdxSource,
    },
  };
};
