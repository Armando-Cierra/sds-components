import React, { useState, useRef, useEffect } from 'react';
import type { UseControl, SliderDualChangeEventProps } from './types';

export const useDualControl = ({
  min,
  max,
  defaultInitialValue,
  controlledInitialValue,
  defaultEndValue,
  controlledEndValue,
  hasError,
  isDisabled,
  onChange,
}: UseControl) => {
  const errorValidation = hasError && !isDisabled;

  const initialSliderRef = useRef<HTMLInputElement>(null);
  const initialSliderKnobRef = useRef<HTMLButtonElement>(null);
  const endSliderRef = useRef<HTMLInputElement>(null);
  const endSliderKnobRef = useRef<HTMLButtonElement>(null);

  const [innerInitialValue, setInnerInitialValue] = useState(
    defaultInitialValue ?? min
  );
  const [innerEndValue, setInnerEndValue] = useState(defaultEndValue ?? max);
  const [draggingInitialElement, setDraggingInitialElement] = useState(false);
  const [draggingEndElement, setDraggingEndElement] = useState(false);
  const initialValue = controlledInitialValue ?? innerInitialValue;
  const endValue = controlledEndValue ?? innerEndValue;

  const handleChange = (e: SliderDualChangeEventProps) => {
    onChange?.(e);
  };

  const getPercentage = (originalValue: number) => {
    const range = max - min;
    const percentage = ((originalValue - min) / range) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const handleDocumentMouseMove = (e: MouseEvent) => {
    if (draggingInitialElement && initialSliderRef.current) {
      const rect = initialSliderRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;

      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const newValue = (x / rect.width) * (max - min) + min;

      const roundedNewValue = Math.round(newValue);

      const uncontrolledPercentage = getPercentage(roundedNewValue);
      const controlledPercentage =
        controlledInitialValue && getPercentage(controlledInitialValue);

      if (roundedNewValue < endValue) {
        if (controlledInitialValue === undefined) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          initialSliderKnobRef.current!.style.left = `calc(${uncontrolledPercentage}% - 10px)`;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          initialSliderKnobRef.current!.style.left = `calc(${controlledPercentage}% - 10px)`;
        }

        initialSliderRef.current.value = String(roundedNewValue);
        setInnerInitialValue(roundedNewValue);
        handleChange({
          initialValue: roundedNewValue,
          endValue,
        });
      }
    }

    if (draggingEndElement && endSliderRef.current) {
      const rect = endSliderRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;

      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const newValue = (x / rect.width) * (max - min) + min;

      const roundedNewValue = Math.round(newValue);

      const uncontrolledPercentage = getPercentage(roundedNewValue);
      const controlledPercentage =
        controlledEndValue && getPercentage(controlledEndValue);

      if (roundedNewValue > initialValue) {
        if (controlledEndValue === undefined) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          endSliderKnobRef.current!.style.left = `calc(${uncontrolledPercentage}% - 10px)`;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          endSliderKnobRef.current!.style.left = `calc(${controlledPercentage}% - 10px)`;
        }

        endSliderRef.current.value = String(roundedNewValue);
        setInnerEndValue(roundedNewValue);
        handleChange({
          initialValue,
          endValue: roundedNewValue,
        });
      }
    }
  };

  const handleDocumentMouseUp = () => {
    setDraggingInitialElement(false);
    setDraggingEndElement(false);
  };

  const handleThumbMouseDown = (element: 'initial' | 'end') => () => {
    const elements = {
      initial: () => setDraggingInitialElement(true),
      end: () => setDraggingEndElement(true),
    };
    elements[element]();
  };

  const handleKeyEvent =
    (element: 'initial' | 'end') =>
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const elements = {
        initial: () => {
          if (e.code === 'ArrowLeft' && initialValue - 1 >= min) {
            const newValue = initialValue - 1;
            setInnerInitialValue(newValue);
            onChange?.({
              initialValue: newValue,
              endValue,
            });
          } else if (e.code === 'ArrowRight' && initialValue + 1 <= max) {
            const newValue = initialValue + 1;
            setInnerInitialValue(newValue);
            onChange?.({
              initialValue: newValue,
              endValue,
            });
          }
        },
        end: () => {
          if (e.code === 'ArrowLeft' && initialValue - 1 >= min) {
            const newValue = endValue - 1;
            setInnerEndValue(newValue);
            onChange?.({
              initialValue,
              endValue: newValue,
            });
          } else if (e.code === 'ArrowRight' && initialValue + 1 <= max) {
            const newValue = endValue + 1;
            setInnerEndValue(newValue);
            onChange?.({
              initialValue,
              endValue: newValue,
            });
          }
        },
      };

      elements[element]();
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
    initialSliderRef,
    initialSliderKnobRef,
    endSliderRef,
    endSliderKnobRef,
    initialValue,
    endValue,
    getPercentage,
    handleChange,
    handleThumbMouseDown,
    handleKeyEvent,
    errorValidation,
  };
};
