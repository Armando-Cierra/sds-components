import { DateTime, Info } from 'luxon';
import type {
  DatePickerLangType,
  DatePickerFormats,
  MenuOptionValues,
} from './types';

export const getPreviousMonthString = (
  date: string,
  format: DatePickerFormats
) => {
  const currentDate = DateTime.fromFormat(date, format);
  const previousMonthString = currentDate.minus({ month: 1 }).toFormat(format);

  return previousMonthString;
};

export const getMonthsNames = (lang: DatePickerLangType) =>
  Info.months('long', { locale: lang });

export const getNextMonthString = (date: string, format: DatePickerFormats) => {
  const currentDate = DateTime.fromFormat(date, format);
  const nextMonthString = currentDate.plus({ month: 1 }).toFormat(format);

  return nextMonthString;
};

export const getInitialYearsArray = (
  date: string,
  format: DatePickerFormats
) => {
  const currentActiveDate = DateTime.fromFormat(date, format);
  const currentActiveYear = currentActiveDate.year;

  let previousYearsArray: string[] = [];
  let nextYearsArray: string[] = [];

  for (let i = 10; i >= 0; i--) {
    previousYearsArray = [...previousYearsArray, String(currentActiveYear - i)];
  }

  for (let i = 1; i <= 13; i++) {
    nextYearsArray = [...nextYearsArray, String(currentActiveYear + i)];
  }

  const completeYearsArray: string[] = [
    previousYearsArray,
    nextYearsArray,
  ].flat();

  return completeYearsArray;
};

export const validateDateString = (
  date: string | undefined,
  maxDate: string | undefined,
  minDate: string | undefined,
  errorName: string,
  format: DatePickerFormats
) => {
  if (date) {
    const dateObj = DateTime.fromFormat(date, format);

    if (dateObj.isValid) {
      if (maxDate || minDate) {
        if (maxDate && minDate) {
          const maxDateTimeObj = DateTime.fromFormat(maxDate, format);
          const minDateTimeObj = DateTime.fromFormat(minDate, format);

          if (dateObj.toMillis() > maxDateTimeObj.toMillis()) {
            throw new Error(
              `${errorName} Error: ${errorName} value cannot be after the maxDate defined limit.`
            );
          }

          if (dateObj.toMillis() < minDateTimeObj.toMillis()) {
            throw new Error(
              `${errorName} Error: ${errorName} value cannot be before the minDate defined limit.`
            );
          }

          return date;
        }

        if (maxDate) {
          const maxDateTimeObj = DateTime.fromFormat(maxDate, format);

          if (dateObj.toMillis() <= maxDateTimeObj.toMillis()) {
            return date;
          }

          throw new Error(
            `${errorName} Error: ${errorName} value cannot be after the maxDate defined limit.`
          );
        } else if (minDate) {
          const minDateTimeObj = DateTime.fromFormat(minDate, format);
          if (dateObj.toMillis() >= minDateTimeObj.toMillis()) {
            return date;
          }

          throw new Error(
            `${errorName} Error: ${errorName} value cannot be before the minDate defined limit.`
          );
        }
      }

      return date;
    }

    throw new Error(
      `${errorName} Error: Verify the ${errorName} prop string to be a valid date or to match with the defined format in the Date Picker Control subcomponent. Keep in mind that the default format is "mm/dd/yyyy" if there has not been defined any other format.`
    );
  }

  return undefined;
};

export const validateLimit = (
  limitType: 'maxDate' | 'minDate' | 'startDate' | 'endDate',
  dateToEvaluate: string | undefined,
  opositeLimit: string | undefined,
  format: DatePickerFormats
) => {
  if (dateToEvaluate) {
    const dateObj = DateTime.fromFormat(dateToEvaluate, format);

    if (dateObj.isValid) {
      //Validating if it is necessary to compare the limit with its oposite
      if (opositeLimit)
        if (limitType === 'maxDate' || limitType === 'endDate') {
          //Dependening on the limit type, validating that limits are not a contradiction
          const lowerDateObj = DateTime.fromFormat(opositeLimit, format);

          if (dateObj.toMillis() < lowerDateObj.toMillis())
            throw new Error(
              `${limitType} Error: ${limitType} value cannot be lower than the ${
                limitType === 'maxDate' ? 'minDate' : 'startDate'
              } value.`
            );
        } else {
          const higherDateObj = DateTime.fromFormat(opositeLimit, format);

          if (dateObj.toMillis() > higherDateObj.toMillis())
            throw new Error(
              `${limitType} Error: ${limitType} value cannot be higher than the ${
                limitType === 'minDate' ? 'maxDate' : 'endDate'
              } value.`
            );
        }

      return dateToEvaluate;
    }

    throw new Error(
      `${limitType} Error: Verify the ${limitType} prop string to be a valid date or to match with the defined format in the Date Picker Control subcomponent. Keep in mind that the default format is "mm/dd/yyyy" if there has not been defined any other format.`
    );
  }

  return dateToEvaluate;
};

export const validateEndDateValue = (
  datesRange:
    | {
        startDate?: string;
        endDate?: string;
      }
    | undefined,
  format: DatePickerFormats
) => {
  if (datesRange && datesRange.startDate && datesRange.endDate) {
    const endDateObj = DateTime.fromFormat(datesRange.endDate, format);
    const startDateObj = DateTime.fromFormat(datesRange.startDate, format);

    if (endDateObj.toMillis() < startDateObj.toMillis()) return false;
    return true;
  }

  return true;
};

export const getPredefinedRanges = (
  selection: MenuOptionValues,
  format: DatePickerFormats
) => {
  const date = DateTime.now();

  const selections = {
    today: () => ({
      startDate: date.toFormat(format),
      endDate: date.toFormat(format),
    }),
    yesterday: () => ({
      startDate: date.minus({ day: 1 }).toFormat(format),
      endDate: date.minus({ day: 1 }).toFormat(format),
    }),
    last7Days: () => ({
      startDate: date.minus({ day: 6 }).toFormat(format),
      endDate: date.toFormat(format),
    }),
    last30Days: () => ({
      startDate: date.minus({ day: 29 }).toFormat(format),
      endDate: date.toFormat(format),
    }),
    thisMonth: () => ({
      startDate: date.set({ day: 1 }).toFormat(format),
      endDate: date.endOf('month').toFormat(format),
    }),
    lastMonth: () => ({
      startDate: date.minus({ month: 1 }).set({ day: 1 }).toFormat(format),
      endDate: date.minus({ month: 1 }).endOf('month').toFormat(format),
    }),
  };

  return selections[selection]();
};
