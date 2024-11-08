/* eslint-disable @typescript-eslint/no-unused-vars */
import { isValidElement } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import type { useTextAreaProps } from './types';

export const useTextarea = (props: useTextAreaProps) => {
  const { children } = props;

  const childrenArray = Array.isArray(children) ? children : [children];

  let control: React.ReactNode | null = null;
  let label: React.ReactNode | null = null;
  let helpText: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Control) control = item;
      if (item.type === Label) label = item;
      if (item.type === HelpText) helpText = item;
    }
  });

  return {
    control,
    label,
    helpText,
  };
};
