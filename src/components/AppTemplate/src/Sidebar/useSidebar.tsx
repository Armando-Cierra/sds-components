import { ReactNode, isValidElement } from 'react';
import { SidebarHeader } from '../SidebarHeader';
import { SidebarContent } from '../SidebarContent';
import { useMediaQuery } from '../utils';
import type { UseSidebar } from './types';

export const useSidebar = ({ children }: UseSidebar) => {
  const isMobileResolution = useMediaQuery('(max-width: 63.9375rem)');
  const childrenArray = Array.isArray(children) ? children : [children];
  let header: ReactNode = null;
  let content: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === SidebarHeader) header = item;
      if (item.type === SidebarContent) content = item;
    }
  });

  return {
    isMobileResolution,
    header,
    content,
  };
};
