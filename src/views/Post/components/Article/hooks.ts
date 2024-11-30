import { useEffect, useRef, useState } from "react";
import { useMount } from "react-use";

import { useArticleAnchorContext } from "../../contexts";

export const useArticleAnchor = () => {
  const ref = useRef<HTMLElement | null>(null);

  const { setAnchors } = useArticleAnchorContext();

  useMount(() => {
    if (!ref.current) {
      return;
    }

    const headers = ref.current.querySelectorAll("h1, h2");

    const headerIds = Array.from(headers)
      .map(header => ({
        id: header.id,
        title: header.textContent || "",
        level: Number(header.tagName.slice(1)),
      }))
      .filter(item => item.id);

    setAnchors(headerIds);
  });

  return { articleRef: ref };
};
