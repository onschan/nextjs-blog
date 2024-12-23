import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import * as styles from "./styles";

export default function Bio() {
  return (
    <div css={styles.container}>
      <Link href="https://github.com/onschan/" target="_blank">
        <img
          css={styles.avatar}
          src="https://avatars.githubusercontent.com/u/62434898?v=4"
          alt="Profile picture"
        />
      </Link>
      <div css={styles.contents}>
        <p css={styles.description}>
          <Link href="/about">온승찬</Link> | Frontend Developer
        </p>
        <div css={styles.Links}>
          <Link href="https://github.com/onschan/" target="_blank">
            <IoLogoGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/seungchan-on-a58000252/" target="_blank">
            <IoLogoLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
