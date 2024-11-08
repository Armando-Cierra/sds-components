export interface useControlProps {
  value?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  controlledValue?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customFilter?: (e: string) => string;
}

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  useControlProps;

export interface PasswordControlProps extends NativeInputProps {
  hasError?: boolean;
}
