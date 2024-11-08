import React, { forwardRef } from 'react';
import type { NumberInputControlProps } from './types';
import { useControl } from './useControl';
import { Button } from '../../../Button';
import { Icon } from './Icon';
import classNames from 'classnames';

export const Control = forwardRef<HTMLInputElement, NumberInputControlProps>(
  (
    {
      className: customClassName,
      value: controlledValue,
      defaultValue = '',
      id,
      children,
      max: maxValue,
      min: minValue,
      hasError = false,
      isDisabled = false,
      isReadOnly = false,
      showButtons = false,
      maxLength,
      isWholeNumbersOnly = false,
      customFilter,
      onChange,
      ...rest
    }: NumberInputControlProps,
    ref
  ) => {
    const {
      formattedValue,
      showButtonsValidation,
      errorValidation,
      readOnlyValidation,
      buttonAction,
      changeEvent,
      isInteractivityDisabled,
      validateDecreaseButton,
      validateIncreaseButton,
    } = useControl({
      controlledValue,
      defaultValue,
      hasError,
      isReadOnly,
      isDisabled,
      showButtons,
      children,
      maxValue,
      minValue,
      maxLength,
      isWholeNumbersOnly,
      filterFn: customFilter,
      onChange,
    });

    return (
      <div
        className={classNames('sds_numberInput_box', {
          'sds_numberInput_box--showButtons': showButtonsValidation,
        })}
      >
        <input
          data-testid="sds_numberInput_input"
          className={classNames('sds_numberInput_input', {
            [customClassName as string]: customClassName,
            'sds_numberInput_input--error': errorValidation,
            'sds_numberInput_input--disabled': isDisabled,
            'sds_numberInput_input--showButtons': showButtonsValidation,
            'sds_numberInput_input--readOnly': readOnlyValidation,
          })}
          {...(!isInteractivityDisabled && { id })}
          value={formattedValue}
          readOnly={isReadOnly}
          disabled={isInteractivityDisabled}
          max={maxValue}
          min={minValue}
          ref={ref}
          onChange={changeEvent}
          {...rest}
        />
        {errorValidation && <Icon name="error" />}
        {readOnlyValidation && <Icon name="readOnly" />}
        {showButtonsValidation && (
          <>
            <Button
              type="button"
              className={classNames('sds_numberInput_minusBtn', {
                'sds_numberInput_buton--disabled': isDisabled,
              })}
              iconOnly="minus--fill"
              data-testid="sds_numberInput_decreaseBtn"
              isDisabled={validateDecreaseButton()}
              onClick={buttonAction('decrease')}
            />
            <Button
              type="button"
              className={classNames('sds_numberInput_plusBtn', {
                'sds_numberInput_buton--disabled': isDisabled,
              })}
              iconOnly="plus--fill"
              data-testid="sds_numberInput_increaseBtn"
              isDisabled={validateIncreaseButton()}
              onClick={buttonAction('increase')}
            />
          </>
        )}
      </div>
    );
  }
);
