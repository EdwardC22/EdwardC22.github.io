import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FaIcon from "./FaIcon";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

const SocialIconsBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-row">
        <a href="https://github.com/EdwardC22" className="mr-16">
          <FaIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="mr-16"
        >
          <FaIcon icon={faLinkedin} />
        </a>
        <a
          className="text-gray-500 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-300 hover:scale-125 transition ease-in-out duration-200 hover:cursor-pointer"
          href=""
        >
          <DocumentTextIcon className="h-[1.9rem] w-[1.9rem]" />
        </a>
      </div>
    </>
  );
};

export default SocialIconsBar;
