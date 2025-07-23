import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  title: string;
}>;

const Section: React.FC<SectionProps> = ({ className, children, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  const animation = `transition-transform duration-300 ${collapsed ? "" : "rotate-90"}`;

  return (
    <div
      className={`mb-4 ${className ?? ""} text-gray-700 dark:text-slate-300`}
    >
      <div className="flex flex-row items-center justify-center mb-2">
        <p
          className={`${animation} hover:cursor-pointer`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </p>
        <h3 className="text-2xl text-center font-semibold ml-4">{title}</h3>
      </div>
      
      {/* 简化的折叠内容 */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          collapsed ? "max-h-0 opacity-0" : "max-h-[1000px] opacity-100"
        }`}
      >
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;