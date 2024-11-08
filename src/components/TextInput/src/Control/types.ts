import type { AvailableTelicon } from '../../../Telicon';
type TexInputNativeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'maxLength' | 'disabled' | 'readOnly'
>;

export interface TextInputControlProps extends TexInputNativeProps {
  className?: string;
  //property that controls the internal value of the input component. It is used for the controlled approach of this component.
  value?: string | number | readonly string[] | undefined;
  //property that controls the initial value of the input component. It is used for the un-controlled approach of this component.
  defaultValue?: string | number | readonly string[] | undefined;
  hasError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  prefix?: string;
  sufix?: string;
  maxLength?: number;
  lettersOnly?: boolean;
  alphanumericOnly?: boolean;
  icon?: AvailableTelicon;
  hasClearAction?: boolean;
  clearActionVisibility?: 'auto' | 'always';
  ref?: never;
  customFilter?: (value: string) => string;
  onClear?: () => void;
}

export interface useControlProps {
  icon?: AvailableTelicon;
  controlledValue?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  hasError?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  maxLength?: number;
  alphanumericOnly?: boolean;
  lettersOnly?: boolean;
  hasClearAction?: boolean;
  customFilter?: (value: string) => string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onClear?: () => void;
}

//Object types to imitate a change event
export interface CleanCustomEvent {
  currentTarget: HTMLInputElement;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  type: 'change';
  target: {
    value: string;
    defaultValue: string;
    name: string;
    type: string;
    maxLength: number;
    minLength: number;
    required: boolean;
    validity: ValidityState;
    validationMessage: string;
    pattern: string;
    readOnly: boolean;
    disabled: boolean;
  };
  timeStamp: number;
}
