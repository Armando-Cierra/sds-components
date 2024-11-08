import type { ReactNode } from 'react';

export interface AppTemplatePageHeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  ref?: never;
}

export interface UsePageHeader {
  children: ReactNode;
}
