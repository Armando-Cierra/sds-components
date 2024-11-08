import React, { useState } from 'react';
import { Password } from '../../..';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { PasswordProps } from '../types';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const TestPassword = (props: Omit<PasswordProps, 'ref'>) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Password {...props}>
        <Password.Label>I am a label</Password.Label>
        <Password.Control onChange={handleChange} value={value} />
        <Password.HelpText>Helptext</Password.HelpText>
      </Password>
      <p data-testid="sds_password_value">{value}</p>
    </>
  );
};

describe('Password Component', () => {
  const passwordTestID = 'sds_password_input';

  it('Should be rendering the components and its subcomponents', () => {
    const { getByTestId } = getComponent(<TestPassword />);
    const password = getByTestId(passwordTestID);
    const label = getByTestId('sds_password_label');
    const helptext = getByTestId('sds_password_helptText');
    forEachElement([password, label, helptext], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Expect error state to be false because the input is disabled', () => {
    const { getByTestId } = getComponent(<TestPassword isDisabled hasError />);
    const textInputWrapper = getByTestId(passwordTestID);

    expect(textInputWrapper).toHaveClass('sds_password_input--disabled');
    expect(textInputWrapper).not.toHaveClass('sds_password--error');
  });

  it('Expect the value to be changing', () => {
    const { getByTestId } = getComponent(<TestPassword />);
    const passwordInput = getByTestId('sds_password_input');
    fireEvent.change(passwordInput, {
      target: {
        value: 'test',
      },
    });

    expect(getByTestId('sds_password_value').textContent).toBe('test');
  });

  it('Should be changing the type of the input based on the visibility state.', () => {
    const { getByTestId } = getComponent(<TestPassword />);
    const passwordInput = getByTestId('sds_password_input');
    const button = getByTestId('sds_password_button');
    fireEvent.click(button);
    expect(passwordInput).toHaveAttribute('type', 'text');
    fireEvent.click(button);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });
});
