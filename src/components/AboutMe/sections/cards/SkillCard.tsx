import React from "react";
import AboueMeCard from "./AboutMeCard";
import { useParentCollapsedState } from "@/hooks";
import { FieldType } from "@/utils";
import resources from "@/@types/resources";


type SkillCardProps = FieldType<
  typeof resources,
  "translations.aboutMe.skills.items"
>[number] & {
  className?: string;
};

interface SkillBarProps {
  name: string;
  percentage: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between text-sm font-bold text-gray-700 dark:text-slate-300 tracking-wide mx-1 mb-2">
        <span>{name}</span>
        <span className={"text-gray-600 dark:text-slate-400"}>{percentage}%</span>
      </div>
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 w-full h-3 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-full rounded-full transition-all duration-1000 ease-out animate-skill-wiggle"
          style={{
            width: `${percentage}%`,
            transformOrigin: 'right center'
          }}
        />
      </div>
    </div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({
  heading,
  subheading,
  className,
  skillset
}) => {
  return (
    <AboueMeCard
      title={heading}
      subtitle={subheading}
      className={`mb-4 ${className ?? ""}`}
      initExpand={true}
    >
      <div className="mt-2 mb-2">
        {Object.entries(skillset).map(([name, percentage], i) => (
          <SkillBar
            name={name}
            percentage={percentage}
            key={`${heading}-${name}-${percentage}`}
            className={i === 0 ? "" : "mt-4"}
          />
        ))}
      </div>
    </AboueMeCard>
  );
};

export default SkillCard;
