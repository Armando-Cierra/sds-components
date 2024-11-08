export interface CreditCardNameProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isDisabled?: boolean;
  hasError?: boolean;
  isReadOnly?: boolean;
  ref?: never;
}
