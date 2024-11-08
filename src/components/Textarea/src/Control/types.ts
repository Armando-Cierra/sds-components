/**
 * @description This is the Field Component API
 * @extends React.TextareaHTMLAttributes<HTMLTextAreaElement>
 */

type TextAreaNativeProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'maxLength' | 'disabled' | 'readOnly'
>;

export interface TextareaControlProps extends TextAreaNativeProps {
  value?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  id?: string;
  hasError?: boolean;
  maxLengthCounter?: number;
  maxLength?: number;
  ref?: never;
  customFilter?: (e: string) => string;

  /**
   * @description Specifies a function to be called when the field's value changes.
   * @param e:React.ChangeEvent<HTMLTextAreaElement>
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * @description Properties for the useField hook.
 */
export interface useControlProps {
  controlledValue?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  isDisabled?: boolean;
  maxLength?: number;
  hasError?: boolean;
  isReadOnly?: boolean;
  customFilter?: (e: string) => string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
