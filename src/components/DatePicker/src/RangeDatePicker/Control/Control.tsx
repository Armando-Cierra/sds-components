import React from 'react';
import classNames from 'classnames';
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from '../../Calendar';
import { Icon } from '../../Icon';
import { useControl } from './useControl';
import type { DatePickerFormats } from '../../types';
import type { RangeDatePickerControlProps } from './types';

export const Control = React.forwardRef<
  HTMLDivElement,
  RangeDatePickerControlProps
>(
  (
    {
      className: customClassName,
      defaultOpen = false,
      side = 'bottom',
      align = 'start',
      sideOffset = 4,
      alignOffset = 0,
      startDate: controlledStartDate,
      endDate: controlledEndDate,
      defaultStartDate,
      defaultEndDate,
      maxDate,
      minDate,
      lang = 'en',
      format: usersFormat = 'mm/dd/yyyy',
      hasError = false,
      isDisabled = false,
      isReadOnly = false,
      predefinedSelection = undefined,
      showPredefinedSelectionsMenu = false,
      predefinedMenuOptions = {
        today: {
          show: true,
          text: 'Today',
        },
        yesterday: {
          show: true,
          text: 'Yesterday',
        },
        last7Days: {
          show: true,
          text: 'Last 7 Days',
        },
        last30Days: {
          show: true,
          text: 'Last 30 Days',
        },
        thisMonth: {
          show: true,
          text: 'This Month',
        },
        lastMonth: {
          show: true,
          text: 'Last Month',
        },
      },
      onDateSelection,
      daysRangeLimit,
      ...rest
    },
    ref
  ) => {
    const format = usersFormat.replaceAll('m', 'M') as DatePickerFormats;

    const {
      datesRange,
      updatingInnerSelectedDate,
      errorValidation,
      readOnlyValidation,
      validatedMaxDate,
      validatedMinDate,
      selectedPredefinedRange,
      updatingSelectedPredefinedRange,
      validateRangeSelection,
    } = useControl({
      controlledStartDate,
      controlledEndDate,
      defaultStartDate,
      defaultEndDate,
      maxDate,
      minDate,
      lang,
      format,
      hasError,
      isDisabled,
      isReadOnly,
      onDateSelection,
      predefinedSelection,
      showPredefinedSelectionsMenu,
      predefinedMenuOptions,
    });

    return (
      <div
        className={classNames('sds_datePicker_control', {
          [customClassName as string]: customClassName,
        })}
        data-error={errorValidation}
        data-disabled={isDisabled}
        data-testid="sds_datePicker_control"
        ref={ref}
        {...rest}
      >
        <Popover.Root
          defaultOpen={defaultOpen}
          {...((isDisabled || readOnlyValidation) && { open: false })}
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
              {selectedPredefinedRange ? (
                predefinedMenuOptions[selectedPredefinedRange]?.text
              ) : datesRange.startDate ? (
                `${datesRange.startDate} - ${
                  datesRange.endDate ?? format.toLowerCase()
                }`
              ) : (
                <span className="sds_datePicker_control_box_placeholder">
                  {`${format.toLowerCase()} - ${format.toLowerCase()}`}
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
                  isDisabled={isDisabled}
                  datePickerType="range"
                  lang={lang}
                  datesRange={datesRange}
                  maxDate={validatedMaxDate}
                  minDate={validatedMinDate}
                  format={format}
                  showPredefinedSelectionsMenu={showPredefinedSelectionsMenu}
                  updatingInnerSelectedDate={updatingInnerSelectedDate}
                  updatingSelectedPredefinedRange={
                    updatingSelectedPredefinedRange
                  }
                  selectedPredefinedRange={selectedPredefinedRange}
                  predefinedMenuOptions={predefinedMenuOptions}
                  validateRangeSelection={validateRangeSelection}
                  daysRangeLimit={daysRangeLimit}
                />
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    );
  }
);
