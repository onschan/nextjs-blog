export type Post = {
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};

export type RelatedPost = Pick<Post, "slug" | "title" | "description">;
