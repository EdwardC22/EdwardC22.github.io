import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import ProjectExperience from './components/ProjectExperience';
import Footer from './components/Footer';
import AboutMe from './AboutMe';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // const onNavBarClick = (name: SectionName) => {
  //   switch (name) {
  //     case "home": {
  //       if (homeRef.current) {
  //         homeRef.current.scrollIntoView({ behavior: "smooth" });
  //       }
  //       break;
  //     }
  //     case "about-me": {
  //       if (aboutMeRef.current) {
  //         aboutMeRef.current.scrollIntoView({
  //           behavior: "smooth",
  //           block: "nearest"
  //         });
  //       }
  //       break;
  //     }
  //     case "projects": {
  //       if (projectsRef.current) {
  //         projectsRef.current.scrollIntoView({ behavior: "smooth" });
  //       }
  //       break;
  //     }
  //   }
  // };

  return (
    <div>
      <div className="max-w-screen-lg lg:mx-auto mx-8">
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        {/* <AboutMe ref={aboutMeRef} />
        <Projects ref={projectsRef}></Projects>
        <NavBar onClick={onNavBarClick}></NavBar> */}
      </div>
    </div>
  );
};
export default App;