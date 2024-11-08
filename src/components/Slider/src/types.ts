import type { ReactNode } from 'react';

export interface SliderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  ref?: never;
}

export interface UseSlider {
  children: ReactNode;
  isDisabled: boolean;
  hasError: boolean;
}
