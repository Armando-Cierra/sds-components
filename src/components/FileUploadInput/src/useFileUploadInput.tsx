import { ReactNode, isValidElement } from 'react';
import { Control } from './Control';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';

export const useFileUploadInput = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let control: React.ReactNode | null = null;
  let label: React.ReactNode | null = null;
  let helptext: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Control) control = item;
      if (item.type === Label) label = item;
      if (item.type === HelpText) helptext = item;
    }
  });

  return {
    control,
    label,
    helptext,
  };
};
