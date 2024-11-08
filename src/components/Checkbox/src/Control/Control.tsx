import React from 'react';
import classNames from 'classnames';
import { useControl } from './useControl';
import type { CheckboxControlProps } from './types';

export const Control = React.forwardRef<HTMLInputElement, CheckboxControlProps>(
  (
    {
      className: customClassName,
      id,
      checked: controlledCheck,
      defaultChecked,
      hasError = false,
      isIndeterminate = false,
      isDisabled = false,
      onChange,
      style,
      ...rest
    },
    ref
  ) => {
    const { innerID, changeEvent, errorValidation } = useControl({
      hasError,
      isDisabled,
      onChange,
    });

    return (
      <>
        <input
          id={id ?? innerID}
          data-testid="sds_checkbox_input"
          type="checkbox"
          {...(defaultChecked !== undefined && {
            defaultChecked: defaultChecked,
          })}
          {...(controlledCheck !== undefined && { checked: controlledCheck })}
          className="sds_checkbox_input"
          disabled={isDisabled}
          onChange={changeEvent}
          ref={ref}
          {...rest}
        />
        <label
          data-testid="sds_checkbox_inputBox"
          htmlFor={id ?? innerID}
          className={classNames('sds_checkbox_control', {
            'sds_checkbox_control--indeterminate': isIndeterminate,
            'sds_checkbox_control--error': errorValidation,
            'sds_checkbox_control--disabled': isDisabled,
            [customClassName as string]: customClassName,
          })}
          style={style}
        />
      </>
    );
  }
);
