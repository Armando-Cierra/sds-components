import React, { useState } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { Switch } from '../Switch';
import type { SwitchProps } from '../types';

type TestProps = Omit<SwitchProps, 'children' | 'ref'>;

const UncontrolledSwitchTest: React.FC<TestProps> = ({ ...rest }) => {
  return (
    <Switch labelPosition="top" {...rest}>
      <Switch.Label htmlFor="example">Label Example</Switch.Label>
      <Switch.Control defaultChecked id="example" />
    </Switch>
  );
};

const ControlledSwitchTest: React.FC<TestProps> = ({ ...rest }) => {
  const [checked, setChecked] = useState(true);

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Switch labelPosition="top" {...rest}>
      <Switch.Label htmlFor="example">Label Example</Switch.Label>
      <Switch.Control checked={checked} id="example" onChange={changeEvent} />
    </Switch>
  );
};

describe('<Switch />', () => {
  const labelTestID = 'sds_switch_label';
  const inputTestID = 'sds_switch_input';
  const inputBoxTestID = 'sds_switch_inputBox';

  it('Should be rendering the components and its subcomponents', () => {
    const { getByTestId } = getComponent(<UncontrolledSwitchTest />);
    const label = getByTestId(labelTestID);
    const input = getByTestId(inputTestID);
    const inputBox = getByTestId(inputBoxTestID);
    forEachElement([label, input, inputBox], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Label and InputBox should change Switch checked state in the uncontrolled approach', async () => {
    const { getByTestId } = getComponent(<UncontrolledSwitchTest />);
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

  it('Label and InputBox should change Switch checked state in the controlled approach', async () => {
    const { getByTestId } = getComponent(<ControlledSwitchTest />);
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

  it('Expect Switch to be disabled', () => {
    const { getByTestId } = getComponent(<UncontrolledSwitchTest isDisabled />);
    const inputBox = getByTestId(inputBoxTestID);
    expect(inputBox).toHaveClass('sds_switch_control--disabled');
  });
});
