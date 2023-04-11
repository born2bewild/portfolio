import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import 'twin.macro';

const LogoAnimated = dynamic(
  () => import('@/components/Logo').then(mod => mod.LogoAnimated),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

type Props = {
  activeSection?: string;
};

const Header = ({ activeSection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavigation() {
    setIsOpen(prevOpen => !prevOpen);
  }

  return (
    <header tw="fixed top-0 z-20 w-full dark:bg-zinc-800 bg-zinc-100  shadow">
      <div tw="justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div tw="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="/">
              <div tw=" w-9 h-9 overflow-hidden text-3xl font-bold text-zinc-500">
                <LogoAnimated width="2.25rem" height="2.25rem" />
              </div>
            </Link>
            <div tw="md:hidden">
              <button
                tw="p-2 text-gray-700 rounded-md outline-none focus:border focus:border-gray-400"
                onClick={toggleNavigation}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    tw="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    tw="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <Navbar isOpen={isOpen} activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
