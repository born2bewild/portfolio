import React, { SVGProps, useMemo } from 'react';
import { keyframes } from 'styled-components';
import { styled } from 'twin.macro';
import Image from './Image';

const enterAnimation = keyframes`
  0% {
    transform: translateX(-50px) rotate(-720deg);
    filter: blur(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 0.9;
  }
`;

const wobbleAnimation = keyframes`
  0%,
  100% {
    transform: skew(0deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: skew(-6deg);
  }
  20% {
    transform: skew(6deg);
  }
  30% {
    transform: skew(-3.6deg);
  }
  40% {
    transform: skew(2.4deg);
  }
  50% {
    transform:  skew(-1.2deg);
  }
`;

function* colorGenerator(): Generator<string> {
  while (true) {
    yield `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }
}

interface LogoAnimationProps extends SVGProps<SVGSVGElement> {
  colors: [string, string, string, string, string, string];
}

const LogoAnimation = styled(Image)<LogoAnimationProps>`
  path {
    opacity: 0.9;
    animation-name: ${enterAnimation}, ${wobbleAnimation};
    animation-duration: 8000ms, 2000ms;
    animation-timing-function: ease-in, ease;
    animation-iteration-count: 1, 5;
  }

  path#chain-1 {
    fill: ${props => props.colors[0]};
    animation-delay: 0s, 15s;
  }

  #chain-2 {
    fill: ${props => props.colors[1]};
    animation-delay: 1s, 17s;
  }

  #chain-3 {
    fill: ${props => props.colors[2]};
    animation-delay: 2s, 19s;
  }

  #chain-4 {
    fill: ${props => props.colors[3]};
    animation-delay: 3s, 21s;
  }

  #chain-5 {
    fill: ${props => props.colors[4]};
    animation-delay: 4s, 23s;
  }

  #chain-6 {
    fill: ${props => props.colors[5]};
    animation-delay: 5s, 25s;
  }
`;

type Props = {
  width?: number | string;
  height?: number | string;
};

const LogoAnimated = (props: Props) => {
  const [color1, color2, color3, color4, color5, color6] =
    useMemo((): string[] => {
      const colors: string[] = [];
      for (let i = 0; i < 6; i++) {
        colors.push(colorGenerator().next().value);
      }

      return colors;
    }, []);

  return (
    <LogoAnimation
      width="100%"
      height={500}
      colors={[color1, color2, color3, color4, color5, color6]}
      {...props}
    />
  );
};

export default React.memo(LogoAnimated);
