import React, { forwardRef, CSSProperties } from 'react';
import { useControl } from './useControl';
import { Icon } from './Icon';
import type { TextareaControlProps } from './types';
import classNames from 'classnames';

const Control = forwardRef<HTMLTextAreaElement, TextareaControlProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      onChange,
      isReadOnly = false,
      isDisabled = false,
      id = '',
      hasError = false,
      customFilter,
      maxLength,
      maxLengthCounter,
      className: customClassName,
      ...rest
    },
    ref
  ) => {
    const {
      formattedValue,
      characterLength,
      errorValidation,
      readOnlyValidation,
      isInteractivityDisabled,
      changeEvent,
    } = useControl({
      controlledValue,
      defaultValue,
      isDisabled,
      maxLength,
      hasError,
      isReadOnly,
      onChange,
      customFilter,
    });

    const style: CSSProperties | undefined = maxLengthCounter
      ? {
          position: 'absolute',
          top: '100%',
          right: '0',
        }
      : undefined;

    return (
      <div className="sds_textarea_textareaBox">
        <textarea
          ref={ref}
          data-testid="sds_textarea"
          {...(!isInteractivityDisabled && { id })}
          onChange={changeEvent}
          value={formattedValue}
          disabled={isDisabled}
          className={classNames('sds_textarea_field', {
            [customClassName as string]: customClassName,
            'sds_textarea_field--error': errorValidation,
            'sds_textarea_field--disabled': isDisabled,
            'sds_textarea_field--readOnly': readOnlyValidation,
          })}
          {...rest}
        />
        {errorValidation && <Icon name="error" />}
        {readOnlyValidation && <Icon name="readOnly" />}
        <div className="sds_helpTextBox">
          {maxLengthCounter !== 0 && maxLengthCounter !== undefined && (
            <span
              style={style}
              data-error={hasError && !isReadOnly && !isDisabled}
              data-disabled={isDisabled}
              className={classNames('sds_textarea_helpText_counter', {
                'sds_textarea_helpText_counter--error': errorValidation,
              })}
            >{`${characterLength}/${maxLengthCounter}`}</span>
          )}
        </div>
      </div>
    );
  }
);

export { Control };
