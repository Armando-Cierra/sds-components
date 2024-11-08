import React, { cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { Bar } from './Bar';
import { useMeter } from './useMeter';
import type { MeterProps } from './types';
import './meter.scss';

export const Meter = Object.assign(
  forwardRef<HTMLDivElement, MeterProps>(
    (
      {
        labelPosition = 'above',
        children,
        className: customClassName,
        ...rest
      },
      ref
    ) => {
      const { label, styles, bar } = useMeter({
        children,
        labelPosition,
      });

      if (!bar) {
        throw new Error('The <Meter.Bar /> subcomponent is required.');
      }

      return (
        <div
          {...rest}
          ref={ref}
          className={classNames({
            [customClassName as string]: customClassName,
          })}
          style={{ ...styles, ...rest.style }}
        >
          {label &&
            cloneElement(label, {
              labelPosition,
            })}
          {bar && cloneElement(bar)}
        </div>
      );
    }
  ),
  {
    Label,
    Bar,
  }
);
