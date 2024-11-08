import { ReactNode, isValidElement } from 'react';
import { Label } from './Label';
import { Control } from './Control';
import type { useCheckboxProps } from './types';

export const useCheckbox = ({ children }: useCheckboxProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let label: ReactNode = null;
  let control: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === Control) control = item;
    }
  });

  return { label, control };
};
