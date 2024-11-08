import React, { cloneElement, forwardRef } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import { useColorPicker } from './useColorPicker';
import type { ColorPickerProps } from './types';
import './color-picker.scss';

export const ColorPicker = Object.assign(
  forwardRef<HTMLDivElement, ColorPickerProps>(
    ({ children, isDisabled, ...rest }, ref) => {
      const { control, helpText, label } = useColorPicker(children);

      if (!control) {
        throw new Error('The <ColorPicker.Control /> subcomponent is required');
      }

      return (
        <div
          data-disabled={isDisabled}
          data-testid="sds_colorPicker"
          className="sds_colorPicker"
          {...rest}
          ref={ref}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_colorPicker_label',
            })}
          {control &&
            cloneElement(control, {
              isDisabled,
            })}
          {helpText &&
            cloneElement(helpText, {
              'data-testid': 'sds_colorPicker_helptext',
              isDisabled,
            })}
        </div>
      );
    }
  ),
  {
    Control,
    Label,
    HelpText,
  }
);
