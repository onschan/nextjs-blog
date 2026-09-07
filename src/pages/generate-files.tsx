import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { DOMAIN, SITE_DESCRIPTION, SITE_NAME } from "@/constants";

import type { Post } from "@/types";

function generateSiteMap(posts: Post[]) {
  const latestPostDate = posts
    .map(post => post.date)
    .sort()
    .reverse()[0];

  const staticPages = [
    { path: "", priority: "1.0", lastmod: latestPostDate },
    { path: "/postList", priority: "0.9", lastmod: latestPostDate },
    { path: "/about", priority: "0.8", lastmod: latestPostDate },
    { path: "/ai-chatbot", priority: "0.7", lastmod: latestPostDate },
  ];

  const toUrlNode = ({
    path: pagePath,
    priority,
    lastmod,
  }: {
    path: string;
    priority: string;
    lastmod?: string;
  }) => `
      <url>
        <loc>${DOMAIN}${pagePath}</loc>
        ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
        <priority>${priority}</priority>
      </url>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages.map(toUrlNode).join("")}
      ${posts
        .map(post => toUrlNode({ path: `/post/${post.slug}`, priority: "0.8", lastmod: post.date }))
        .join("")}
    </urlset>`;
}

export const generateRssFeed = (posts: Post[]) => {
  const latestPubDate = posts
    .reduce((latest, post) => {
      const pubDate = new Date(post.date);
      return pubDate.getTime() > latest.getTime() ? pubDate : latest;
    }, new Date(0))
    .toUTCString();

  const items = posts
    .map(post => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${DOMAIN}/post/${post.slug}</link>
          <description><![CDATA[${post.description}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid>${DOMAIN}/post/${post.slug}</guid>
          ${
            post.thumbnail
              ? `
                <media:content 
                  url="${DOMAIN}${post.thumbnail}" 
                  type="image/webp" 
                  medium="image"
                />
                <media:thumbnail 
                  url="${DOMAIN}${post.thumbnail}"
                />`
              : ""
          }
        </item>
      `;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
      <channel>
        <title><![CDATA[${SITE_NAME}]]></title>
        <link>${DOMAIN}</link>
        <description><![CDATA[${SITE_DESCRIPTION}]]></description>
        <lastBuildDate>${latestPubDate}</lastBuildDate>
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

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
