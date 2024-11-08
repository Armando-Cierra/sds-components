import React, { ReactNode } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
import { DateTime, Info } from 'luxon';
import type { UseDatePicker, MenuOptionValues } from './types';
import { getPredefinedRanges } from './utils';

export const useDatePicker = ({
  format = 'MM/dd/yyyy',
  activeDate,
  date: singleDate,
  datesRange,
  minDate,
  maxDate,
  daysRangeLimit,
  lang,
  datePickerType,
}: UseDatePicker) => {
  const currentDate = DateTime.now();

  const getWeekDays = () => {
    const newWeekDaysArray = Info.weekdays('long', { locale: lang });
    const sunday = newWeekDaysArray.pop() as string;
    newWeekDaysArray.unshift(sunday);

    return newWeekDaysArray;
  };

  const getMonthLongName = () => {
    return DateTime.fromFormat(activeDate, format).setLocale(lang).monthLong;
  };

  const getYear = () => {
    return DateTime.fromFormat(activeDate, format).year;
  };

  const validatingDayWithMinMaxLimits = (singleDate: DateTime) => {
    const minDateObj = minDate
      ? DateTime.fromFormat(minDate, format)
      : undefined;
    const maxDateObj = maxDate
      ? DateTime.fromFormat(maxDate, format)
      : undefined;

    let minDateValidation = false;
    let maxDateValidation = false;

    if (minDateObj || maxDateObj) {
      if (minDateObj && singleDate.toMillis() < minDateObj.toMillis())
        minDateValidation = true;

      if (maxDateObj && singleDate.toMillis() > maxDateObj.toMillis())
        maxDateValidation = true;
    }

    return minDateValidation || maxDateValidation;
  };

  const validatingMonth = (monthNumber: number) => {
    const activeDateObj = DateTime.fromFormat(activeDate, format);
    const minDateObj = minDate
      ? DateTime.fromFormat(minDate, format)
      : undefined;
    const maxDateObj = maxDate
      ? DateTime.fromFormat(maxDate, format)
      : undefined;

    if (minDateObj || maxDateObj) {
      if (minDateObj) {
        if (activeDateObj.year < minDateObj.year) return true;
        if (
          monthNumber < minDateObj.month &&
          activeDateObj.year <= minDateObj.year
        )
          return true;
      }

      if (maxDateObj) {
        if (activeDateObj.year > maxDateObj.year) return true;
        if (
          monthNumber > maxDateObj.month &&
          activeDateObj.year >= maxDateObj.year
        )
          return true;
      }
    }
    return false;
  };

  const validatingYear = (year: string) => {
    const minDateObj = minDate
      ? DateTime.fromFormat(minDate, format)
      : undefined;
    const maxDateObj = maxDate
      ? DateTime.fromFormat(maxDate, format)
      : undefined;

    if (minDateObj || maxDateObj) {
      if (minDateObj && Number(year) < minDateObj.year) return true;
      if (maxDateObj && Number(year) > maxDateObj.year) return true;
    }
    return false;
  };

  const validatingActiveMonth = (month: string) => {
    const currentMonth = DateTime.fromFormat(activeDate, format).setLocale(
      lang
    ).monthLong;

    return currentMonth === month;
  };

  const validatingActiveYear = (year: string) => {
    const currentYear = DateTime.fromFormat(activeDate, format).year;

    return String(currentYear) === year;
  };

  const validateDaysRangeLimit = (date?: DateTime) => {
    if (
      datesRange &&
      datesRange.startDate &&
      !datesRange.endDate &&
      format &&
      daysRangeLimit &&
      date
    ) {
      const startDateObj = DateTime.fromFormat(datesRange.startDate, format);
      const dateLimitObj = startDateObj.plus({ days: daysRangeLimit - 1 });

      if (date.toMillis() > dateLimitObj.toMillis()) {
        return true;
      }
      return false;
    }

    return false;
  };

  const generateDayButton = (
    currentActiveDate: DateTime,
    day: number,
    selectedDate: DateTime | undefined,
    selectedStartDate: DateTime | undefined,
    selectedEndDate: DateTime | undefined,
    calendarPosition: 'previous' | 'current' | 'next',
    limitDayValidation: boolean,
    daysLimitValidation: boolean,
    updatingInnerSelectedDate: (e: string) => void,
    hoveredDate?: string | undefined,
    setHoveredDate?: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    const basedOnPositionCurrentActiveDate = () => {
      if (calendarPosition === 'previous')
        return currentActiveDate.minus({ month: 1 });
      if (calendarPosition === 'next')
        return currentActiveDate.plus({ month: 1 });
      return currentActiveDate;
    };

    const date = basedOnPositionCurrentActiveDate().set({ day });

    const getCurrentDateValidation =
      basedOnPositionCurrentActiveDate().set({ day }).toFormat(format) ===
      DateTime.now().toFormat(format);

    const getSelectedDateValidation =
      selectedDate && selectedDate.toFormat(format) === date.toFormat(format);

    const getSelectedStartDateValidation =
      selectedStartDate &&
      selectedStartDate.toFormat(format) ===
        basedOnPositionCurrentActiveDate().set({ day }).toFormat(format);

    const getSelectedEndDateValidation =
      selectedEndDate &&
      selectedEndDate.toFormat(format) ===
        basedOnPositionCurrentActiveDate().set({ day }).toFormat(format);

    const getRangeValidation =
      selectedStartDate &&
      selectedEndDate &&
      basedOnPositionCurrentActiveDate().set({ day }).toMillis() >
        selectedStartDate.toMillis() &&
      basedOnPositionCurrentActiveDate().set({ day }).toMillis() <
        selectedEndDate.toMillis();

    const getHoveredRangeValidation =
      hoveredDate &&
      selectedStartDate &&
      !selectedEndDate &&
      DateTime.fromFormat(hoveredDate, format).toMillis() >
        selectedStartDate.toMillis() &&
      basedOnPositionCurrentActiveDate().set({ day }).toMillis() >
        selectedStartDate.toMillis() &&
      basedOnPositionCurrentActiveDate().set({ day }).toMillis() <=
        DateTime.fromFormat(hoveredDate, format).toMillis();

    return (
      <button
        key={uniqid(`sds_datePicker_${calendarPosition}Month_day_`)}
        disabled={limitDayValidation || daysLimitValidation}
        data-testid={`sds_datePicker_${calendarPosition}CalendarDay_${day}`}
        className={classNames(
          'sds_datePicker_calendar_baseIndex_daysOfMonth_day',
          `sds_datePicker_calendar_baseIndex_daysOfMonth_day--${
            calendarPosition === 'current' ? 'currentMonth' : 'notCurrentMonth'
          }`,
          {
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--currentDate':
              getCurrentDateValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--selectedDate':
              getSelectedDateValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--selectedStartDate':
              getSelectedStartDateValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--selectedEndDate':
              getSelectedEndDateValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--range':
              getRangeValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--hoveredRange':
              getHoveredRangeValidation,
            'sds_datePicker_calendar_baseIndex_daysOfMonth_day--disabled':
              limitDayValidation || daysLimitValidation,
          }
        )}
        onClick={() =>
          updatingInnerSelectedDate(
            basedOnPositionCurrentActiveDate().set({ day }).toFormat(format)
          )
        }
        {...(datePickerType === 'range' && {
          onMouseEnter: (e) => {
            e.stopPropagation();
            setHoveredDate?.(
              basedOnPositionCurrentActiveDate().set({ day }).toFormat(format)
            );
          },
        })}
      >
        {day}
      </button>
    );
  };

  const getActiveDateCalendarDaysArray = (
    updatingInnerSelectedDate: (e: string) => void,
    hoveredDate?: string | undefined,
    setHoveredDate?: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    const selectedDate = singleDate
      ? DateTime.fromFormat(singleDate, format)
      : undefined;
    const selectedStartDate =
      datesRange && datesRange.startDate
        ? DateTime.fromFormat(datesRange.startDate, format)
        : undefined;
    const selectedEndDate =
      datesRange && datesRange.endDate
        ? DateTime.fromFormat(datesRange.endDate, format)
        : undefined;
    const currentActiveDate = DateTime.fromFormat(activeDate, format);
    const lastDayOfPreviousMonth = currentActiveDate
      .minus({ month: 1 })
      .endOf('month').day;
    const lastDayOfCurrentMonth = currentActiveDate.endOf('month').day;
    const firstWeekDayOfCurrentMonth =
      currentActiveDate.startOf('month').weekday;
    const lastWeekDayOfCurrentMonth = currentActiveDate.endOf('month').weekday;

    const previousMonthDaysArray: ReactNode[] = [];
    for (let i = 0; i <= firstWeekDayOfCurrentMonth - 1; i++) {
      const day = lastDayOfPreviousMonth - i;
      const limitDayValidation = validatingDayWithMinMaxLimits(
        currentActiveDate.minus({ month: 1 }).set({ day })
      );
      const daysLimitValidation = validateDaysRangeLimit(
        currentActiveDate.minus({ month: 1 }).set({ day })
      );

      previousMonthDaysArray.push(
        generateDayButton(
          currentActiveDate,
          day,
          selectedDate,
          selectedStartDate,
          selectedEndDate,
          'previous',
          limitDayValidation,
          daysLimitValidation,
          updatingInnerSelectedDate,
          hoveredDate,
          setHoveredDate
        )
      );
    }

    const currentMonthDaysArray: ReactNode[] = [];
    for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
      const limitDayValidation = validatingDayWithMinMaxLimits(
        currentActiveDate.set({ day: i })
      );
      const daysLimitValidation = validateDaysRangeLimit(
        currentActiveDate.set({ day: i })
      );

      currentMonthDaysArray.push(
        generateDayButton(
          currentActiveDate,
          i,
          selectedDate,
          selectedStartDate,
          selectedEndDate,
          'current',
          limitDayValidation,
          daysLimitValidation,
          updatingInnerSelectedDate,
          hoveredDate,
          setHoveredDate
        )
      );
    }

    const nextMonthDaysArray: ReactNode[] = [];
    for (let i = 1; i <= 6 - lastWeekDayOfCurrentMonth; i++) {
      const limitDayValidation = validatingDayWithMinMaxLimits(
        currentActiveDate.plus({ month: 1 }).set({ day: i })
      );

      const daysLimitValidation = validateDaysRangeLimit(
        currentActiveDate.plus({ month: 1 }).set({ day: i })
      );

      nextMonthDaysArray.push(
        generateDayButton(
          currentActiveDate,
          i,
          selectedDate,
          selectedStartDate,
          selectedEndDate,
          'next',
          limitDayValidation,
          daysLimitValidation,
          updatingInnerSelectedDate,
          hoveredDate,
          setHoveredDate
        )
      );
    }

    const validatedPreviousMonthDaysArray =
      previousMonthDaysArray.length < 7 ? previousMonthDaysArray : [];

    const validatedNextMonthDaysArray =
      nextMonthDaysArray.length < 7 ? nextMonthDaysArray : [];

    return [
      ...validatedPreviousMonthDaysArray.reverse(),
      ...currentMonthDaysArray,
      ...validatedNextMonthDaysArray,
    ];
  };

  const validatePredefinedRangesWithDaysLimit = (
    predefinedRangeName: MenuOptionValues
  ) => {
    const predefinedRange = getPredefinedRanges(predefinedRangeName, format);
    const predefinedRangeStartDateObj = DateTime.fromFormat(
      predefinedRange.startDate,
      format
    );
    const predefinedRangeEndDateObj = DateTime.fromFormat(
      predefinedRange.endDate,
      format
    );
    const rangeDaysQuantity = predefinedRangeEndDateObj
      .diff(predefinedRangeStartDateObj, 'days')
      .toObject().days;

    if (daysRangeLimit && rangeDaysQuantity) {
      if (rangeDaysQuantity > daysRangeLimit - 1) return true;

      return false;
    }

    return false;
  };

  const validateMonthsNavigation = (navigation: 'back' | 'next') => {
    if (navigation === 'back' && minDate) {
      const minDateMonth = DateTime.fromFormat(minDate, format).month;
      const activeDateMonth = DateTime.fromFormat(activeDate, format).minus({
        month: 1,
      }).month;

      if (activeDateMonth < minDateMonth) return true;
      return false;
    }

    if (navigation === 'next' && maxDate) {
      const maxDateMonth = DateTime.fromFormat(maxDate, format).month;
      const activeDateMonth = DateTime.fromFormat(activeDate, format).plus({
        month: 1,
      }).month;

      if (activeDateMonth > maxDateMonth) return true;
      return false;
    }

    return false;
  };

  const validateYearsNavigation = (
    navigation: 'back' | 'next',
    yearsArray: string[]
  ) => {
    if (navigation === 'back' && minDate) {
      const minDateYear = DateTime.fromFormat(minDate, format).year;
      if (yearsArray.indexOf(String(minDateYear)) !== -1) return true;
      return false;
    }

    if (navigation === 'next' && maxDate) {
      const maxDateYear = DateTime.fromFormat(maxDate, format).year;
      if (maxDateYear && yearsArray.indexOf(String(maxDateYear)) !== -1)
        return true;
      return false;
    }

    return false;
  };

  return {
    currentDate,
    getWeekDays,
    getMonthLongName,
    getYear,
    validatingDayWithMinMaxLimits,
    validatingActiveMonth,
    validatingActiveYear,
    validateDaysRangeLimit,
    getActiveDateCalendarDaysArray,
    validatePredefinedRangesWithDaysLimit,
    validateMonthsNavigation,
    validateYearsNavigation,
    validatingMonth,
    validatingYear,
  };
};
