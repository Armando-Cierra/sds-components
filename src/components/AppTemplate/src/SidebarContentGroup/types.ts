import type { ReactNode } from 'react';

type Behavior = 'static' | 'accordion';

export interface AppTemplateSidebarContentGroup
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  variant?: Behavior;
  heading?: string;
  defaultExpanded?: boolean;
  isExpanded?: boolean;
  children: ReactNode;
  ref?: never;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface UseSidebarContentGroup {
  children: ReactNode;
  variant: Behavior;
  defaultExpanded?: boolean;
  controlledValue?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
