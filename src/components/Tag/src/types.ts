import type { ReactNode, FocusEventHandler } from 'react';
import type { TooltipPosition } from '../../Tooltip';

export interface TagRemoveEventProps {
  value?: string;
}

export interface TagChangeEventProps {
  value?: string;
  checked: boolean;
}

type BaseProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onChange'
>;

export interface TagProps extends BaseProps {
  value?: string;
  children: ReactNode;
  isRemovable?: boolean;
  isSelectable?: boolean;
  characterLimit?: number;
  tooltipPosition?: TooltipPosition;
  checked?: boolean;
  defaultChecked?: boolean;
  ref?: never;
  onRemove?: (e: TagRemoveEventProps) => void;
  onChange?: (e: TagChangeEventProps) => void;
}

export interface useTagProps {
  value?: string;
  children: ReactNode;
  isRemovable?: boolean;
  isSelectable?: boolean;
  characterLimit: number;
  controlledCheck?: boolean;
  defaultChecked?: boolean;
  onRemove?: (e: TagRemoveEventProps) => void;
  onChange?: (e: TagChangeEventProps) => void;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}
