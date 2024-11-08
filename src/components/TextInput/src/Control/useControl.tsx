import React, { useState } from 'react';
import { getEvent } from './onChangeEvent';
import type { useControlProps } from './types';

const parseAlphanumericInput = (value: string) =>
  value.replace(/[^0-9a-zA-Z]/g, '').replace(/(\..*)\./g, '$1');

const parseLettersOnlyInput = (value: string) =>
  value.replace(/[^a-zA-Z\s]/g, '').replace(/(\..*)\./g, '$1');

export const useControl = ({
  hasClearAction,
  controlledValue,
  defaultValue,
  hasError,
  isReadOnly,
  isDisabled,
  maxLength,
  alphanumericOnly,
  lettersOnly,
  customFilter,
  onChange,
  onClear,
}: useControlProps) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');

  const errorValidation = hasError && !isReadOnly && !isDisabled;
  const readOnlyValidation = isReadOnly && !isDisabled;
  const isInteractivityDisabled = isDisabled || isReadOnly;
  const formattedValue = formatInputValue(controlledValue ?? innerValue);
  const shouldShowClearIcon =
    formattedValue.length > 0 && hasClearAction && !isReadOnly && !isDisabled;

  //Declared as a function expression to improve readability order
  function formatInputValue(value: string | number | readonly string[]) {
    let formattedValue = String(value);

    if (maxLength && formattedValue.length > maxLength) {
      formattedValue = formattedValue.slice(0, maxLength);
    }

    if (alphanumericOnly) {
      formattedValue = parseAlphanumericInput(formattedValue);
    } else if (lettersOnly) {
      formattedValue = parseLettersOnlyInput(formattedValue);
    }

    if (customFilter) {
      formattedValue = customFilter(formattedValue);
    }

    return formattedValue;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const cleanEvent = (e: React.MouseEvent) => {
    setInnerValue('');
    onClear?.();

    const xButton = e.currentTarget;
    const input = xButton.previousElementSibling as HTMLInputElement;

    if (onChange) {
      onChange(getEvent('', input) as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return {
    formattedValue,
    errorValidation,
    readOnlyValidation,
    handleChange,
    cleanEvent,
    shouldShowClearIcon,
  };
};
