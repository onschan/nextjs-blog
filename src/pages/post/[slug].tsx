import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { PostView } from "@/views";

import { SEO } from "@/components";

import type { Post as PostType, RelatedPost } from "@/types";

const RELATED_POST_COUNT = 3;

interface Props {
  post: PostType;
  mdxSource: MDXRemoteSerializeResult;
  relatedPosts: RelatedPost[];
}

export default function Post({ post, mdxSource, relatedPosts }: Props) {
  return (
    <>
      <SEO
        fullTitle={post.title}
        title={post.title}
        description={post.description}
        url={`/post/${post.slug}`}
        image={post.thumbnail}
        keywords={post.tags}
        type="article"
        publishedTime={post.date}
        breadcrumb={[
          { name: "Posts", url: "/postList" },
          { name: post.title, url: `/post/${post.slug}` },
        ]}
      />
      <PostView post={post} mdxSource={mdxSource} relatedPosts={relatedPosts} />
    </>
  );
}

const readAllPosts = () =>
  fs.readdirSync(path.join("_posts")).map(fileName => {
    const { data } = matter(fs.readFileSync(path.join("_posts", fileName), "utf-8"));

    return { ...data, slug: fileName.replace(".mdx", "") } as PostType;
  });

/**
 * 공통 태그가 많은 순, 같으면 최신순으로 관련 글을 고른다.
 * 공통 태그가 없어도 최신 글로 채워 모든 포스트가 내부 링크를 갖게 한다.
 */
const pickRelatedPosts = (posts: PostType[], current: PostType): RelatedPost[] =>
  posts
    .filter(post => post.slug !== current.slug)
    .map(post => ({
      post,
      sharedTagCount: post.tags.filter(tag => current.tags.includes(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.sharedTagCount - a.sharedTagCount ||
        new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    )
    .slice(0, RELATED_POST_COUNT)
    .map(({ post }) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
    }));

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
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });

  const post = { ...postData, slug } as PostType;

  return {
    props: {
      post,
      mdxSource,
      relatedPosts: pickRelatedPosts(readAllPosts(), post),
    },
  };
};
