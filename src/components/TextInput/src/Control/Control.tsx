import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { useControl } from './useControl';
import type { TextInputControlProps } from './types';

export const Control = forwardRef<HTMLInputElement, TextInputControlProps>(
  (
    {
      value: controlledValue,
      defaultValue = '',
      className: customClassName,
      id = '',
      hasError = false,
      isReadOnly = false,
      isDisabled = false,
      prefix,
      sufix,
      maxLength,
      alphanumericOnly = false,
      lettersOnly = false,
      customFilter,
      icon,
      hasClearAction = false,
      clearActionVisibility = 'auto',
      onChange,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      onClear,
      ...rest
    },
    ref
  ) => {
    const {
      formattedValue,
      errorValidation,
      readOnlyValidation,
      handleChange,
      cleanEvent,
      shouldShowClearIcon,
    } = useControl({
      controlledValue,
      defaultValue,
      hasError,
      isReadOnly,
      isDisabled,
      maxLength,
      alphanumericOnly,
      lettersOnly,
      customFilter,
      icon,
      hasClearAction,
      onChange,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      onClear,
    });

    return (
      <div
        className={classNames('sds_textInput_controlBox', {
          'sds_textInput_controlBox--hasPrefix': prefix,
          'sds_textInput_controlBox--hasSufix': sufix,
        })}
      >
        {prefix && (
          <div
            data-testid="sds_textInput_prefix"
            className="sds_textInput_prefix"
          >
            <span>{prefix}</span>
          </div>
        )}
        <div className="sds_textInput_inputBox">
          <input
            ref={ref}
            data-testid="sds_textInput_input"
            data-letters_only={lettersOnly}
            data-alphanumeric_only={alphanumericOnly}
            data-custom_filter={!!customFilter}
            {...(!isReadOnly && !isDisabled && { id })}
            type="text"
            className={classNames('sds_textInput_input', {
              [customClassName as string]: customClassName,
              'sds_textInput_input--hasIcon': icon !== undefined,
              'sds_textInput_input--hasClearAction': hasClearAction,
              'sds_textInput_input--autoHideClearAction':
                clearActionVisibility === 'auto',
              'sds_textInput_input--error': errorValidation,
              'sds_textInput_input--disabled': isDisabled,
              'sds_textInput_input--readOnly': readOnlyValidation,
              'sds_textInput_input--prefix': prefix,
              'sds_textInput_input--sufix': sufix,
            })}
            value={formattedValue}
            disabled={isDisabled}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...rest}
          />
          {icon && <Telicon className="sds_textInput_icon" iconName={icon} />}
          {errorValidation && (
            <Telicon
              className="sds_textInput_icon sds_textInput_icon--error"
              iconName="warning-octagon--fill"
            />
          )}
          {readOnlyValidation && (
            <Telicon
              className="sds_textInput_icon sds_textInput_icon--readOnly"
              iconName="lock--fill"
            />
          )}
          {shouldShowClearIcon && (
            <div
              className={classNames('sds_textInput_clearAction', {
                'sds_textInput_clearAction--error': hasError,
                'sds_textInput_clearAction--always':
                  clearActionVisibility === 'always',
              })}
              onClick={cleanEvent}
            >
              <Telicon
                className="sds_textInput_clearAction_icon"
                iconName="x--fill"
              />
            </div>
          )}
        </div>
        {sufix && (
          <div
            className="sds_textInput_sufix"
            data-testid="sds_textInput_sufix"
          >
            <span>{sufix}</span>
          </div>
        )}
      </div>
    );
  }
);
