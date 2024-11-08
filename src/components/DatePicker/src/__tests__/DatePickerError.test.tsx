import React from 'react';
import { RangeDatePicker } from '../RangeDatePicker';
import { SingleDatePicker } from '../SingleDatePicker';
import { expectError } from '../../../../TestUtils';

const NoChildrenRangeDatePickerError = () => {
  return <RangeDatePicker children></RangeDatePicker>;
};

const NoChildrenSingleDatePickerError = () => {
  return <SingleDatePicker children></SingleDatePicker>;
};

const StartDateSurpassingMaxDateError = () => {
  return (
    <RangeDatePicker.Control
      maxDate="30/10/2023"
      format="dd/mm/yyyy"
      startDate="31/10/2023"
    />
  );
};

const StartDatesBelowMinDateError = () => {
  return (
    <RangeDatePicker.Control
      minDate="31/10/2023"
      format="dd/mm/yyyy"
      startDate="30/10/2023"
    />
  );
};

const InvalidDateFormatError = () => {
  return (
    <RangeDatePicker.Control
      minDate="31/10/2023"
      format="mm/dd/yyyy"
      startDate="30/10/2023"
    />
  );
};

describe('DatePicker tests', () => {
  it('Test wrong children to the RangeDatePicker should display an error', () => {
    expectError(
      <NoChildrenRangeDatePickerError />,
      'The <RangeDatePicker.Control> subcomponent is required to render the component'
    );
  });

  it('Test wrong children to the SingleDatePicker should display an error', () => {
    expectError(
      <NoChildrenSingleDatePickerError />,
      'The <SingleDatePicker.Control> subcomponent is required to render the component'
    );
  });

  it('Test when start date surpasses maxDate should display an error', () => {
    expectError(
      <StartDateSurpassingMaxDateError />,
      'startDate Error: startDate value cannot be after the maxDate defined limit.'
    );
  });

  it('Test when start date is below minDate should display an error', () => {
    expectError(
      <StartDatesBelowMinDateError />,
      'startDate Error: startDate value cannot be before the minDate defined limit.'
    );
  });

  it('Test when date values are not it ne the correct state', () => {
    expectError(
      <InvalidDateFormatError />,
      'minDate Error: Verify the minDate prop string to be a valid date or to match with the defined format in the Date Picker Control subcomponent. Keep in mind that the default format is "mm/dd/yyyy" if there has not been defined any other format.'
    );
  });
});
