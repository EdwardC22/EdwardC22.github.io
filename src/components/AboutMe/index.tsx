import React, { Suspense } from "react";
import Work from "./sections/Work";
import { useAppDispatch } from "@/hooks";
import Education from "./sections/Education";

import { useTranslation } from "react-i18next";
import Skill from "./sections/Skill";

const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  return (
    <div ref={ref}>
      <h2 className="text-3xl text-gray-700 dark:text-slate-300 text-center font-semibold mb-8">
        {`< ${t("navbar.aboutMe")} >`}
      </h2>
      <div className="grid grid-cols-1 mx-4 md:mx-0 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-4">
        <Suspense>
          <Skill />
        </Suspense>
        <Suspense>
          <Work />
        </Suspense>
        <Suspense>
          <Education />
        </Suspense>
      </div>
    </div>
  );
});

export default AboutMe;
