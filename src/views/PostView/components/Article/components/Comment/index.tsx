import { css } from "@emotion/react";
import { useEffect, useRef, useCallback } from "react";

import { useTheme } from "@/theme";

const UTTERANCES_CONFIG = {
  src: "https://utteranc.es/client.js",
  repo: "onschan/nextjs-blog",
  issueTerm: "pathname",
  crossorigin: "anonymous",
} as const;

export default function Comment() {
  const { mode } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  const getThemeForMode = useCallback((): "github-dark" | "github-light" => {
    if (mode === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      return mql.matches ? "github-dark" : "github-light";
    }
    return mode === "dark" ? "github-dark" : "github-light";
  }, [mode]);

  const loadUtterances = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // 기존 스크립트 제거
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = UTTERANCES_CONFIG.src;
    script.async = true;
    script.setAttribute("repo", UTTERANCES_CONFIG.repo);
    script.setAttribute("issue-term", UTTERANCES_CONFIG.issueTerm);
    script.setAttribute("theme", getThemeForMode());
    script.setAttribute("crossorigin", UTTERANCES_CONFIG.crossorigin);

    container.appendChild(script);
  }, [getThemeForMode]);

  useEffect(() => {
    loadUtterances();
  }, [loadUtterances]);

  return (
    <div
      ref={containerRef}
      css={css`
        .utterances {
          max-width: 100%;
        }
      `}
    />
  );
}
