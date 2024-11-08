import { isValidElement, type ReactNode } from 'react';
import { Label } from '../../Label';
import { Control } from './Control';
import type { UseSwitchProps } from './types';

export const useSwitch = ({ children }: UseSwitchProps) => {
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
