import type { AvailableTelicon } from '../../Telicon';

type Variants =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'dangerAlt'
  | 'inverted'
  | 'invertedAlt';

type Sizes = 'default' | 'large' | 'small';

export type ButtonProps = Omit<OmittedProps, 'disabled'>;

type ButtonNativeProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled'
>;

interface OmittedProps extends ButtonNativeProps {
  children?: string;
  className?: string;
  variant?: Variants;
  size?: Sizes;
  iconOnly?: AvailableTelicon;
  iconBefore?: AvailableTelicon;
  iconAfter?: AvailableTelicon;
  isDisabled?: boolean;
  isSelected?: boolean;
  isLoading?: boolean | 'before' | 'after';
  iconSpacing?: string;
  ref?: never;
  scaleWhileActive?: boolean;
}

export interface useButtonProps {
  children?: string;
  size?: Sizes;
  iconOnly?: AvailableTelicon;
  iconBefore?: AvailableTelicon;
  iconAfter?: AvailableTelicon;
  isLoading?: boolean | 'before' | 'after';
}
