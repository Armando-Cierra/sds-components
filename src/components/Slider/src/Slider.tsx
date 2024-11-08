import React, { ReactElement, cloneElement } from 'react';
import classNames from 'classnames';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { useSlider } from './useSlider';
import { Control } from './Control';
import { DualControl } from './DualControl';
import type { SliderProps } from './types';
import './slider.scss';

export const Slider = Object.assign(
  React.forwardRef<HTMLDivElement, SliderProps>(
    (
      {
        children,
        className: customClassName,
        hasError = false,
        isDisabled = false,
        ...rest
      },
      ref
    ) => {
      const { label, control, dualControl, helpText, errorValidation } =
        useSlider({
          children,
          hasError,
          isDisabled,
        });

      if (!control && !dualControl)
        throw new Error(
          'The <Slider.Control /> or <Slider.DualControl /> subcomponents are required to render the component'
        );

      return (
        <div
          data-testid="sds_slider"
          className={classNames('sds_slider', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_slider_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_slider_label',
            })}
          {control}
          {!control && dualControl}
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_slider_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_slider_helpText',
              hasError: errorValidation,
            })}
        </div>
      );
    }
  ),
  {
    Label,
    Control,
    DualControl,
    HelpText,
  }
);
