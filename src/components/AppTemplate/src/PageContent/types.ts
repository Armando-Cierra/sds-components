import type { ReactNode } from 'react';

export interface AppTemplatePageContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasPadding?: boolean;
  ref?: never;
}

export interface UsePageContent {
  children?: ReactNode;
}
