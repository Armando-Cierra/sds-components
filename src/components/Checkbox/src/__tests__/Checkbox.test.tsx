import React, { useState } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { Checkbox } from '../Checkbox';
import type { CheckboxProps } from '../types';

type TestProps = Omit<CheckboxProps, 'children'>;

const UncontrolledCheckboxTest: React.FC<TestProps> = ({ ...rest }) => {
  return (
    <Checkbox labelPosition="after" {...rest}>
      <Checkbox.Label htmlFor="example">Label Example</Checkbox.Label>
      <Checkbox.Control isIndeterminate defaultChecked id="example" />
    </Checkbox>
  );
};

const ControlledCheckboxTest: React.FC<TestProps> = ({ ...rest }) => {
  const [checked, setChecked] = useState(true);

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Checkbox labelPosition="after" {...rest}>
      <Checkbox.Label htmlFor="example">Label Example</Checkbox.Label>
      <Checkbox.Control checked={checked} id="example" onChange={changeEvent} />
    </Checkbox>
  );
};

describe('<Checkbox />', () => {
  const labelTestID = 'sds_checkbox_label';
  const inputTestID = 'sds_checkbox_input';
  const inputBoxTestID = 'sds_checkbox_inputBox';

  it('Should be rendering the components and its subcomponents', () => {
    const { getByTestId } = getComponent(<UncontrolledCheckboxTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);
    const inputBox = getByTestId(inputBoxTestID);
    forEachElement([label, input, inputBox], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Label and InputBox should change checkbox checked state in the uncontrolled approach', async () => {
    const { getByTestId } = getComponent(<UncontrolledCheckboxTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);
    const inputBox = getByTestId(inputBoxTestID);

    await waitFor(() => {
      fireEvent.click(label);
      expect(input).not.toBeChecked();
    });

    await waitFor(() => {
      fireEvent.click(inputBox);
      expect(input).toBeChecked();
    });
  });

  it('Label and InputBox should change checkbox checked state in the controlled approach', async () => {
    const { getByTestId } = getComponent(<ControlledCheckboxTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);
    const inputBox = getByTestId(inputBoxTestID);

    fireEvent.click(label);
    await waitFor(() => {
      expect(input).not.toBeChecked();
    });

    fireEvent.click(inputBox);
    await waitFor(() => {
      expect(input).toBeChecked();
    });
  });

  it('Expect error state to be false because the input is disabled', () => {
    const { getByTestId } = getComponent(
      <UncontrolledCheckboxTest isDisabled hasError />
    );
    const inputBox = getByTestId(inputBoxTestID);

    expect(inputBox).toHaveClass('sds_checkbox_control--disabled');
    expect(inputBox).not.toHaveClass('sds_checkbox_control--error');
  });

  it('Expect checkbox to be indeterminate', () => {
    const { getByTestId } = getComponent(<UncontrolledCheckboxTest />);
    const inputBox = getByTestId(inputBoxTestID);

    expect(inputBox).toHaveClass('sds_checkbox_control--indeterminate');
  });
});
