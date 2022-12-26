import { useState } from "react";

const useToggleSwitch = (initialToggleValue = false) => {
  const [toggle, setToggle] = useState(initialToggleValue);

  const onClickToggle = () => {
    setToggle(prev => !prev);
  };

  return { toggle, setToggle, onClickToggle };
};

export default useToggleSwitch;
