import { css } from "@emotion/react";
import { useSize, useWindowSize } from "react-use";

import { theme } from "@/theme";

import { colors, typography } from "@/styles";

import { useActiveAnchor } from "./hooks";

import { useArticleAnchorContext } from "../../contexts";

export default function Anchor() {
  const { anchors } = useArticleAnchorContext();

  const { activeAnchor } = useActiveAnchor(anchors);

  return (
    <aside
      style={{
        display: "flex",
        alignItems: "flex-start",
        height: "100%",
      }}
    >
      <ul
        style={{
          position: "sticky",
          top: "80px",
          display: "flex",
          gap: "2px",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "12px",
          borderLeft: `1px solid ${theme.border.default}`,
        }}
      >
        {anchors.map(({ id, title, level }) => (
          <li
            key={`${id}`}
            css={css`
              ${typography.caption}
              color: ${theme.text.secondary};
              margin-left: ${`${(level - 1) * 8}px`};
              padding: 2px 6px;
              border-radius: 8px;

              :hover {
                color: ${theme.interactive.primaryHover};
              }

              ${activeAnchor === id &&
              css`
                ${typography.bodySmall}
                color: ${theme.interactive.primary};
              `}
            `}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
