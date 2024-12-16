import * as styles from "./styles";

import { useActiveAnchor } from "./hooks";

import { useArticleAnchorContext } from "../../contexts";

export default function Anchor() {
  const { anchors } = useArticleAnchorContext();

  const { activeAnchor } = useActiveAnchor(anchors);

  return (
    <aside css={styles.container}>
      <ul css={styles.ul}>
        {anchors.map(({ id, title, level }) => (
          <li key={id} css={styles.li({ level, isActive: activeAnchor === id })}>
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
