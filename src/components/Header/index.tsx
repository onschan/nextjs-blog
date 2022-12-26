import ToggleSwitch from "../_common/ToggleSwitch";
import useToggleSwitch from "../_common/ToggleSwitch/useToggleSwitch";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { HiStar } from "react-icons/hi";
import { MdLightMode, MdNightlight } from "react-icons/md";

import theme from "@/styles/theme";

export default function Header() {
  // TODO: 홈버튼, 다크모드 버튼
  // TODO: 반응형

  const { toggle, setToggle, onClickToggle } = useToggleSwitch();

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setToggle(systemPrefersDark);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = toggle ? "dark" : "light";
  }, [toggle]);

  return (
    <header
      css={css`
        position: sticky;
        top: 0px;

        backdrop-filter: blur(7px);
        background-color: #21212180;
        z-index: 100;

        width: 100%;
        height: ${theme.size.header.height};

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 100%;
          max-width: 1024px;
          height: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <div
          css={css`
            span {
              font-size: 24px;
              font-weight: bold;
              height: 24px;
            }

            display: flex;
            justify-content: center;
            align-items: center;

            svg {
              color: #f9ca24;
              margin: 0 8px;
            }
          `}
        >
          <HiStar size={32} />
          <span>OnStar.Dev</span>
        </div>
        <div>
          <ToggleSwitch
            left={<MdLightMode size={16} />}
            right={<MdNightlight size={16} />}
            toggle={toggle}
            onClickSwitch={onClickToggle}
          />
        </div>
      </div>
    </header>
  );
}

// 홈 버튼 // 버튼s
