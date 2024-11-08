import React, { forwardRef } from 'react';
import type { BarProps } from './types';
import classNames from 'classnames';
import { useBar } from './useBar';

export const Bar = forwardRef<HTMLDivElement, BarProps>(
  (
    {
      percentage = 0,
      variant = 'default',
      scales,
      className: customClassName,
      ...rest
    },
    ref
  ) => {
    const { currentScaleClass } = useBar({
      percentage,
      variant,
      scales,
    });

    return (
      <div
        ref={ref}
        {...rest}
        className={classNames('sds_meter_bar', {
          [customClassName as string]: customClassName,
        })}
      >
        <div
          data-testid="sds_meter_bar"
          style={{ width: `${percentage}%` }}
          className={classNames('sds_meter_progressBar', {
            'sds_meter_bar--variant_primary': variant === 'primary',
            [currentScaleClass as string]: currentScaleClass,
          })}
        ></div>
      </div>
    );
  }
);
