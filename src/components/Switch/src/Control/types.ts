export interface SwitchControlProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  isDisabled?: boolean;
  ref?: never;
}

export interface UseControlProps {
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
