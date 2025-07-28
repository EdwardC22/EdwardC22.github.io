import React, { useLayoutEffect, useRef } from "react";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar";
import { SectionName, setActiveSectionName } from "@/store/slices/root";
import { useAppDispatch } from "@/hooks";

const useI18nTitle = () => {
  const { t, i18n } = useTranslation();
  useLayoutEffect(() => {
    document.title = t("title");
  }, [t, i18n.language]);
};

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useI18nTitle();
  const onNavBarClick = (name: SectionName) => {
    dispatch(setActiveSectionName(name));
    switch (name) {
      case "home": {
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
      case "about-me": {
        if (aboutMeRef.current) {
          aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
        break;
      }
      case "projects": {
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
    }
  };

  return (
    <div>
      <div className="max-w-screen-lg lg:mx-auto mx-8">
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <NavBar onClick={onNavBarClick}></NavBar>
        {/* <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef}></Projects>
        <NavBar onClick={onNavBarClick}></NavBar> */}
      </div>
    </div>
  );
};
export default App;
