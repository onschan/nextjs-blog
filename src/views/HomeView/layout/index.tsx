import { ReactNode } from "react";

import * as styles from "./styles";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div css={styles.layout}>{children}</div>;
}
