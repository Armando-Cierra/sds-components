import React from 'react';
import classNames from 'classnames';
import type { RadioLabelProps } from './types';

export const Label = React.forwardRef<HTMLLabelElement, RadioLabelProps>(
  ({ className: customClassName, isDisabled, hasError, ...rest }, ref) => {
    const errorValidation = !isDisabled && hasError;

    return (
      <label
        data-testid="sds_radio_label"
        className={classNames('sds_radio_label', {
          'sds_radio_label--error': errorValidation,
          'sds_radio_label--disabled': isDisabled,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      ></label>
    );
  }
);
