export interface CreditCardDateProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: never;
}
