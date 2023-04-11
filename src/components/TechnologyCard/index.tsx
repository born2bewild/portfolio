import Rate from '@/components/Rate';
import Tooltip from '@/components/Tooltip';
import { a, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import { keyframes } from 'styled-components';
import { styled } from 'twin.macro';

const rotation = keyframes`
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
 `;

const FrontCard = styled(a.div)<any>`
  @property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  --clr-1: #052b2f;
  --clr-2: #073438;
  --clr-3: #0e4b50;
  --clr-4: #2d8f85;
  --clr-5: #637c54;

  cursor: pointer;
  aspect-ratio: 1 / 1;
  background: var(--clr-1);
  border-radius: 0.5rem;
  padding: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: -0.5rem;
    z-index: -1;
    background: conic-gradient(
      from var(--gradient-angle),
      var(--clr-3),
      var(--clr-4),
      var(--clr-5),
      var(--clr-4),
      var(--clr-3)
    );
    border-radius: inherit;
    animation: ${rotation} 20s linear infinite;
  }

  &::after {
    filter: blur(2rem);
  }
`;

const BackCard = styled(FrontCard)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: left;
`;

interface Props {
  icon: JSX.Element | JSX.Element[];
  technology: {
    name: string;
    familiarity: number;
    preference: number;
  };
  size?: string;
}

export const TechnologyCard = ({
  icon,
  technology: { name, familiarity, preference },
}: Props) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const flipCard = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div tw="relative" onClick={flipCard}>
      <FrontCard style={{ opacity: opacity.to(o => 1 - o), transform }}>
        {!flipped && <div tw="w-full	h-full">{icon}</div>}
      </FrontCard>
      <BackCard
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
        {flipped && (
          <div tw="w-full	h-full">
            <Tooltip message={name}>
              <h3 tw="font-bold text-lg text-white truncate">{name}</h3>
            </Tooltip>
            <p tw="text-sm text-white">Familiarity</p>
            <Rate value={familiarity} />
            <p tw="text-sm text-white">Preference</p>
            <Rate value={preference} />
          </div>
        )}
      </BackCard>
    </div>
  );
};

TechnologyCard.whyDidYouRender = true;

export default React.memo(TechnologyCard);
