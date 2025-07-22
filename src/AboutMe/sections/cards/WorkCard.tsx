import { JSX } from "react";
import AboutMeCard from "./AboutMeCard";

type WorkCardProps = {
  title: string | JSX.Element;
  company: string;
  descriptions: [string];
  className?: string;
};

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  company,
  descriptions,
  className,
}) => {
  return (
    <AboutMeCard className={className} title={company} subtitle={title}>
      <div className="mt-2">
        {descriptions.map((item) => (
          <p
            className="text-grey-500 text-sm mb-1 flex tracking-wide"
            key={`${title}-${company}-${item}`}
          >
            <span className="mr-4">•</span>
            {item}
          </p>
        ))}
      </div>
    </AboutMeCard>
  );
};

export default WorkCard;