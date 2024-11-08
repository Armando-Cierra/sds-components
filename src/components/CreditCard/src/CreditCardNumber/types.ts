export interface CreditCardNumberProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customFilter?: (e: string) => string;
  ref?: never;
}
