import { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

import ToggleSwitch from "@/components/_common/ToggleSwitch";

export default function DarkModeToggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleSwitch
      left={<MdLightMode size={16} />}
      right={<MdNightlight size={16} />}
      toggle={toggle}
      onClickSwitch={value => {
        setToggle(value);
        document.body.dataset.theme = value ? "dark" : "light";
        window.localStorage.setItem("isDark", `${value}`);
      }}
    />
  );
}
