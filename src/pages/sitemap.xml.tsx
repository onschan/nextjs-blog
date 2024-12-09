import fs from "fs";
import matter from "gray-matter";
import type { GetServerSideProps } from "next";
import path from "path";

import { DOMAIN } from "@/constants";

import type { Post } from "@/types";

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${DOMAIN}</loc>
        <priority>1.0</priority>
      </url>
      ${posts
        .map(
          post => `
        <url>
          <loc>${DOMAIN}/${post.slug}</loc>
          <lastmod>${post.date}</lastmod>
          <priority>0.8</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;
}

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

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
