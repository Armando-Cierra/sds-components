import React, { useState } from 'react';
import { getComponent } from '../../../../TestUtils';
import { RangeDatePicker, RangeDatePickerProps } from '..';
import type { RangeDatePickerSelectionEventType } from '..';
import type { DatesRange } from '../types';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<RangeDatePickerProps, 'children'>;

const RangeDatePickerUncontrolledTest = ({ ...rest }: TestProps) => {
  const [datesRange, setDatesRange] = useState<DatesRange>({
    startDate: '05/10/2023',
    endDate: '',
  });

  const handleDateSelection = (e: RangeDatePickerSelectionEventType) => {
    setDatesRange(e.datesRangeString);
  };

  return (
    <>
      <p data-testid="sds_datePicker_selectedDate">{`${
        datesRange.startDate ?? ''
      } - ${datesRange.endDate ?? ''}`}</p>

      <RangeDatePicker {...rest}>
        <RangeDatePicker.Label>Label Example</RangeDatePicker.Label>
        <RangeDatePicker.Control
          defaultOpen
          format="dd/mm/yyyy"
          defaultStartDate="05/10/2023"
          minDate="01/10/2023"
          maxDate="31/10/2023"
          daysRangeLimit={5}
          onDateSelection={handleDateSelection}
        />
        <RangeDatePicker.HelpText>Help Text Example</RangeDatePicker.HelpText>
      </RangeDatePicker>
    </>
  );
};

describe('Controlled Dropdown component', () => {
  const datePickerSelectedDateTestId = 'sds_datePicker_selectedDate';

  it('Should change date', () => {
    const { getByTestId } = getComponent(
      <RangeDatePickerUncontrolledTest />,
      'document'
    );
    const buttonDays = document.getElementsByClassName(
      'sds_datePicker_calendar_baseIndex_daysOfMonth_day'
    );
    const selectedDateRange = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(buttonDays[0]);
    fireEvent.click(buttonDays[1]);
    expect(selectedDateRange.textContent).toBe('01/10/2023 - 02/10/2023');
  });

  it('Should not change the date because of the daysRangeLimit prop', () => {
    const { getByTestId } = getComponent(<RangeDatePickerUncontrolledTest />);
    const selectedEndDay = getByTestId('sds_datePicker_currentCalendarDay_10');
    const selectedDateRange = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedEndDay);
    expect(selectedDateRange).toHaveTextContent('05/10/2023 -');
  });

  it('It should not change the date (selected day is beyond the maxDate', () => {
    const { getByTestId } = getComponent(<RangeDatePickerUncontrolledTest />);
    const selectedEndDay = getByTestId('sds_datePicker_nextCalendarDay_1');
    const selectedDateRange = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedEndDay);
    expect(selectedDateRange).toHaveTextContent('05/10/2023 -');
  });
});
