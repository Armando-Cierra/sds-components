import { useState } from 'react';
import type { useControlInputProps } from './types';
import { getEvent } from './onChangeEvent';

export const useControl = ({
  controlledValue,
  defaultValue,
  hasError,
  isReadOnly,
  isDisabled,
  showButtons,
  maxValue,
  minValue,
  maxLength,
  isWholeNumbersOnly,
  filterFn,
  onChange,
}: useControlInputProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');
  const errorValidation = hasError && !isReadOnly && !isDisabled;
  const isInteractivityDisabled = isDisabled || isReadOnly;
  const readOnlyValidation = isReadOnly && !isDisabled;
  const showButtonsValidation = !isReadOnly && showButtons;
  const formattedValue = formatInputValue(controlledValue ?? innerValue);

  function formatInputValue(value: string | number | readonly string[]) {
    let formattedValue = String(value);

    formattedValue = formattedValue.replace(/[^\d\s.-]|(?<=^-)-|(?<!^)-/g, '');

    if (maxLength) {
      formattedValue = formattedValue.slice(0, maxLength);
    }

    if (isWholeNumbersOnly) {
      formattedValue = formattedValue.replace(/[^\d\s]/g, '');
    }

    if (filterFn) {
      formattedValue = filterFn(formattedValue);
    }

    return formattedValue;
  }

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isInteractivityDisabled) {
      const reFormattedValue = formatInputValue(e.target.value);
      setInnerValue(reFormattedValue);

      if (onChange) {
        const newEvent = e;
        newEvent.target.value = reFormattedValue;
        onChange(newEvent);
      }
    }
  };

  const validateDecreaseButton = (): boolean => {
    if (minValue !== undefined) {
      if (Number(formattedValue ?? 0) <= minValue || isDisabled || isReadOnly)
        return true;
      return false;
    }

    return isDisabled || isReadOnly ? true : false;
  };

  const validateIncreaseButton = (): boolean => {
    if (maxValue !== undefined) {
      if (Number(formattedValue ?? 0) >= maxValue || isDisabled || isReadOnly)
        return true;
      return false;
    }

    return isDisabled || isReadOnly ? true : false;
  };

  const buttonAction =
    (action: 'increase' | 'decrease') => (e: React.MouseEvent) => {
      const newValue =
        action === 'increase'
          ? Number(formattedValue) + 1
          : Number(formattedValue) - 1;

      setInnerValue(newValue);

      const button = e.currentTarget;
      const input =
        action === 'increase'
          ? (button?.previousElementSibling
              ?.previousElementSibling as HTMLInputElement)
          : (button?.previousElementSibling as HTMLInputElement);

      if (onChange) {
        onChange(
          getEvent(newValue, input) as React.ChangeEvent<HTMLInputElement>
        );
      }
    };

  return {
    formattedValue: formattedValue,
    showButtonsValidation,
    errorValidation,
    readOnlyValidation,
    changeEvent,
    buttonAction,
    validateDecreaseButton,
    validateIncreaseButton,
    isInteractivityDisabled,
  };
};
