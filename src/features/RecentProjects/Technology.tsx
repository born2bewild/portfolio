import { icons } from '@/components/TechnologyIcons';
import Tooltip from '@/components/Tooltip';
import { Technology as ITechnology } from '@/data/technologies';
import React, { useMemo } from 'react';
import 'twin.macro';

type Props = { technology: ITechnology };

export const Technology = ({ technology }: Props) => {
  const icon = useMemo(
    () => icons.find(icon => icon.name === technology.name)?.icon,
    [technology.name]
  );

  if (!icon) {
    const shortName = technology.name
      .split(' ')
      .map(word => word.slice(0, 1).toUpperCase())
      .join('');
    return (
      <div tw="px-1">
        <Tooltip message={technology.name}>
          <span>{shortName}</span>
        </Tooltip>
      </div>
    );
  }

  return (
    <div tw="p-1">
      <Tooltip message={technology.name}>{React.cloneElement(icon)}</Tooltip>
    </div>
  );
};
