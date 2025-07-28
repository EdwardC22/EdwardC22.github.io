import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AppDispatch, RootState } from "./store";

export const useExtendStyle =
  (classNames: string) =>
  (base: TemplateStringsArray, ...strExprs: (string | undefined)[]) => {
    const res = `${classNames} ${base.join(" ")} ${strExprs
      .filter((s) => !!s)
      .join(" ")}`;
    return res.trim();
  };

export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(window.matchMedia(query).matches);
  const matchMedia = useRef(window.matchMedia(query));
  const handleChange = () => {
    setMatch(matchMedia.current.matches);
  };
  useEffect(() => {
    matchMedia.current.addEventListener("change", handleChange);
    return () => matchMedia.current.removeEventListener("change", handleChange);
  }, []);
  return match;
};
  
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CollapsedContext = createContext(true);
export const useParentCollapsedState = () => useContext(CollapsedContext);