import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import path from "path";

import { DOMAIN } from "@/constants";

import { Post } from "@/types";

const parseKoreanDate = (dateString: string): Date => {
  if (!dateString) {
    return new Date();
  }

  const formattedDate = dateString.replace(/년|월/g, "-").replace(/일/g, "").replace(/\s/g, "");
  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    return new Date();
  }

  return parsedDate;
};

export const generateRssFeed = (posts: Post[]) => {
  const items = posts
    .map(post => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${DOMAIN}/${post.slug}</link>
          <description><![CDATA[${post.description}]]></description>
          <pubDate>${parseKoreanDate(post.date).toUTCString()}</pubDate>
          <guid>${DOMAIN}${post.slug}</guid>
          ${
            post.thumbnail
              ? `<enclosure url="${DOMAIN}/${post.thumbnail}" type="application/octet-stream" />`
              : ""
          }
        </item>
      `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title><![CDATA[onschan.me]]></title>
        <link>${DOMAIN}</link>
        <description><![CDATA[On's TechBlog]]></description>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <language>ko</language>
        <atom:link href="${DOMAIN}/rss.xml" rel="self" type="application/rss+xml"/>
        ${items}
      </channel>
    </rss>
  `;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { res } = context;

  const files = fs.readdirSync(path.join("_posts"));
  const posts = files.map(fileName => {
    const markdownWithMeta = fs.readFileSync(path.join("_posts", fileName), "utf-8");
    const { data: postData } = matter(markdownWithMeta);
    return {
      ...postData,
      slug: fileName.replace(".mdx", ""),
    };
  }) as Post[];

  const rss = generateRssFeed(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {} };
};
export default function RSS() {
  return null;
}
