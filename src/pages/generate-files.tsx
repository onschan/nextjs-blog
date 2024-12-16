import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { parseKoreanDate } from "@/utils";

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

export const getStaticProps = async () => {
  try {
    const postsDirectory = path.join(process.cwd(), "_posts");
    if (!fs.existsSync(postsDirectory)) {
      throw new Error("_posts directory does not exist");
    }

    const files = fs.readdirSync(postsDirectory);
    if (files.length === 0) {
      console.warn("No posts found in _posts directory");
    }

    const posts = files.map(fileName => {
      const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
      const { data: postData } = matter(markdownWithMeta);

      return {
        title: postData.title || "Untitled Post",
        date: postData.date || new Date().toISOString(),
        description: postData.description || "No description available",
        thumbnail: postData.thumbnail || null,
        slug: fileName.replace(".mdx", ""),
      };
    }) as Post[];

    const sitemap = generateSiteMap(posts);
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    fs.writeFileSync(sitemapPath, sitemap);

    const rssFeed = generateRssFeed(posts);
    const rssPath = path.join(process.cwd(), "public", "rss.xml");
    fs.writeFileSync(rssPath, rssFeed);

    return { props: {} };
  } catch (error) {
    console.error("Error generating files:", error);
    return { props: {} };
  }
};

export default function GenerateFiles() {
  return null;
}
