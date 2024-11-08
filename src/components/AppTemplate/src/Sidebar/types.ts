import type { ReactNode } from 'react';

export interface AppTemplateSidebarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
}

export interface UseSidebar {
  children: ReactNode;
  isSidebarFixed?: boolean;
  collapseSidebar?: () => void;
}
