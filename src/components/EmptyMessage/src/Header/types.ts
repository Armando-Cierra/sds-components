import { AvailableTelicon } from '../../../Telicon';

export interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: string;
  icon?: AvailableTelicon;
  image?: string;
  ref?: never;
}
