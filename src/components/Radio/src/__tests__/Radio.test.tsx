import React, { useState } from 'react';
import { Radio } from '../Radio';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';
import type { RadioProps } from '../types';

type TestProps = Omit<RadioProps, 'children'>;

const UncontrolledRadioTest: React.FC<TestProps> = ({ ...rest }) => {
  return (
    <Radio labelPosition="after" {...rest}>
      <Radio.Label htmlFor="example">Label Example</Radio.Label>
      <Radio.Control id="example" />
    </Radio>
  );
};

const ControlledRadioTest: React.FC<TestProps> = ({ ...rest }) => {
  const [checked, setChecked] = useState(false);

  const changeEvent = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Radio labelPosition="after" {...rest}>
      <Radio.Label htmlFor="example">Label Example</Radio.Label>
      <Radio.Control checked={checked} id="example" onChange={changeEvent} />
    </Radio>
  );
};

describe('<Radio />', () => {
  const labelTestID = 'sds_radio_label';
  const inputTestID = 'sds_radio_input';
  const inputBoxTestID = 'sds_radio_inputBox';

  it('Should be rendering the components and its subcomponents', () => {
    const { getByTestId } = getComponent(<UncontrolledRadioTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);
    const inputBox = getByTestId(inputBoxTestID);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(inputBox).toBeInTheDocument();
    forEachElement([label, input, inputBox], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Label should change Radio checked state in the uncontrolled approach', async () => {
    const { getByTestId } = getComponent(<UncontrolledRadioTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);

    fireEvent.click(label);
    await waitFor(() => {
      expect(input).toBeChecked();
    });
  });

  it('Label and InputBox should change Radio checked state in the controlled approach', async () => {
    const { getByTestId } = getComponent(<ControlledRadioTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);

    fireEvent.click(label);
    await waitFor(() => {
      expect(input).toBeChecked();
    });
  });

  it('Expect error state to be false because the input is disabled', () => {
    const { getByTestId } = getComponent(
      <UncontrolledRadioTest isDisabled hasError />
    );
    const inputBox = getByTestId(inputBoxTestID);

    expect(inputBox).toHaveClass('sds_radio_control--disabled');
    expect(inputBox).not.toHaveClass('sds_radio_control--error');
  });
});
