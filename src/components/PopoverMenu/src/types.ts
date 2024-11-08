export interface PopoverMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  defaultOpen?: boolean;
  isOpen?: boolean;
  autoFocus?: boolean;
  ref?: never;
}
