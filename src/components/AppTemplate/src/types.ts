import type { ReactNode } from 'react';

export interface AppTemplateProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  isSidebarExpanded?: boolean;
  isSidebarFixed?: boolean;
  collapseSidebar?: () => void;
  expandSidebar?: () => void;
  ref?: never;
}

export interface UseAppTemplateProps {
  children: ReactNode;
  isSidebarExpanded?: boolean;
  isSidebarFixed?: boolean;
  collapseSidebar?: () => void;
  expandSidebar?: () => void;
}

export interface AppTemplateContextType {
  isSidebarExpanded?: boolean;
  isSidebarFixed?: boolean;
  collapseSidebar?: () => void;
  expandSidebar?: () => void;
}
