import { ReactNode } from 'react';

export type BackgroundsTypes =
  | 'default'
  | 'contrast'
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary';

export interface ContainerListItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  background?: BackgroundsTypes;
  value: string;
  ref?: never;
}
