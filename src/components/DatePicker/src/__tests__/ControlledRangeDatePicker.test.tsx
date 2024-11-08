import React, { useState } from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { RangeDatePicker, RangeDatePickerProps } from '..';
import type { RangeDatePickerSelectionEventType } from '..';
import type { DatesRange } from '../types';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<RangeDatePickerProps, 'children'>;

const RangeDatePickerControlledTest = ({ ...rest }: TestProps) => {
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
          startDate={datesRange.startDate}
          endDate={datesRange.endDate}
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
  const datePickerTestId = 'sds_datePicker';
  const datePickerLabelTestId = 'sds_datePicker_label';
  const datePickerControlTestId = 'sds_datePicker_control';
  const datePickerControlTriggerTestId = 'sds_datePicker_control_trigger';
  const datePickerHelpTextTestId = 'sds_datePicker_helpText';
  const datePickerCalendarTestId = 'sds_datePicker_calendar';
  const datePickerSelectedDateTestId = 'sds_datePicker_selectedDate';

  it('Should render all elements', () => {
    const { getByTestId } = getComponent(
      <RangeDatePickerControlledTest />,
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

  it('Should change date', async () => {
    const { getByTestId } = getComponent(
      <RangeDatePickerControlledTest />,
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
    const { getByTestId } = getComponent(<RangeDatePickerControlledTest />);
    const selectedEndDay = getByTestId('sds_datePicker_currentCalendarDay_10');
    const selectedDateRange = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedEndDay);
    expect(selectedDateRange).toHaveTextContent('05/10/2023 -');
  });

  it('It should not change the date (selected day is beyond the maxDate', () => {
    const { getByTestId } = getComponent(<RangeDatePickerControlledTest />);
    const selectedEndDay = getByTestId('sds_datePicker_nextCalendarDay_1');
    const selectedDateRange = getByTestId(datePickerSelectedDateTestId);
    fireEvent.click(selectedEndDay);
    expect(selectedDateRange).toHaveTextContent('05/10/2023 -');
  });

  it('It should have a disabled status', () => {
    const { getByTestId } = getComponent(
      <RangeDatePickerControlledTest hasError isReadOnly isDisabled />
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
      <RangeDatePickerControlledTest hasError isReadOnly />
    );
    const controlTrigger = getByTestId(datePickerControlTriggerTestId);
    expect(controlTrigger).not.toHaveClass('sds_datePicker_control_box--error');
    expect(controlTrigger).toHaveClass('sds_datePicker_control_box--readOnly');
  });

  it('It should have an error status', () => {
    const { getByTestId } = getComponent(
      <RangeDatePickerControlledTest hasError />
    );
    const controlTrigger = getByTestId(datePickerControlTriggerTestId);
    expect(controlTrigger).toHaveClass('sds_datePicker_control_box--error');
  });
});
