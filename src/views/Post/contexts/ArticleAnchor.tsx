import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const ArticleAnchorContext = createContext<{
  anchors: Anchor[];
  setAnchors: Dispatch<SetStateAction<Anchor[]>>;
}>({ anchors: [], setAnchors: () => {} });

export const useArticleAnchorContext = () => {
  return useContext(ArticleAnchorContext);
};
