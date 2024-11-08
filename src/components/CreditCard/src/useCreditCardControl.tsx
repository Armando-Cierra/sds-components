import { ReactNode, isValidElement } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import type { NumberInput } from '../../NumberInput';
import type { TextInput } from '../../TextInput';

type ControlType = typeof NumberInput.Control | typeof TextInput.Control;

export const useCreditCardControl = (
  children: ReactNode,
  type: ControlType
) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let label: React.ReactNode | null = null;
  let control: React.ReactNode | null = null;
  let helpText: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === type) {
        control = item;
      }
      if (item.type === HelpText) helpText = item;
    }
  });

  return {
    label,
    control,
    helpText,
  };
};
