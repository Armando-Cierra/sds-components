import type { MouseEvent, ReactNode } from 'react';
import type * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface MenuOptionBaseProps
  extends React.ForwardRefExoticComponent<
    DropdownMenu.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>
  > {
  className?: string;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  value: string;
  customValue?: ReactNode;
  isSelected?: boolean;
  isHidden?: boolean;
  onClick?: (e: MouseEvent) => void;
}

export type DropdownOptionProps = Omit<MenuOptionBaseProps, '$$typeof'>;
