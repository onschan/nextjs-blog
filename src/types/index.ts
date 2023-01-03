export type PostType = { postInfo: PostInfoType; slug: string };

export type PostInfoType = {
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  tag: string[];
};
