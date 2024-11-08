import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
  isValidElement,
} from 'react';
import { Menu } from '../../../Menu';

export const useMultiSelectDropdown = (children: ReactNode) => {
  // This menu state is not actually controlling anything, it just helps to identify when an interaction is happening with the menu trigger, using this as a parameter to update dynamically the width of the menu based on the dropdown box
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState(512);
  const menuTriggerRef = useRef(null);

  let childrenArray = Array.isArray(children) ? children : [children];
  childrenArray = childrenArray.flat();

  let search: ReactNode = null;
  let options: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Menu.Search) search = item;
      if (item.type === Menu.Option) options = [...options, item];
    }
  });

  const toggleMenu = (e: boolean) => setMenuIsOpen(e);

  useEffect(() => {
    const menuTrigger = menuTriggerRef.current as HTMLElement | null;

    const captureMenuWidth = () => {
      menuTrigger && setMenuWidth(menuTrigger.clientWidth);
    };

    captureMenuWidth();
    window.addEventListener('resize', captureMenuWidth);

    return () => window.removeEventListener('resize', captureMenuWidth);
  }, [menuIsOpen]);

  return {
    search,
    options,
    menuWidth,
    menuTriggerRef,
    toggleMenu,
  };
};
