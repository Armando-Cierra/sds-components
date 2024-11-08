export interface RadioControlProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  ref?: never;
}

export interface UseControlProps {
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
