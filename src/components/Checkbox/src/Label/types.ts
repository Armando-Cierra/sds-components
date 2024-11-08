export interface CheckboxLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  className?: string;
  children?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  ref?: never;
}
