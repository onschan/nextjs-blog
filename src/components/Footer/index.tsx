import * as styles from "./styles";

interface Props {
  hasCopyright?: boolean;
}

export default function Footer(props: Props) {
  const { hasCopyright } = props;

  return (
    <footer css={styles.footer}>
      <p>© 2024 Seungchan On. All Rights Reserved.</p>
      {hasCopyright && (
        <span css={styles.copyright}>
          © 3D Model provided by{" "}
          <a href="https://sketchfab.com/seafoam" target="_blank" rel="noopener noreferrer">
            Seafoam
          </a>{" "}
          on Sketchfab
        </span>
      )}
    </footer>
  );
}
