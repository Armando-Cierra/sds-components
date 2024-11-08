/**
 * Properties for the NumberInput.Field component.
 *
 * @interface
 */

export interface NumberInputControlProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  /**
   * @description property that controls the internal value of the input component. It is used for the controlled approach of this component.
   */
  value?: string | number | readonly string[] | undefined;
  /**
   * @description property that controls the initial value of the input component. It is used for the un-controlled approach of this component.
   */
  defaultValue?: string | number | readonly string[] | undefined;
  /**
   * Specifies whether the input element is in an error state or not.
   *
   * @defautValue false
   * @description Set this to `true` to show an error state on the input element.
   */
  hasError?: boolean;

  /**
   * Specifies whether the input element is read-only or not.
   *
   * @defautValue false
   * @description Set this to `true` to make the input element read-only.
   */
  isReadOnly?: boolean;

  /**
   * Specifies whether the input element is disabled or not.
   *
   * @defautValue false
   * @description Set this to `true` to disable the input element.
   */
  isDisabled?: boolean;
  /**
   * @description Property that defines the minimun suggested value that the input shoudl receive
   */
  min?: number;
  /**
   * @description Property that defines the maximum suggested value that the input should receive
   */
  max?: number;
  /**
   * @description Property that defines the maximum length of characteres the input field can receive
   */
  maxLength?: number;
  /**
   * @description A callback function to handle when the value of the input element changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @description Property in charge of showing or hidding the complementary input buttons
   */
  showButtons?: boolean;
  /**
   * @description Filter that returns only whole numbers, removing other characteres or symbols
   */
  isWholeNumbersOnly?: boolean;
  /**
   * @description Custom filter developers can write on their side, with the only condition of returning a string value.
   */
  customFilter?: (e: string) => string;
}

export interface useControlInputProps {
  controlledValue?: string | number | readonly string[] | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  hasError?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  showButtons?: boolean;
  children?: React.ReactNode;
  maxValue?: number;
  minValue?: number;
  maxLength?: number;
  isWholeNumbersOnly?: boolean;
  filterFn?: (value: string) => string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
