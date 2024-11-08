import { isValidElement, type ReactNode } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import type { UseDropdownProps } from './types';

export const useDropdown = ({
  children,
  hasError,
  isDisabled,
  isReadOnly,
}: UseDropdownProps) => {
  const errorValidation = hasError && !isReadOnly && !isDisabled;
  const readOnlyValidation = isReadOnly && !isDisabled;
  const childrenArray = Array.isArray(children) ? children : [children];

  let label: ReactNode = null;
  let control: ReactNode = null;
  let helpText: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === Control) control = item;
      if (item.type === HelpText) helpText = item;
    }
  });

  return {
    label,
    control,
    helpText,
    errorValidation,
    readOnlyValidation,
  };
};
