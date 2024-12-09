import { ImgHTMLAttributes } from "react";

import * as styles from "./styles";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  caption: string;
}

export default function CaptionImage(props: Props) {
  const { caption, ...attributes } = props;

  return (
    <div css={styles.layout}>
      <img {...attributes} />
      <span css={styles.caption}>{caption}</span>
    </div>
  );
}
