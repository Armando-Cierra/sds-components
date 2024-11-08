import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import { Control } from './Control';
import { useSingleDatePicker } from './useSingleDatePicker';
import type { SingleDatePickerProps } from './types';
import '../date-picker.scss';

export const SingleDatePicker = Object.assign(
  React.forwardRef<HTMLDivElement, SingleDatePickerProps>(
    (
      {
        className: customClassName,
        children,
        isDisabled = false,
        isReadOnly = false,
        hasError = false,
        ...rest
      },
      ref
    ) => {
      const { label, control, helpText, errorValidation, readOnlyValidation } =
        useSingleDatePicker({ children, hasError, isDisabled, isReadOnly });

      if (!control) {
        throw new Error(
          'The <SingleDatePicker.Control> subcomponent is required to render the component'
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
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_datePicker_label',
            })}
          {React.cloneElement(control, {
            isReadOnly: readOnlyValidation,
            isDisabled: isDisabled,
            hasError: errorValidation,
          })}
          {helpText &&
            React.cloneElement(helpText, {
              className: classNames('sds_datePicker_helpText', {
                [(helpText as ReactElement).props.className]: (
                  helpText as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_datePicker_helpText',
              hasError: errorValidation,
              isReadOnly: readOnlyValidation,
              isDisabled: isDisabled,
            })}
        </div>
      );
    }
  ),
  { Label, HelpText, Control }
);
