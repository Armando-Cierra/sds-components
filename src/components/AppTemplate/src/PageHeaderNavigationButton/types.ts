type CustomButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'children'
>;

export interface AppTemplatePageHeaderNavigationButton
  extends CustomButtonProps {
  className?: string;
  icon: 'chevron-left--line' | 'chevron-double-left--line';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: never;
}
