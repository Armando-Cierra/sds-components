import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import { Control } from './Control';
import { useRangeDatePicker } from './useRangeDatePicker';
import type { RangeDatePickerProps } from './types';
import '../date-picker.scss';

export const RangeDatePicker = Object.assign(
  React.forwardRef<HTMLDivElement, RangeDatePickerProps>(
    (
      {
        className: customClassName,
        children,
        isDisabled = false,
        hasError = false,
        isReadOnly = false,
        ...rest
      },
      ref
    ) => {
      const { label, control, helpText, errorValidation, readOnlyValidation } =
        useRangeDatePicker({
          children,
          isDisabled,
          isReadOnly,
          hasError,
        });

      if (!control) {
        throw new Error(
          'The <RangeDatePicker.Control> subcomponent is required to render the component'
        );
      }

      return (
        <div
          data-testid="sds_datePicker"
          className={classNames('sds_datePicker', {
            [customClassName as string]: customClassName,
            'sds_datePicker--isDisabled': isDisabled,
            'sds_datePicker--hasError': !isDisabled && hasError,
          })}
          {...rest}
          ref={ref}
        >
          {label &&
            React.cloneElement(label, {
              className: classNames('sds_datePicker_label', {
                [(label as ReactElement).props.className]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_datePicker_label',
            })}
          {React.cloneElement(control, {
            isDisabled: isDisabled,
            hasError: errorValidation,
            isReadOnly: readOnlyValidation,
          })}
          {helpText &&
            React.cloneElement(helpText, {
              className: classNames('sds_datePicker_helpText', {
                [(helpText as ReactElement).props.className]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError: errorValidation,
              isReadOnly: readOnlyValidation,
              isDisabled: isDisabled,
              'data-testid': 'sds_datePicker_helpText',
            })}
        </div>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control,
  }
);
