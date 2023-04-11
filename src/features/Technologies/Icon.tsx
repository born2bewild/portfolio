import { icons } from '@/components/TechnologyIcons';
import { Technology as ITechnology } from '@/data/technologies';
import React, { useMemo } from 'react';
import 'twin.macro';

type Props = { technology: ITechnology };

export const Icon = ({ technology }: Props) => {
  const icon = useMemo(
    () => icons.find(icon => icon.name === technology.name)?.icon,
    [technology.name]
  );

  if (!icon) {
    const shortName = technology.name
      .split(/(?=[A-Z])|\s/)
      .map(word => word.slice(0, 1).toUpperCase())
      .join('');
    return <span tw="">{shortName}</span>;
  }

  return React.cloneElement(icon, {
    size: 128,
    style: { width: 'inherit', height: 'inherit' },
  });
};
