import React, { ReactElement, useCallback } from 'react';
import useTheme from '../shared/hooks/useTheme';
import { MoonIcon, SunIcon } from './ThemesIcon';

export default function DarkModeSwitcher(): ReactElement {
  const {isDark, setIsDark} = useTheme()
  /**
   * @requires
   * @param {boolean} enabled
   *
   */
  const toggleDarkMode = useCallback(() => {
    setIsDark((v) => {
      const newValue = !v;
      if (newValue) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return newValue;
    });
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className={`${
        !isDark ? 'text-gray-900 ' : 'text-gray-100 '
      } relative inline-flex items-center -mr-[9px] `}
    >
      {isDark ?  <SunIcon />: <MoonIcon />}
    </button>
  );
}
