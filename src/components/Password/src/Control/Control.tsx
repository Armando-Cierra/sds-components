import React, { forwardRef, useState } from 'react';
import { useControl } from './useControl';
import { Button } from '../../../Button';
import { Icon } from './Icon';
import type { PasswordControlProps } from './types';
import classNames from 'classnames';

const Control = forwardRef<HTMLDivElement, PasswordControlProps>(
  (
    {
      className: customClassName,
      defaultValue,
      value: controlledValue,
      isDisabled,
      maxLength,
      onChange,
      customFilter,
      hasError,
      ...rest
    }: PasswordControlProps,
    ref
  ) => {
    const [visibility, setVisibility] = useState(false);

    const { formattedValue, onChangeEvent } = useControl({
      isDisabled,
      controlledValue,
      defaultValue,
      maxLength,
      onChange,
      customFilter,
    });

    const className = customClassName
      ? `${customClassName} sds_password_inputBox`
      : 'sds_password_inputBox';

    return (
      <div
        className={classNames('sds_password_box', {
          'sds_password--disabled': isDisabled,
        })}
      >
        <div ref={ref} className={className}>
          <input
            data-testid="sds_password_input"
            className={classNames('sds_password_input', {
              [customClassName as string]: customClassName,
              'sds_password_input--error': hasError && !isDisabled,
              'sds_password_input--disabled': isDisabled,
            })}
            type={visibility ? 'text' : 'password'}
            value={formattedValue}
            disabled={isDisabled}
            onChange={onChangeEvent}
            {...rest}
          />
          {hasError && !isDisabled && <Icon hasError={hasError} />}
        </div>
        <Button
          className="sds_password_button"
          iconOnly={visibility ? 'eye--fill' : 'eye-slash--fill'}
          data-testid="sds_password_button"
          isDisabled={isDisabled}
          type="button"
          onClick={() => {
            setVisibility((prevState) => !prevState);
          }}
        />
      </div>
    );
  }
);

export { Control };
