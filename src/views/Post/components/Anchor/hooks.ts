import { useEffect, useState } from "react";

import type { Anchor } from "../../types";

const ACTIVE_POSITION = 52;

export const useActiveAnchor = (anchors: Anchor[]) => {
  const [activeAnchor, setActiveAnchor] = useState("");

  useEffect(() => {
    if (!anchors) {
      return;
    }

    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      const isBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

      if (isTop && anchors[0]?.id) {
        setActiveAnchor(anchors[0].id);
        return;
      }

      if (isBottom && anchors[anchors.length - 1]?.id) {
        setActiveAnchor(anchors[anchors.length - 1].id);
        return;
      }

      const activeSectionId = anchors.find(section => {
        const element = document.getElementById(section.id);

        if (!element) {
          return;
        }
        const rect = element.getBoundingClientRect();

        return rect.top <= ACTIVE_POSITION && rect.bottom > ACTIVE_POSITION;
      })?.id;

      if (activeSectionId) {
        setActiveAnchor(activeSectionId);
      }
    };

    if (anchors[0]?.id) {
      setActiveAnchor(anchors[0].id);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchors]);

  return { activeAnchor };
};
