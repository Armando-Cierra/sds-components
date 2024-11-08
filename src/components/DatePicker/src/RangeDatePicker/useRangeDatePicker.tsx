import { ReactNode, isValidElement } from 'react';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import { Control } from './Control';
import type { UseRangeDatePickerProps } from './types';

export const useRangeDatePicker = ({
  children,
  isDisabled,
  isReadOnly,
  hasError,
}: UseRangeDatePickerProps) => {
  const errorValidation = !isDisabled && !isReadOnly && hasError;
  const readOnlyValidation = !isDisabled && isReadOnly;
  const childrenArray = Array.isArray(children) ? children : [children];
  let label: ReactNode = null;
  let helpText: ReactNode = null;
  let control: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === HelpText) helpText = item;
      if (item.type === Control) control = item;
    }
  });

  return { label, helpText, control, errorValidation, readOnlyValidation };
};
