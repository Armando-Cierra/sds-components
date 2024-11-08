import React from 'react';
import uniqid from 'uniqid';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import { Button } from '../../../Button';
import { useActiveDate } from './useActiveDate';
import { useCalendar } from './useCalendar';
import { useDatePicker } from '../useDatePicker';
import { getMonthsNames } from '../utils';
import type { CalendarProps } from './types';
import './calendar.scss';

export const Calendar = ({
  isDisabled = false,
  lang,
  format,
  date,
  datesRange,
  updatingInnerSelectedDate,
  maxDate,
  minDate,
  datePickerType,
  showPredefinedSelectionsMenu = false,
  predefinedMenuOptions,
  updatingSelectedPredefinedRange,
  selectedPredefinedRange,
  validateRangeSelection,
  daysRangeLimit,
}: CalendarProps) => {
  const { activeDate, setActiveDate } = useActiveDate({
    datePickerType,
    format,
    date,
    datesRange,
    minDate,
    maxDate,
  });

  const {
    getWeekDays,
    getMonthLongName,
    getYear,
    getActiveDateCalendarDaysArray,
    validatingActiveMonth,
    validatingActiveYear,
    validatePredefinedRangesWithDaysLimit,
    validateYearsNavigation,
    validateMonthsNavigation,
    validatingMonth,
    validatingYear,
  } = useDatePicker({
    isDisabled,
    format,
    activeDate,
    date,
    datesRange,
    minDate,
    maxDate,
    daysRangeLimit,
    lang,
    datePickerType,
  });

  const {
    calendarContent,
    yearsArray,
    handleMonthButton,
    handleYearButton,
    handleMonthSelection,
    handleYearSelection,
    getCalendarNavigationFunction,
    hoveredDate,
    setHoveredDate,
    predefinedArrayList,
  } = useCalendar({
    activeDate,
    setActiveDate,
    lang,
    format,
    datesRange,
  });

  return (
    <>
      {showPredefinedSelectionsMenu && (
        <>
          <div className="sds_datePicker_calendarMenu">
            {showPredefinedSelectionsMenu && (
              <button className="sds_datePicker_calendar_header_fakeButton" />
            )}
            {predefinedMenuOptions &&
              predefinedArrayList.map((item) => {
                if (predefinedMenuOptions[item]?.show)
                  return (
                    <button
                      className={classNames(
                        'sds_datePicker_calendarMenu_range',
                        {
                          'sds_datePicker_calendarMenu_range--selected':
                            selectedPredefinedRange === item,
                          'sds_datePicker_calendarMenu_range--disabled':
                            validateRangeSelection?.(item) ||
                            validatePredefinedRangesWithDaysLimit(item),
                        }
                      )}
                      key={uniqid('sds_datePicker_calendarMenu_range_')}
                      disabled={
                        validateRangeSelection?.(item) ||
                        validatePredefinedRangesWithDaysLimit(item)
                      }
                      onClick={() => updatingSelectedPredefinedRange?.(item)}
                    >
                      {predefinedMenuOptions[item]?.text}
                    </button>
                  );
                return null;
              })}
          </div>
          <div className="sds_datePicker_separator" />
        </>
      )}
      <div
        className={classNames('sds_datePicker_calendar', {
          'sds_datePicker_calendar--selectionMenu':
            showPredefinedSelectionsMenu,
        })}
      >
        <div className="sds_datePicker_calendar_header">
          {!showPredefinedSelectionsMenu && (
            <button className="sds_datePicker_calendar_header_fakeButton" />
          )}
          <Button
            className={classNames({
              'sds_datePicker_calendar_navigationButton--hidden':
                calendarContent === 'month',
            })}
            variant="ghost"
            isDisabled={
              (calendarContent === 'year' &&
                validateYearsNavigation('back', yearsArray)) ||
              (calendarContent === 'base' && validateMonthsNavigation('back'))
            }
            iconOnly="chevron-left--line"
            onClick={getCalendarNavigationFunction(calendarContent, 'previous')}
          />
          <div className="sds_datePicker_calendar_header_info">
            <Button
              variant="ghost"
              size="small"
              onClick={handleMonthButton}
              isSelected={calendarContent === 'month'}
            >
              {getMonthLongName() as string}
            </Button>
            <Button
              variant="ghost"
              size="small"
              isSelected={calendarContent === 'year'}
              onClick={handleYearButton}
            >
              {String(getYear())}
            </Button>
          </div>
          <Button
            className={classNames({
              'sds_datePicker_calendar_navigationButton--hidden':
                calendarContent === 'month',
            })}
            variant="ghost"
            isDisabled={
              (calendarContent === 'year' &&
                validateYearsNavigation('next', yearsArray)) ||
              (calendarContent === 'base' && validateMonthsNavigation('next'))
            }
            iconOnly="chevron-right--line"
            onClick={getCalendarNavigationFunction(calendarContent, 'next')}
          />
        </div>
        {calendarContent === 'month' && (
          <div className="sds_datePicker_calendar_monthsIndex">
            {getMonthsNames(lang).map((month, index) => {
              const monthValidation = validatingMonth(index + 1);
              return (
                <button
                  key={uniqid('sds_datePicker_calendar_month_')}
                  className={classNames(
                    'sds_datePicker_calendar_monthsIndex_month',
                    {
                      'sds_datePicker_calendar_monthsIndex_month--current':
                        DateTime.now().setLocale(lang).monthLong === month,
                      'sds_datePicker_calendar_monthsIndex_month--active':
                        validatingActiveMonth(month),
                      'sds_datePicker_calendar_monthsIndex_month--disabled':
                        monthValidation,
                    }
                  )}
                  disabled={monthValidation || validatingActiveMonth(month)}
                  onClick={handleMonthSelection(month)}
                >
                  {month}
                </button>
              );
            })}
          </div>
        )}
        {calendarContent === 'year' && (
          <div className="sds_datePicker_calendar_yearsIndex">
            {yearsArray.map((year) => {
              const yearValidation = validatingYear(year);
              return (
                <button
                  key={uniqid('sds_datePicker_calendar_year_')}
                  className={classNames(
                    'sds_datePicker_calendar_yearsIndex_year',
                    {
                      'sds_datePicker_calendar_yearsIndex_year--current':
                        String(DateTime.now().year) === year,
                      'sds_datePicker_calendar_yearsIndex_year--active':
                        validatingActiveYear(year),
                      'sds_datePicker_calendar_yearsIndex_year--disabled':
                        yearValidation,
                    }
                  )}
                  disabled={yearValidation || validatingActiveYear(year)}
                  onClick={handleYearSelection(year)}
                >
                  {year}
                </button>
              );
            })}
          </div>
        )}
        {calendarContent === 'base' && (
          <div className="sds_datePicker_calendar_baseIndex">
            <div className="sds_datePicker_calendar_baseIndex_daysOfWeek">
              {getWeekDays().map((day) => (
                <div
                  key={uniqid('sds_datePicker_calendar_dayOfWeek_')}
                  className="sds_datePicker_calendar_baseIndex_daysOfWeek_day"
                >
                  {day.slice(0, 2)}
                </div>
              ))}
            </div>
            <div className="sds_datePicker_calendar_baseIndex_daysOfMonth">
              {getActiveDateCalendarDaysArray(
                updatingInnerSelectedDate,
                hoveredDate,
                setHoveredDate
              ).map((item) => item)}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
