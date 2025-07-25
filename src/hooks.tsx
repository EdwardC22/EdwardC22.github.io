import { createContext, useContext } from "react";

export const useExtendStyle =
  (classNames: string) =>
  (base: TemplateStringsArray, ...strExprs: (string | undefined)[]) => {
    const res = `${classNames} ${base.join(" ")} ${strExprs
      .filter((s) => !!s)
      .join(" ")}`;
    return res.trim();
  };

  
const CollapsedContext = createContext(true);
export const useParentCollapsedState = () => useContext(CollapsedContext);