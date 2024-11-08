/**
 * @description The use of the Button component API
 * @accepts This component accepts any prop that the native HTML button element accepts
 * @extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    HTMLInputElement to be able to use the native button API
 */

export interface NumberInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  hasError?: boolean;
  ref?: never;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export interface useNumberInputProps {
  children: React.ReactNode;
  hasError?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
}

export interface ButtonCustomEvent {
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
