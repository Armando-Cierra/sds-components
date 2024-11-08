import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';
import { Calendar } from '../../Calendar';
import { Icon } from '../../Icon';
import { useControl } from './useControl';
import type { DatePickerFormats } from '../../types';
import type { SingleDatePickerControlProps } from './types';

export const Control = React.forwardRef<
  HTMLDivElement,
  SingleDatePickerControlProps
>(
  (
    {
      className: customClassName,
      id,
      defaultOpen = false,
      side = 'bottom',
      align = 'start',
      sideOffset = 4,
      alignOffset = 0,
      date: controlledDate,
      defaultDate,
      maxDate,
      minDate,
      lang = 'en',
      format: usersFormat = 'mm/dd/yyyy',
      hasError = false,
      isDisabled = false,
      isReadOnly = false,
      onDateSelection,
      ...rest
    },
    ref
  ) => {
    const format = usersFormat.replaceAll('m', 'M') as DatePickerFormats;
    const className = classNames('sds_datePicker_control', {
      [customClassName as string]: customClassName,
    });

    const {
      date,
      updatingInnerSelectedDate,
      readOnlyValidation,
      errorValidation,
      validatedMaxDate,
      validatedMinDate,
    } = useControl({
      className,
      id,
      controlledDate,
      defaultDate,
      maxDate,
      minDate,
      lang,
      format,
      hasError,
      isReadOnly,
      isDisabled,
      onDateSelection,
    });

    return (
      <div
        className={className}
        data-testid="sds_datePicker_control"
        ref={ref}
        {...rest}
      >
        <Popover.Root
          defaultOpen={defaultOpen}
          {...((isReadOnly || isDisabled) && { open: false })}
        >
          <Popover.Trigger asChild className="radix_trigger">
            <button
              className={classNames('sds_datePicker_control_box', {
                'sds_datePicker_control_box--disabled': isDisabled,
                'sds_datePicker_control_box--readOnly': readOnlyValidation,
                'sds_datePicker_control_box--error': errorValidation,
              })}
              data-testid="sds_datePicker_control_trigger"
            >
              {date ? (
                date
              ) : (
                <span className="sds_datePicker_control_box_placeholder">
                  {format.toLowerCase()}
                </span>
              )}
              {errorValidation && (
                <Icon
                  className="sds_datePicker_control_icon--error"
                  name="error"
                />
              )}
              {readOnlyValidation && (
                <Icon
                  className="sds_datePicker_control_icon--readOnly"
                  name="readOnly"
                />
              )}
              <Icon
                className="sds_datePicker_control_icon--calendar"
                name="calendar"
              />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
            >
              <div
                className="sds_datePicker_calendarBox"
                data-testid="sds_datePicker_calendar"
              >
                <Calendar
                  datePickerType="single"
                  lang={lang}
                  date={date}
                  maxDate={validatedMaxDate}
                  minDate={validatedMinDate}
                  format={format}
                  isDisabled={isDisabled}
                  updatingInnerSelectedDate={updatingInnerSelectedDate}
                />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    );
  }
);
