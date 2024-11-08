import type { ReactNode } from 'react';

//This is necessary to simulate the 'select' behavior as a form control
export interface DropdownControlProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  menuClassName?: string;
  name?: string;
  children: ReactNode;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  showModeOption?: 'value' | 'children' | 'customValue';
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  menuWidth?: string;
  defaultOpen?: boolean;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export interface UseControlProps {
  innerId: string;
  children: ReactNode;
  defaultValue?: string;
  controlledValue?: string;
  showModeOption: 'value' | 'children' | 'customValue';
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
}
