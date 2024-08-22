import React from "react";
import * as solid from "@heroicons/react/24/solid";
import * as outline from "@heroicons/react/24/outline";

interface HeroIconProps {
  icon: string;
  isSolid: boolean;
  className?: string;
}

const HeroIcon: React.FC<HeroIconProps> = ({ icon, isSolid, className }) => {
  const IconComponent = isSolid
    ? solid[icon as keyof typeof solid]
    : outline[icon as keyof typeof outline];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};

export default HeroIcon;
