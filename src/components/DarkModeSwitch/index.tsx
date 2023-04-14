import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import { styled } from 'twin.macro';

const SVG = styled(animated.svg)<any>``;
const Circle = styled(animated.circle)<any>``;
const Group = styled(animated.g)<any>``;

export const config = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: '50%',
      cy: '23%',
    },
    svg: {
      transform: 'rotate(40deg)',
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: '100%',
      cy: '0%',
    },
    svg: {
      transform: 'rotate(90deg)',
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'onChange'>;

export interface Props extends SVGProps {
  onChange: () => void;
  checked: boolean;
  style?: React.CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}

export const DarkModeSwitch: React.FC<Props> = ({
  onChange,
  checked = false,
  size = 24,
  moonColor = '#e4e4e7',
  sunColor = '#fde047',
}) => {
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
    setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
  }, [setId]);

  const { circle, svg, lines, mask } = config[checked ? 'dark' : 'light'];

  const svgContainerProps = useSpring({
    ...svg,
    config: config.springConfig,
  });
  const centerCircleProps = useSpring({
    ...circle,
    config: config.springConfig,
  });
  const maskedCircleProps = useSpring({
    ...mask,
    config: config.springConfig,
  });
  const linesProps = useSpring({
    ...lines,
    config: config.springConfig,
  });

  const uniqueMaskId = `circle-mask-${id}`;

  return (
    <button
      title="Dark mode switch"
      aria-label="Change dark/light mode"
      onClick={onChange}
      style={{
        cursor: 'pointer',
      }}
    >
      <SVG
        data-testid="dark-mode-icon"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color={checked ? moonColor : sunColor}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        style={svgContainerProps}
      >
        <mask id={uniqueMaskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <Circle
            data-testid="circle-mask"
            style={maskedCircleProps}
            r="9"
            fill="black"
          />
        </mask>

        <Circle
          data-testid="circle"
          cx="12"
          cy="12"
          fill={checked ? moonColor : sunColor}
          style={centerCircleProps}
          mask={`url(#${uniqueMaskId})`}
        />
        <Group
          stroke="currentColor"
          style={linesProps}
          data-testid="sun-light-lines"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </Group>
      </SVG>
    </button>
  );
};

export default React.memo(DarkModeSwitch);
