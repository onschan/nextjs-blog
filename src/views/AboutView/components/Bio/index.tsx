import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

import * as styles from "./styles";

export default function Bio() {
  return (
    <div css={styles.container}>
      <div css={styles.Links}>
        <Link href="mailto:cks3066@naver.com" target="_blank">
          <IoMail size={24} />
        </Link>
        <Link href="https://github.com/onschan/" target="_blank">
          <IoLogoGithub size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/seungchan-on-a58000252/" target="_blank">
          <IoLogoLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
}
