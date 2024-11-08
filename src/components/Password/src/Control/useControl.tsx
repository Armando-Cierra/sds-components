import React, { useState } from 'react';
import type { useControlProps } from './types';

export const useControl = ({
  isDisabled,
  defaultValue,
  controlledValue,
  maxLength,
  customFilter,
  onChange,
}: useControlProps) => {
  const isInteractivityDisabled = isDisabled;
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');
  const value = controlledValue ?? innerValue;

  const formatInputValue = (
    value: string,
    maxLength?: number,
    filterFn?: (value: string) => string
  ) => {
    let formattedValue = value || '';

    if (maxLength) {
      formattedValue = formattedValue.slice(0, maxLength);
    }

    if (filterFn) {
      formattedValue = filterFn(formattedValue);
    }

    return formattedValue;
  };

  const formattedValue = formatInputValue(value, maxLength, customFilter);

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInnerValue(newValue);
    if (!onChange || isInteractivityDisabled) return;

    const newFormattedValue = formatInputValue(
      newValue,
      maxLength,
      customFilter
    );

    if (onChange) {
      const newEvent = event;
      newEvent.target.value = newFormattedValue;
      onChange(newEvent);
    }
  };

  return {
    formattedValue,
    onChangeEvent,
  };
};
