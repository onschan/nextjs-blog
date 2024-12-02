import { createContext, Dispatch, SetStateAction, useContext } from "react";

import type { Anchor } from "../types";

export const ArticleAnchorContext = createContext<{
  anchors: Anchor[];
  setAnchors: Dispatch<SetStateAction<Anchor[]>>;
}>({ anchors: [], setAnchors: () => {} });

export const useArticleAnchorContext = () => {
  return useContext(ArticleAnchorContext);
};
