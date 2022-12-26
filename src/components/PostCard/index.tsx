import * as styles from "./styles";

interface Props {
  post: {
    thumbnail: string;
    title: string;
    description: string;
    date: Date;
    tag: string[];
  };
}

export default function PostCard({ post }: Props) {
  return (
    <div css={styles.postContainer}>
      <span>{post.title}</span>
      <span>{post.description}</span>
      <span>{post.date.toDateString()}</span>
    </div>
  );
}
