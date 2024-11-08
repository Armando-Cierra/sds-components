export interface HelpTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  className?: string;
  children: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  ref?: never;
}
