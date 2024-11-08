import React, { useState } from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
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
          date={date}
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
  const datePickerTestId = 'sds_datePicker';
  const datePickerLabelTestId = 'sds_datePicker_label';
  const datePickerControlTestId = 'sds_datePicker_control';
  const datePickerControlTriggerTestId = 'sds_datePicker_control_trigger';
  const datePickerHelpTextTestId = 'sds_datePicker_helpText';
  const datePickerCalendarTestId = 'sds_datePicker_calendar';
  const datePickerSelectedDateTestId = 'sds_datePicker_selectedDate';

  it('Should render all elements', () => {
    const { getByTestId } = getComponent(
      <SingleDatePickerControlledTest />,
      'document'
    );
    const datePicker = getByTestId(datePickerTestId);
    const datePickerLabel = getByTestId(datePickerLabelTestId);
    const datePickerControl = getByTestId(datePickerControlTestId);
    const datePickerControlTrigger = getByTestId(
      datePickerControlTriggerTestId
    );
    const datePickerHelpText = getByTestId(datePickerHelpTextTestId);
    const datePickerCalendar = getByTestId(datePickerCalendarTestId);
    forEachElement(
      [
        datePicker,
        datePickerLabel,
        datePickerControl,
        datePickerControlTrigger,
        datePickerHelpText,
        datePickerCalendar,
      ],
      (element: HTMLElement) => expect(element).toBeInTheDocument()
    );
  });

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

  it('It should have a disabled status', () => {
    const { getByTestId } = getComponent(
      <SingleDatePickerControlledTest hasError isReadOnly isDisabled />
    );
    const controlTrigger = getByTestId(datePickerControlTriggerTestId);
    expect(controlTrigger).not.toHaveClass('sds_datePicker_control_box--error');
    expect(controlTrigger).not.toHaveClass(
      'sds_datePicker_control_box--readOnly'
    );
    expect(controlTrigger).toHaveClass('sds_datePicker_control_box--disabled');
  });

  it('It should have a readOnly status', () => {
    const { getByTestId } = getComponent(
      <SingleDatePickerControlledTest hasError isReadOnly />
    );
    const controlTrigger = getByTestId(datePickerControlTriggerTestId);
    expect(controlTrigger).not.toHaveClass('sds_datePicker_control_box--error');
    expect(controlTrigger).toHaveClass('sds_datePicker_control_box--readOnly');
  });

  it('It should have an error status', () => {
    const { getByTestId } = getComponent(
      <SingleDatePickerControlledTest hasError />
    );
    const controlTrigger = getByTestId(datePickerControlTriggerTestId);
    expect(controlTrigger).toHaveClass('sds_datePicker_control_box--error');
  });
});
