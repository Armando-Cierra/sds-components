import { useState } from 'react';
import { DateTime } from 'luxon';
import type { UseActiveDateProps } from './types';

export const useActiveDate = ({
  datePickerType,
  date,
  format,
  datesRange,
  minDate,
  maxDate,
}: UseActiveDateProps) => {
  const minDateObj = minDate ? DateTime.fromFormat(minDate, format) : undefined;
  const maxDateObj = maxDate ? DateTime.fromFormat(maxDate, format) : undefined;
  const currentDateObj = DateTime.now();

  const getValidatedDate = () => {
    if (
      maxDateObj &&
      minDateObj &&
      currentDateObj.toMillis() > maxDateObj.toMillis()
    ) {
      return maxDateObj.toFormat(format);
    }

    if (
      maxDateObj &&
      minDateObj &&
      currentDateObj.toMillis() < minDateObj.toMillis()
    ) {
      return minDateObj.toFormat(format);
    }

    if (maxDateObj && currentDateObj.toMillis() > maxDateObj.toMillis())
      return maxDateObj.toFormat(format);

    if (minDateObj && currentDateObj.toMillis() < minDateObj.toMillis())
      return minDateObj.toFormat(format);

    return currentDateObj.toFormat(format);
  };

  const getActiveDate = () => {
    if (datePickerType === 'single') {
      return date ?? getValidatedDate();
    } else {
      if (datesRange && datesRange.endDate) {
        return datesRange.endDate;
      }

      if (datesRange && datesRange.startDate) {
        return datesRange.startDate;
      }

      return getValidatedDate();
    }
  };

  const [activeDate, setActiveDate] = useState(getActiveDate());

  return { activeDate, setActiveDate };
};
