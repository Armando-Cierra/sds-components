import React, { useState } from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberInput } from '../NumberInput';
import type { NumberInputProps } from '../types';

const NumberInputTest = (props: NumberInputProps) => {
  const [value, setValue] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <NumberInput
      isReadOnly={props.isReadOnly}
      isDisabled={props.isDisabled}
      hasError={props.hasError}
    >
      <NumberInput.Label htmlFor="example">I am a label.</NumberInput.Label>
      <NumberInput.Control
        showButtons
        id="example"
        min={5}
        max={10}
        onChange={handleChange}
        value={value}
      />
      <NumberInput.HelpText>Help text example</NumberInput.HelpText>
    </NumberInput>
  );
};

describe('<NumberInput />', () => {
  const NumberInputComponentTestID = 'sds_numberInput_component';
  const NumberInputLabelTestID = 'sds_numberInput_label';
  const NumberInputHelptextTestID = 'sds_numberInput_helptext';
  const NumberInputDecreaseBtnTestID = 'sds_numberInput_decreaseBtn';
  const NumberInputIncreaseBtnTestID = 'sds_numberInput_increaseBtn';
  const NumberInputTestID = 'sds_numberInput_input';

  it('Should render the component and its different children components', () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const numberInput = getByTestId(NumberInputComponentTestID);
    const label = getByTestId(NumberInputLabelTestID);
    const helptext = getByTestId(NumberInputHelptextTestID);
    forEachElement([numberInput, label, helptext], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Expect hasError state to be false because the input is disabled', () => {
    const { getByTestId } = getComponent(
      <NumberInputTest isDisabled hasError />
    );
    const input = getByTestId(NumberInputTestID);

    expect(input).toHaveClass(
      'sds_numberInput_input sds_numberInput_input--disabled sds_numberInput_input--showButtons'
    );
    expect(input).not.toHaveClass('sds_numberInput--error');
  });

  it('Expect hasError state to be false because the input is in Read Only mode', () => {
    const { getByTestId } = getComponent(
      <NumberInputTest isReadOnly hasError />
    );
    const input = getByTestId(NumberInputTestID);
    expect(input).toHaveClass(
      'sds_numberInput_input sds_numberInput_input--readOnly'
    );
  });

  it('Expect Increase and Decrease buttons to be rendered', () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const decreaseBtn = getByTestId(NumberInputDecreaseBtnTestID);
    const increaseBtn = getByTestId(NumberInputIncreaseBtnTestID);
    forEachElement([decreaseBtn, increaseBtn], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Expect value to change', () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const input = getByTestId(NumberInputTestID);
    fireEvent.change(input, {
      target: {
        value: '100',
      },
    });
    expect(input).toHaveAttribute('value', '100');
  });

  it('Expect value to increase when the increase button is clicked', async () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const input = getByTestId(NumberInputTestID);
    const increaseButton = getByTestId(NumberInputIncreaseBtnTestID);
    fireEvent.click(increaseButton);
    expect(input).toHaveAttribute('value', '1');
  });

  it('Expect value to decrease when the decrease button is clicked', async () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const input = getByTestId(NumberInputTestID);
    const decreaseButton = getByTestId(NumberInputDecreaseBtnTestID);
    fireEvent.change(input, {
      target: {
        value: '6',
      },
    });
    fireEvent.click(decreaseButton);
    expect(input).toHaveAttribute('value', '5');
  });

  //If the max value is surpassed, the buttons become disabled. Still can be modified using the keyboard though.
  it('Should disable the plus button when the max value is surpassed', () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const input = getByTestId(NumberInputTestID);
    const increaseButton = getByTestId(NumberInputIncreaseBtnTestID);
    fireEvent.change(input, {
      target: {
        value: '11',
      },
    });
    expect(increaseButton).toHaveClass('sds_button--disabled');
  });

  it('Should disable the minus button when the max value is surpassed', () => {
    const { getByTestId } = getComponent(<NumberInputTest />);
    const input = getByTestId(NumberInputTestID);
    const increaseButton = getByTestId(NumberInputDecreaseBtnTestID);
    fireEvent.change(input, {
      target: {
        value: '4',
      },
    });
    expect(increaseButton).toHaveClass('sds_button--disabled');
  });
});
