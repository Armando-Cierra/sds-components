/**
 * Props for a custom Div element.
 */
export interface PasswordProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isDisabled?: boolean;
  hasError?: boolean;
  ref?: never;
}
