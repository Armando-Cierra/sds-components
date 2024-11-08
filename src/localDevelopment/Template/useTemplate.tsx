import { useState, useEffect } from 'react';
import type { AvailableTelicon } from '../../components';

type Theme = 'Dark' | 'Light';

export const useTemplate = () => {
  const initialTheme = document.body.getAttribute(
    'data-sds-colormode'
  ) as Theme;

  const [theme, setTheme] = useState<Theme>('Dark');
  document.body.setAttribute('data-sds-colormode', theme);

  const [icon, setIcon] = useState<AvailableTelicon>(
    initialTheme === 'Light' ? 'sun--fill' : 'moon--fill'
  );

  const changeTheme = () => {
    const updatedTheme = theme === 'Light' ? 'Dark' : 'Light';
    document.body.setAttribute('data-sds-colormode', updatedTheme);
    setTheme(updatedTheme);
    setIcon(updatedTheme === 'Light' ? 'sun--fill' : 'moon--fill');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      (event.metaKey && event.key === 'e') ||
      (event.ctrlKey && event.key === 'e')
    ) {
      event.preventDefault();
      changeTheme();
    }
  };

  const handleChange = () => changeTheme();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [theme]);

  return { theme, icon, handleChange };
};
