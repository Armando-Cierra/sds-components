import type { MouseEvent, ReactNode } from 'react';
import type * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface MenuOptionBaseProps
  extends React.ForwardRefExoticComponent<
    DropdownMenu.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>
  > {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical';
  isDisabled?: boolean;
  isSelected?: boolean;
  isHidden?: boolean;
  ref?: never;
  variant?: 'danger' | 'default';
  onClick?: (e: MouseEvent) => void;
}

export type MenuOptionProps = Omit<MenuOptionBaseProps, '$$typeof'>;
