import { useState } from 'react';
import type { useControlProps } from './types';

export const useControl = (props: useControlProps) => {
  const {
    controlledValue,
    defaultValue,
    hasError,
    isReadOnly,
    isDisabled,
    maxLength,
    customFilter,
    onChange,
  } = props;
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');

  const errorValidation = hasError && !isReadOnly && !isDisabled;
  const readOnlyValidation = isReadOnly && !isDisabled;
  const isInteractivityDisabled = isDisabled || isReadOnly;
  const formattedValue = formatInputValue(controlledValue ?? innerValue);
  const characterLength = formattedValue.length;

  //Declared as a function expression to improve readability order
  function formatInputValue(
    value: string | number | readonly string[] | undefined
  ) {
    let newValue = String(value);

    if (maxLength) {
      newValue = newValue.slice(0, maxLength);
    }

    if (customFilter) {
      newValue = customFilter(newValue);
    }

    return newValue;
  }

  const changeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isInteractivityDisabled) {
      const newValue = formatInputValue(event.target.value);
      setInnerValue(newValue);

      if (onChange) {
        const newEvent = event;
        newEvent.target.value = newValue;
        onChange(newEvent);
      }
    }
  };

  return {
    formattedValue,
    characterLength,
    errorValidation,
    readOnlyValidation,
    isInteractivityDisabled,
    changeEvent,
  };
};
