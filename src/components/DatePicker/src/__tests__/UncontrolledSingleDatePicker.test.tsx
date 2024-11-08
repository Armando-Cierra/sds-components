import React, { useState } from 'react';
import { getComponent } from '../../../../TestUtils';
import { SingleDatePicker, SingleDatePickerProps } from '..';
import type { SingleDatePickerSelectionEventType } from '..';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<SingleDatePickerProps, 'children'>;

const SingleDatePickerControlledTest = ({ ...rest }: TestProps) => {
  const [date, setDate] = useState<string | undefined>(undefined);

  const handleDateSelection = (e: SingleDatePickerSelectionEventType) => {
    setDate(e.dateString);
  };

  return (
    <>
      <p data-testid="sds_datePicker_selectedDate">{date ?? ''}</p>
      <SingleDatePicker {...rest}>
        <SingleDatePicker.Label>Label Example</SingleDatePicker.Label>
        <SingleDatePicker.Control
          defaultOpen
          format="dd/mm/yyyy"
          minDate="01/10/2023"
          maxDate="31/10/2023"
          onDateSelection={handleDateSelection}
        />
        <SingleDatePicker.HelpText>Help Text Example</SingleDatePicker.HelpText>
      </SingleDatePicker>
    </>
  );
};

describe('Controlled Dropdown component', () => {
  const datePickerSelectedDateTestId = 'sds_datePicker_selectedDate';

  it('Should change date', () => {
    const { getByTestId } = getComponent(<SingleDatePickerControlledTest />);
    const selectedDay = getByTestId('sds_datePicker_currentCalendarDay_5');
    const selectedDate = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedDay);
    expect(selectedDate).toHaveTextContent('05/10/2023');
  });

  it('It should not change the date (selected day is beyond the maxDate', () => {
    const { getByTestId } = getComponent(<SingleDatePickerControlledTest />);
    const selectedDay = getByTestId('sds_datePicker_nextCalendarDay_1');
    const selectedDate = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedDay);
    expect(selectedDate).toHaveTextContent('');
  });
});
