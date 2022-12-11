import { css } from "@emotion/react";

export default function HomePage() {
  const 게시물 = [
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
    "게시물",
  ];
  return (
    <div
      css={css`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 64px 0;
      `}
    >
      <div
        css={css`
          width: 1024px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        {게시물.map((item, index) => (
          <div
            key={index}
            css={css`
              border: 1px solid black;
              width: 540px;
              height: 240px;
              margin: 24px;
            `}
          >
            {item}
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}
