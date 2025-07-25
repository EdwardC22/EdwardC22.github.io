import { JSX, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/common/Card";

interface AboutMeCardProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  className?: string;
  image?: string | JSX.Element;
  initExpand?: boolean;
}

type AboutMeCardComponent = React.PropsWithChildren<AboutMeCardProps>;

type AboutMeHeaderProps = React.PropsWithChildren<
  AboutMeCardProps & { expanded: boolean; onClick?: () => void }
>;

const AboutMeCardHeader: React.FC<AboutMeHeaderProps> = ({
  title,
  subtitle,
  className,
  expanded,
}) => {
  return (
    <div className={`flex flex-row items-start justify-start`}>
      <p className="text-l">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          className={`transition ease-in-out text-xs text-gray-700 dark:text-slate-300 ${
            expanded ? "rotate-90" : ""
          } mr-6 hover:cursor-pointer`}
        />
      </p>

      <div className="flex flex-col">
        <h3 className="text-xl font-semibold ">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
};

const AboutMeCard: React.FC<AboutMeCardComponent> = ({
  title,
  subtitle,
  children,
  className,
  initExpand = false,
}) => {
  const [expanded, setExpanded] = useState(initExpand);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={`px-8 py-6 hover:cursor-pointer ${className ?? ""}`}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <AboutMeCardHeader
        title={title}
        subtitle={subtitle}
        expanded={expanded}
        onClick={handleClick}
      />
      {expanded && <>{children}</>}
    </Card>
  );
};

export default AboutMeCard;
