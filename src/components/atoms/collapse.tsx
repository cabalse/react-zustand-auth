import { useState } from "react";

import chevronDown from "./../../assets/icons/chevron-down.svg";
import chevronUp from "./../../assets/icons/chevron-up.svg";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Collapse = ({ title, children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toogleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full p-4 border rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{title}</div>
        <div className="">
          <img
            src={collapsed ? chevronDown : chevronUp}
            className="w-[16px] h-[16px]"
            onClick={toogleCollapsed}
          />
        </div>
      </div>
      {collapsed ? <div className="mt-4">{children}</div> : null}
    </div>
  );
};

export default Collapse;
