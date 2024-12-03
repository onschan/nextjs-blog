import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeSlug from "rehype-slug";

import { PostView } from "@/views";

import type { PostInfoType } from "@/types";

interface Props {
  postInfo: PostInfoType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Post({ postInfo, mdxSource }: Props) {
  return <PostView postInfo={postInfo} mdxSource={mdxSource} />;
}

export const getStaticPaths = async () => {
  const dirs = fs.readdirSync(path.join("src", "posts"));

  const paths = dirs.map(dirName => {
    return {
      params: {
        slug: dirName,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug: dirName } }: any) => {
  const file = fs
    .readdirSync(path.join("src", "posts", dirName))
    .filter(file => file.endsWith(".mdx"))[0];
  const markdownWithMeta = fs.readFileSync(path.join("src", "posts", dirName, file));

  const { data: postInfo, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
      rehypePlugins: [rehypeSlug],
    },
  });

  return {
    props: {
      postInfo,
      slug: dirName,
      mdxSource,
    },
  };
};
