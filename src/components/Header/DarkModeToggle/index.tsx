import { useEffect } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

import ToggleSwitch from "@/components/_common/ToggleSwitch";
import useToggleSwitch from "@/components/_common/ToggleSwitch/useToggleSwitch";

export default function DarkModeToggle() {
  const { toggle, setToggle, onClickToggle } = useToggleSwitch();

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setToggle(systemPrefersDark);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = toggle ? "dark" : "light";
  }, [toggle]);

  return (
    <ToggleSwitch
      left={<MdLightMode size={16} />}
      right={<MdNightlight size={16} />}
      toggle={toggle}
      onClickSwitch={onClickToggle}
    />
  );
}
