import React from 'react';
import classNames from 'classnames';
import type { CheckboxLabelProps } from './types';

export const Label = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(
  ({ className: customClassName, isDisabled, hasError, ...rest }, ref) => {
    return (
      <label
        data-testid="sds_checkbox_label"
        className={classNames('sds_checkbox_label', {
          'sds_checkbox_label--error': !isDisabled && hasError,
          'sds_checkbox_label--disabled': isDisabled,
          [customClassName as string]: customClassName,
        })}
        {...rest}
        ref={ref}
      ></label>
    );
  }
);
