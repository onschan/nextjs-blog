import { useRef } from "react";
import { useMount } from "react-use";

import { useArticleAnchorContext } from "../../contexts";

export const useArticleAnchor = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { setAnchors } = useArticleAnchorContext();

  useMount(() => {
    if (!ref.current) {
      return;
    }

    const headers = ref.current.querySelectorAll("h1, h2, h3, h4");

    const headerIds = Array.from(headers)
      .map((header, index) => ({
        id: `${header.id}-${index}`,
        title: header.id,
        level: Number(header.tagName.slice(1)),
      }))
      .filter(Boolean);

    setAnchors(headerIds);
  });

  return { articleRef: ref };
};
