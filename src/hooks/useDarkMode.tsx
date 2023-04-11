import { useCallback, useEffect, useState } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

function useDarkMode(): UseDarkModeOutput {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // const isDarkOS = localStorage.getItem(COLOR_SCHEME_QUERY) !== null;
    // setDarkMode(isDarkOS);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      localStorage.setItem(COLOR_SCHEME_QUERY, '');
      root.classList.add('dark');
    }
    if (!isDarkMode) {
      localStorage.removeItem(COLOR_SCHEME_QUERY);
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const updateDarkMode = useCallback(
    (value: boolean) => {
      if (isDarkMode === value) return;

      setDarkMode(value);
    },
    [isDarkMode]
  );

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  return {
    isDarkMode,
    toggle: () => toggleDarkMode(),
    enable: () => updateDarkMode(true),
    disable: () => updateDarkMode(false),
  };
}

export default useDarkMode;
