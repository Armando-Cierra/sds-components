import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { validateDateString, validateLimit } from '../../utils';
import type { UseControlProps } from './types';

export const useControl = ({
  id,
  className,
  controlledDate,
  defaultDate,
  maxDate,
  minDate,
  format,
  hasError,
  isDisabled,
  isReadOnly,
  onDateSelection,
}: UseControlProps) => {
  const errorValidation = !isDisabled && !isReadOnly && hasError;
  const readOnlyValidation = !isDisabled && isReadOnly;
  const validatedMaxDate = validateLimit('maxDate', maxDate, minDate, format);
  const validatedMinDate = validateLimit('minDate', minDate, maxDate, format);

  const [innerSelectedDate, setInnerSelectedDate] = useState<
    string | undefined
  >(
    validateDateString(
      defaultDate,
      validatedMaxDate,
      validatedMinDate,
      'defaultDate',
      format
    )
  );
  const [formatHistory, setFormatHistory] = useState(format);

  const validatedSelectedDate = validateDateString(
    controlledDate,
    validatedMaxDate,
    validatedMinDate,
    'date',
    format
  );
  const date = validatedSelectedDate
    ? DateTime.fromFormat(validatedSelectedDate, formatHistory).toFormat(format)
    : innerSelectedDate;

  const updatingInnerSelectedDate = (newDate: string) => {
    const validatedNewDate = validateDateString(
      newDate,
      validatedMaxDate,
      validatedMinDate,
      'selected date',
      format
    );
    setInnerSelectedDate(validatedNewDate);
    onDateSelection?.({
      id,
      className,
      dateObj: validatedNewDate
        ? DateTime.fromFormat(validatedNewDate, format).toJSDate()
        : undefined,
      dateFormat: format.toLowerCase(),
      dateString: validatedNewDate,
    });
  };

  useEffect(() => {
    if (innerSelectedDate && innerSelectedDate !== '') {
      setInnerSelectedDate(
        validateDateString(
          DateTime.fromFormat(innerSelectedDate, formatHistory).toFormat(
            format
          ),
          validatedMaxDate,
          validatedMinDate,
          'defaultDate',
          format
        )
      );
    }
    setFormatHistory(format);
  }, [format]);

  return {
    date,
    updatingInnerSelectedDate,
    errorValidation,
    readOnlyValidation,
    validatedMaxDate,
    validatedMinDate,
  };
};
