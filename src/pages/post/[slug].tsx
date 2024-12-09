import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeSlug from "rehype-slug";

import { PostView } from "@/views";

import { SEO } from "@/components";

import type { Post as PostType } from "@/types";

interface Props {
  post: PostType;
  mdxSource: MDXRemoteSerializeResult;
}

export default function Post({ post, mdxSource }: Props) {
  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        url={`/post/${post.slug}`}
        image={post.thumbnail}
      />
      <PostView post={post} mdxSource={mdxSource} />
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("_posts"));

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
  const markdownWithMeta = fs.readFileSync(path.join("_posts", slug + ".mdx"));

  const { data: postData, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: false,
      rehypePlugins: [rehypeSlug],
    },
  });

  return {
    props: {
      post: { ...postData, slug },
      mdxSource,
    },
  };
};
