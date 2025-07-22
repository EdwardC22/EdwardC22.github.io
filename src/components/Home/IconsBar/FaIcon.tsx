import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import React from "react";

type FaIconProps = Pick<FontAwesomeIconProps, "icon">;

const useFaIcon = () => {
  const basicStyle =
    "text-gray-500 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-300";
//   const transitionCss =
//     "md:transition md:ease-in-out md:hover:scale-125 md:hover:-translate-y-1 md:duration-200";
  const finalStyle = basicStyle;

  return {
    style: finalStyle
  };
};

const FaIcon: React.FC<FaIconProps> = ({ icon }) => {
  const { style } = useFaIcon();
  return (
    <FontAwesomeIcon
      icon={icon}
      size="2xl"
      className={style}
      mask={["far", "circle"]}
    />
  );
};

export default FaIcon;
