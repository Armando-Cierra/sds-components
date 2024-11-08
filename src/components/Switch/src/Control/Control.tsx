import React, { forwardRef } from 'react';
import { useControl } from './useControl';
import type { SwitchControlProps } from './types';
import classNames from 'classnames';

const Control = forwardRef<HTMLInputElement, SwitchControlProps>(
  (
    {
      className: customClassName,
      style,
      defaultChecked,
      checked: controlledCheck,
      id,
      isDisabled,
      onChange,
      ...rest
    }: SwitchControlProps,
    ref
  ) => {
    const { innerID, changeEvent } = useControl({
      isDisabled,
      onChange,
    });

    return (
      <>
        <input
          ref={ref}
          id={id ?? innerID}
          data-testid="sds_switch_input"
          className="sds_switch_input"
          {...(defaultChecked !== undefined && {
            defaultChecked: defaultChecked,
          })}
          {...(controlledCheck !== undefined && { checked: controlledCheck })}
          type="checkbox"
          disabled={isDisabled}
          onChange={changeEvent}
          {...rest}
        />
        <label
          data-testid="sds_switch_inputBox"
          className={classNames('sds_switch_control', {
            [customClassName as string]: customClassName,
            'sds_switch_control--disabled': isDisabled,
          })}
          style={style}
          htmlFor={id ?? innerID}
        >
          <div className="sds_switch_knob" />
        </label>
      </>
    );
  }
);

export { Control };
