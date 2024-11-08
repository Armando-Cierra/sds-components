import React, { forwardRef } from 'react';
import type { LabelProps } from './types';
import classNames from 'classnames';

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, labelPosition, className: customClassName, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        {...rest}
        data-testid="sds_meter_label"
        className={classNames('sds_meter_label', {
          'sds_meter_label--after': labelPosition === 'after',
          'sds_meter_label--before': labelPosition === 'before',
          'sds_meter_label--below': labelPosition === 'below',
          'sds_meter_label--above': labelPosition === 'above',
          [customClassName as string]: customClassName,
        })}
      >
        {children}
      </label>
    );
  }
);
