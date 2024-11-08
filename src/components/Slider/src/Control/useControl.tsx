import React, { useState, useRef, useEffect } from 'react';
import type { UseControl } from './types';

export const useControl = ({
  min,
  max,
  defaultValue,
  controlledValue,
  hasError,
  isDisabled,
  onChange,
}: UseControl) => {
  const errorValidation = hasError && !isDisabled;

  const singleSliderRef = useRef<HTMLInputElement>(null);
  const singleSliderKnobRef = useRef<HTMLButtonElement>(null);

  const [innerSingleValue, setInnerSingleValue] = useState(defaultValue ?? min);
  const [draggingElement, setDraggingElement] = useState(false);
  const value = controlledValue ?? innerSingleValue;

  const handleChange = (e: number) => {
    onChange?.({ value: e });
  };

  const getPercentage = (originalValue: number) => {
    const range = max - min;
    const percentage = ((originalValue - min) / range) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const handleDocumentMouseMove = (e: MouseEvent) => {
    if (draggingElement && singleSliderRef.current) {
      const rect = singleSliderRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;

      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const newValue = (x / rect.width) * (max - min) + min;

      const roundedNewValue = Math.round(newValue);

      const uncontrolledPercentage = getPercentage(roundedNewValue);
      const controlledPercentage =
        controlledValue && getPercentage(controlledValue);

      if (controlledValue === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        singleSliderKnobRef.current!.style.left = `calc(${uncontrolledPercentage}% - 10px)`;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        singleSliderKnobRef.current!.style.left = `calc(${controlledPercentage}% - 10px)`;
      }

      singleSliderRef.current.value = String(roundedNewValue);
      setInnerSingleValue(roundedNewValue);
      handleChange(roundedNewValue);
    }
  };

  const handleDocumentMouseUp = () => {
    setDraggingElement(false);
  };

  const handleThumbMouseDown = () => {
    setDraggingElement(true);
  };

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'ArrowLeft' && value - 1 >= min) {
      const newValue = value - 1;
      setInnerSingleValue(value - 1);
      onChange?.({ value: newValue });
    } else if (e.code === 'ArrowRight' && value + 1 <= max) {
      const newValue = value + 1;
      setInnerSingleValue(newValue);
      onChange?.({ value: newValue });
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return {
    singleSliderRef,
    singleSliderKnobRef,
    value,
    getPercentage,
    handleChange,
    handleThumbMouseDown,
    handleKeyEvent,
    errorValidation,
  };
};
