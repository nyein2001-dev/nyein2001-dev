// HeroIcon.jsx

import React from 'react';
import * as solid from '@heroicons/react/24/solid';
import * as outline from '@heroicons/react/24/outline';

const HeroIcon = ({ icon, isSolid }) => {
  // Determine the icon component based on props
  const IconComponent = isSolid ? solid[icon] : outline[icon];

  return <IconComponent />;
};

export default HeroIcon;
