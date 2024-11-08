import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import {
  getPreviousMonthString,
  getNextMonthString,
  getMonthsNames,
  getInitialYearsArray,
} from '../utils';
import type { MenuOptionValues } from '../types';
import type { CalendarContent, UseCalendarProps } from './types';

export const useCalendar = ({
  activeDate,
  setActiveDate,
  lang,
  format,
  datesRange,
}: UseCalendarProps) => {
  const predefinedArrayList: MenuOptionValues[] = [
    'today',
    'yesterday',
    'last7Days',
    'last30Days',
    'thisMonth',
    'lastMonth',
  ];
  const [calendarContent, setCalendarContent] =
    useState<CalendarContent>('base');

  const [yearsArray, setYearsArray] = useState<string[]>(
    getInitialYearsArray(activeDate, format)
  );

  const [hoveredDate, setHoveredDate] = useState<undefined | string>(undefined);

  const handleMonthButton = () => {
    if (calendarContent !== 'month') {
      setCalendarContent('month');
    } else {
      setCalendarContent('base');
    }
  };

  const handleYearButton = () => {
    if (calendarContent !== 'year') {
      setCalendarContent('year');
    } else {
      setCalendarContent('base');
    }
  };

  const handlePreviousMonthNavigationButton = () => {
    setActiveDate((prevState) => getPreviousMonthString(prevState, format));
  };

  const handleNextMonthNavigationButton = () => {
    setActiveDate((prevState) => getNextMonthString(prevState, format));
  };

  const handlePreviousYearArrayNavigationButton = () => {
    const lastYearOfNewArray = Number(yearsArray[0]) - 1;
    let newYearsArray: string[] = [];

    for (let i = 23; i >= 0; i--) {
      newYearsArray = [...newYearsArray, String(lastYearOfNewArray - i)];
    }

    setYearsArray(newYearsArray);
  };

  const handleNextYearArrayNavigationButton = () => {
    const firstYearOfNewArray = Number(yearsArray[yearsArray.length - 1]) + 1;
    let newYearsArray: string[] = [];

    for (let i = 0; i <= 23; i++) {
      newYearsArray = [...newYearsArray, String(firstYearOfNewArray + i)];
    }

    setYearsArray(newYearsArray);
  };

  const getCalendarNavigationFunction =
    (calendarContent: CalendarContent, direction: 'previous' | 'next') =>
    () => {
      if (calendarContent === 'base') {
        if (direction === 'previous') handlePreviousMonthNavigationButton();
        if (direction === 'next') handleNextMonthNavigationButton();
      }

      if (calendarContent === 'year') {
        if (direction === 'previous') handlePreviousYearArrayNavigationButton();
        if (direction === 'next') handleNextYearArrayNavigationButton();
      }

      return false;
    };

  const handleMonthSelection = (month: string) => () => {
    const currentActiveDate = DateTime.fromFormat(activeDate, format);
    const newActiveDate = currentActiveDate
      .set({
        month: getMonthsNames(lang).indexOf(month) + 1,
      })
      .toFormat(format);

    setActiveDate(newActiveDate);
    setCalendarContent('base');
  };

  const handleYearSelection = (year: string) => () => {
    const currentActiveDate = DateTime.fromFormat(activeDate, format);
    const newActiveDate = currentActiveDate
      .set({ year: Number(year) })
      .toFormat(format);

    setActiveDate(newActiveDate);
    setCalendarContent('base');
  };

  useEffect(() => {
    datesRange && datesRange.endDate && setActiveDate(datesRange.endDate);
  }, [datesRange]);

  return {
    predefinedArrayList,
    //states
    calendarContent,
    yearsArray,
    hoveredDate,
    //state modifiers
    setYearsArray,
    setHoveredDate,
    //functions
    handleMonthButton,
    handleYearButton,
    handleMonthSelection,
    handleYearSelection,
    getCalendarNavigationFunction,
  };
};
