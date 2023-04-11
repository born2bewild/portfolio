import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ReactNode, useEffect, useRef } from 'react';
import 'twin.macro';

type Props = {
  name: string;
  setVisible: (name: string) => void;
  children: ReactNode;
};

export const Section = ({ name, setVisible, children, ...props }: Props) => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  useEffect(() => {
    const isVisible = !!entry?.isIntersecting;

    if (isVisible) {
      setVisible(name);
    }
  }, [entry?.isIntersecting, setVisible, name]);

  return (
    <section
      id={name}
      ref={ref}
      tw="min-h-[100svh] px-5 pt-40 py-32 bg-white my-auto flex align-middle justify-center items-stretch flex-col dark:bg-transparent"
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
