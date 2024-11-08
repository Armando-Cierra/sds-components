import { ReactNode, isValidElement } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';

export const useColorPicker = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let label: React.ReactNode | null = null;
  let control: React.ReactNode | null = null;
  let helpText: React.ReactNode | null = null;

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
  };
};
