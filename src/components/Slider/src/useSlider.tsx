import {
  ReactElement,
  cloneElement,
  isValidElement,
  type ReactNode,
} from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import { DualControl } from './DualControl';
import type { UseSlider } from './types';

export const useSlider = ({ children, hasError, isDisabled }: UseSlider) => {
  const errorValidation = !isDisabled && hasError;

  const childrenArray = Array.isArray(children) ? children : [children];
  let label: ReactNode = null;
  let control: ReactNode = null;
  let dualControl: ReactNode = null;
  let helpText: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === Control)
        control = cloneElement(item as ReactElement, {
          hasError: errorValidation,
          isDisabled: isDisabled,
        });
      if (item.type === DualControl)
        dualControl = cloneElement(item as ReactElement, {
          hasError: errorValidation,
          isDisabled: isDisabled,
        });
      if (item.type === HelpText) helpText = item;
    }
  });

  if (control && dualControl)
    throw new Error(
      'You can only use <Slider.Control /> or <Slider.DualControl /> subcomponents at the time to render the component'
    );

  return {
    label,
    control,
    dualControl,
    helpText,
    errorValidation,
  };
};
