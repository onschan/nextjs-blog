import { css } from "@emotion/react";
import { useEffect, useState } from "react";

import { theme } from "@/theme";

import { useArticleAnchorContext } from "../../contexts";

export default function Article() {
  const { anchors } = useArticleAnchorContext();

  const [activeAnchor, setActiveAnchor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (!anchors) {
        return;
      }

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 최상단일 경우 첫 번째 앵커 선택
      if (scrollPosition === 0) {
        setActiveAnchor(anchors[0]?.id);
        return;
      }

      //   // 최하단일 경우 마지막 앵커 선택
      if (scrollPosition + windowHeight >= documentHeight - 10) {
        setActiveAnchor(anchors[anchors.length - 1]?.id);
        return;
      }

      //   // 각 섹션의 위치를 확인하여 현재 보이는 섹션 찾기
      const activeSectionId = anchors.find(section => {
        const element = document.getElementById(section.id);

        if (!element) {
          return;
        }
        const rect = element.getBoundingClientRect();

        return rect.top <= 52 && rect.bottom > 52;
      })?.id;

      if (activeSectionId) {
        setActiveAnchor(activeSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드시 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchors]);

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
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        {anchors.map(({ id, title, level }, index) => (
          <li
            key={`${id}`}
            css={css`
              margin-left: ${`${(level - 1) * 16}px`};

              ${activeAnchor === id &&
              css`
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
