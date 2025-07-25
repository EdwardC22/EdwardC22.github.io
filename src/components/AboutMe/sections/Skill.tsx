import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "./cards/SkillCard";

const Skill: React.FC = () => {
  const { t } = useTranslation();
  const skillsSection =
    (t("aboutMe.skills.items", {
      returnObjects: true,
    }) as Array<any>) || [];
  return (
    <Section title={t("aboutMe.skills.title")}>
      {skillsSection.map((props) => (
        <SkillCard {...props} key={`${props.heading}`} />
      ))}
    </Section>
  );
};

export default Skill;
