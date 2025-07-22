import { JSX, useState } from "react";

interface AboutMeCardProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  className?: string;
  description?: string;
  image?: string | JSX.Element;
  initExpand?: boolean;
}

type AboutMeCardComponent = React.PropsWithChildren<AboutMeCardProps>;

type AboutMeHeaderProps = React.PropsWithChildren<
  AboutMeCardProps & { expended?: boolean; onClick?: () => void }
>;

const AboutMeCardHeader: React.FC<AboutMeHeaderProps> = ({
  title,
  subtitle,
  className,
  expended,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-between ${className}`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      {expended && (
        <span className="text-xs text-gray-400">Click to collapse</span>
      )}
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
    <div className={`p-4 border rounded-lg ${className}`}>
      <AboutMeCardHeader
        title={title}
        subtitle={subtitle}
        expended={expanded}
        onClick={handleClick}
      />
      {expanded && <>{children}</>}
    </div>
  );
};

export default AboutMeCard;
