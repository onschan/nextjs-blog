import { ReactNode } from "react";

import { Footer, Header } from "@/components";

import * as styles from "./styles";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main css={styles.layout}>{children}</main>
      <Footer hasCopyright />
    </>
  );
}
