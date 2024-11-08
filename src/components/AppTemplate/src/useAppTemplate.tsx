import { ReactNode, isValidElement, useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Page } from './Page';
import { TabBar } from './TabBar';
import { useMediaQuery } from './utils';
import type { UseAppTemplateProps } from './types';

export const useAppTemplate = ({
  children,
  isSidebarExpanded,
  isSidebarFixed,
  collapseSidebar,
  expandSidebar,
}: UseAppTemplateProps) => {
  const [desktopSidebarHistory, setDesktopSidebarHistory] = useState<
    undefined | boolean
  >(undefined);
  const isMobileResolution = useMediaQuery('(max-width: 63.9375rem)');
  const childrenArray = Array.isArray(children) ? children : [children];
  let sidebar: ReactNode = null;
  let page: ReactNode = null;
  let tabBar: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Sidebar) sidebar = item;
      if (item.type === TabBar) tabBar = item;
      if (item.type === Page) page = item;
    }
  });

  useEffect(() => {
    if (isMobileResolution && isSidebarExpanded) {
      setDesktopSidebarHistory(isSidebarExpanded);
      collapseSidebar?.();
    }

    if (!isMobileResolution && desktopSidebarHistory !== isSidebarExpanded) {
      expandSidebar?.();
    }
  }, [isMobileResolution]);

  if (
    isSidebarFixed &&
    (collapseSidebar || expandSidebar || isSidebarExpanded !== undefined)
  )
    throw new Error(
      'The properties "isSidebarExpanded", "collapsedSidebar", or "expandSidebar" cannot be used when the sidebar is fixed.'
    );

  return {
    sidebar,
    page,
    tabBar,
    isMobileResolution,
  };
};
