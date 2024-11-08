import type { AvailableTelicon } from '../../../Telicon';

type CustomButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'children'
>;

export interface AppTemplateSidebarContentGroupActionsButton
  extends CustomButtonProps {
  className?: string;
  icon: AvailableTelicon;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: never;
}
