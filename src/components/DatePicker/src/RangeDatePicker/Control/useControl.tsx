import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import {
  validateDateString,
  validateLimit,
  validateEndDateValue,
  getPredefinedRanges,
} from '../../utils';
import type { MenuOptionValues, DatesRange } from '../../types';
import type { UseControlProps } from './types';

export const useControl = ({
  controlledStartDate,
  controlledEndDate,
  defaultStartDate,
  defaultEndDate,
  maxDate,
  minDate,
  format,
  hasError,
  isDisabled,
  isReadOnly,
  onDateSelection,
  showPredefinedSelectionsMenu,
  predefinedSelection,
  predefinedMenuOptions,
}: UseControlProps) => {
  const errorValidation = !isDisabled && !isReadOnly && hasError;
  const readOnlyValidation = !isDisabled && isReadOnly;
  const validatedMinDate = validateLimit('minDate', minDate, maxDate, format);
  const validatedMaxDate = validateLimit('maxDate', maxDate, minDate, format);
  const validatedStartDate = validateDateString(
    validateLimit('startDate', controlledStartDate, controlledEndDate, format),
    validatedMaxDate,
    validatedMinDate,
    'startDate',
    format
  );
  const validatedEndDate = validateDateString(
    validateLimit('endDate', controlledEndDate, controlledStartDate, format),
    validatedMaxDate,
    validatedMinDate,
    'endDate',
    format
  );

  const [selectedPredefinedRange, setSelectedPredefinedRange] = useState<
    undefined | MenuOptionValues
  >(predefinedSelection ?? undefined);

  const getInitialDate = () => {
    if (
      showPredefinedSelectionsMenu &&
      predefinedSelection &&
      predefinedMenuOptions &&
      predefinedMenuOptions[predefinedSelection]?.show
    ) {
      const predefinedRange = getPredefinedRanges(predefinedSelection, format);
      return {
        startDate: validateDateString(
          predefinedRange.startDate,
          validatedMaxDate,
          validatedMinDate,
          'predefinedSelection',
          format
        ),
        endDate: validateDateString(
          predefinedRange.endDate,
          validatedMaxDate,
          validatedMinDate,
          'predefinedSelection',
          format
        ),
      };
    } else {
      return {
        startDate: defaultStartDate
          ? validateDateString(
              defaultStartDate,
              validatedMaxDate,
              validatedMinDate,
              'defaultDate',
              format
            )
          : undefined,
        endDate: defaultEndDate
          ? validateDateString(
              defaultEndDate,
              validatedMaxDate,
              validatedMinDate,
              'defaultDate',
              format
            )
          : undefined,
      };
    }
  };

  const [innerSelectedDates, setInnerSelectedDates] = useState<DatesRange>(
    getInitialDate()
  );
  const [formatHistory, setFormatHistory] = useState(format);

  const datesRange: DatesRange =
    controlledStartDate !== undefined || controlledEndDate !== undefined
      ? {
          startDate: validatedStartDate
            ? DateTime.fromFormat(validatedStartDate, formatHistory).toFormat(
                format
              )
            : undefined,
          endDate: validatedEndDate
            ? DateTime.fromFormat(validatedEndDate, format).toFormat(format)
            : undefined,
        }
      : innerSelectedDates;

  const updatingInnerSelectedDate = (selectedDate: string) => {
    const validatedSelectedDate = validateDateString(
      selectedDate,
      validatedMaxDate,
      validatedMinDate,
      'selected date',
      format
    ) as string;

    if (datesRange.startDate === undefined) {
      setInnerSelectedDates((prevState) => ({
        ...prevState,
        startDate: validatedSelectedDate,
      }));

      onDateSelection?.({
        datesRangeObj: {
          startDate: DateTime.fromFormat(
            validatedSelectedDate,
            format
          ).toJSDate(),
          endDate: undefined,
        },
        datesRangeString: {
          startDate: validatedSelectedDate,
          endDate: '',
        },
        datesRangeFormat: format,
        className: '',
        id: '',
      });
    }

    if (datesRange.startDate) {
      const endDateSelectionValidation = validateEndDateValue(
        {
          startDate: datesRange.startDate,
          endDate: validatedSelectedDate,
        },
        format
      );

      if (endDateSelectionValidation) {
        setInnerSelectedDates((prevState) => ({
          ...prevState,
          endDate: validatedSelectedDate,
        }));

        onDateSelection?.({
          datesRangeObj: {
            startDate: DateTime.fromFormat(
              datesRange.startDate,
              format
            ).toJSDate(),
            endDate: DateTime.fromFormat(
              validatedSelectedDate,
              format
            ).toJSDate(),
          },
          datesRangeString: {
            startDate: datesRange.startDate,
            endDate: validatedSelectedDate,
          },
          datesRangeFormat: format,
          className: '',
          id: '',
        });
      } else {
        setInnerSelectedDates((prevState) => ({
          ...prevState,
          startDate: validatedSelectedDate,
        }));

        onDateSelection?.({
          datesRangeObj: {
            startDate: DateTime.fromFormat(
              validatedSelectedDate,
              format
            ).toJSDate(),
            endDate: undefined,
          },
          datesRangeString: {
            startDate: validatedSelectedDate,
            endDate: '',
          },
          datesRangeFormat: format,
          className: '',
          id: '',
        });
      }
    }

    if (
      datesRange.startDate &&
      datesRange.endDate &&
      selectedDate === datesRange.startDate
    ) {
      setInnerSelectedDates({
        startDate: undefined,
        endDate: undefined,
      });

      onDateSelection?.({
        datesRangeObj: {
          startDate: undefined,
          endDate: undefined,
        },
        datesRangeString: {
          startDate: '',
          endDate: '',
        },
        datesRangeFormat: format,
        className: '',
        id: '',
      });
    }

    if (
      datesRange.startDate &&
      datesRange.endDate &&
      selectedDate !== datesRange.startDate
    ) {
      setInnerSelectedDates({
        startDate: validatedSelectedDate,
        endDate: undefined,
      });

      onDateSelection?.({
        datesRangeObj: {
          startDate: DateTime.fromFormat(
            validatedSelectedDate,
            format
          ).toJSDate(),
          endDate: undefined,
        },
        datesRangeString: {
          startDate: validatedSelectedDate,
          endDate: '',
        },
        datesRangeFormat: format,
        className: '',
        id: '',
      });
    }

    setSelectedPredefinedRange(undefined);
  };

  const updatingSelectedPredefinedRange = (
    predefinedRange: MenuOptionValues
  ) => {
    const newRange = getPredefinedRanges(predefinedRange, format);
    setInnerSelectedDates(newRange);
    setSelectedPredefinedRange(predefinedRange);

    onDateSelection?.({
      datesRangeFormat: format,
      className: '',
      id: '',
      datesRangeString: newRange,
      datesRangeObj: {
        startDate: DateTime.fromFormat(newRange.startDate, format).toJSDate(),
        endDate: DateTime.fromFormat(newRange.endDate, format).toJSDate(),
      },
    });
  };

  const validateRangeSelection = (predefinedRange: MenuOptionValues) => {
    const range = getPredefinedRanges(predefinedRange, format);
    const startDateObj = DateTime.fromFormat(range.startDate, format);
    const endDateObj = DateTime.fromFormat(range.endDate, format);
    const maxDateObj = maxDate
      ? DateTime.fromFormat(maxDate, format)
      : undefined;
    const minDateObj = minDate
      ? DateTime.fromFormat(minDate, format)
      : undefined;

    if (maxDateObj || minDateObj) {
      let minDateValidation = false;
      let maxDateValidation = false;

      if (minDateObj && startDateObj.toMillis() < minDateObj.toMillis()) {
        minDateValidation = true;
      }

      if (maxDateObj && endDateObj.toMillis() > maxDateObj.toMillis()) {
        maxDateValidation = true;
      }

      return minDateValidation || maxDateValidation;
    }

    return false;
  };

  useEffect(() => {
    const newFormattedInnerDates: DatesRange = innerSelectedDates;

    if (innerSelectedDates.startDate !== undefined) {
      newFormattedInnerDates.startDate = validateDateString(
        DateTime.fromFormat(
          innerSelectedDates.startDate,
          formatHistory
        ).toFormat(format),
        validatedMaxDate,
        validatedMinDate,
        'predefinedSelection',
        format
      );
    }

    if (innerSelectedDates.endDate !== undefined) {
      newFormattedInnerDates.endDate = validateDateString(
        DateTime.fromFormat(innerSelectedDates.endDate, formatHistory).toFormat(
          format
        ),
        validatedMaxDate,
        validatedMinDate,
        'predefinedSelection',
        format
      );
    }

    setInnerSelectedDates({ ...newFormattedInnerDates });
    setFormatHistory(format);
  }, [format]);

  return {
    datesRange,
    updatingInnerSelectedDate,
    errorValidation,
    readOnlyValidation,
    validatedMaxDate,
    validatedMinDate,
    selectedPredefinedRange,
    updatingSelectedPredefinedRange,
    validateRangeSelection,
  };
};
