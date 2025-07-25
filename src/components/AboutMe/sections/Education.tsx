import React from "react";
import { useTranslation } from "react-i18next";

import Section from "@/components/Section";
import EducationCard from "./cards/EducationCard";

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section title={t("aboutMe.education.title")}>
      {t("aboutMe.education.items", {
        returnObjects: true,
        fallbackLng: "en"
      }).map((props) => (
        <EducationCard
          {...props}
          className="mb-4"
          key={`inner-${props.degree}-${props.university}`}
        />
      ))}
    </Section>
  );
};
export default Education;