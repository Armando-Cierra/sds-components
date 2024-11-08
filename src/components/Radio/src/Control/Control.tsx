import React from 'react';
import classNames from 'classnames';
import { useControl } from './useControl';
import type { RadioControlProps } from './types';

export const Control = React.forwardRef<HTMLInputElement, RadioControlProps>(
  (
    {
      className: customClassName,
      id,
      checked: controlledCheck,
      defaultChecked,
      hasError = false,
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
          data-testid="sds_radio_input"
          id={id ?? innerID}
          type="radio"
          {...(defaultChecked !== undefined && {
            defaultChecked: defaultChecked,
          })}
          {...(controlledCheck !== undefined && { checked: controlledCheck })}
          className="sds_radio_input"
          disabled={isDisabled}
          onChange={changeEvent}
          ref={ref}
          {...rest}
        />
        <label
          data-testid="sds_radio_inputBox"
          htmlFor={id ?? innerID}
          className={classNames('sds_radio_control', {
            'sds_radio_control--error': errorValidation,
            'sds_radio_control--disabled': isDisabled,
            [customClassName as string]: customClassName,
          })}
          style={style}
        />
      </>
    );
  }
);
