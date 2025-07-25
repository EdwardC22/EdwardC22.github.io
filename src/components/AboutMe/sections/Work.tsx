import Section from "@/components/Section";
import React from "react";
import WorkCard from "./cards/WorkCard";
import { useTranslation } from "react-i18next";


const Work: React.FC = () => {
  const { t } = useTranslation();
  const items = t("aboutMe.workExperience.items", { returnObjects: true }) as Array<any> || [];
  return (
    <Section title={t("aboutMe.workExperience.title")}>
      {items.map((props) => (
        <WorkCard
          {...props}
          key={`${props.title}-${props.company}`}
        />
      ))}
    </Section>
  );
};

export default Work;