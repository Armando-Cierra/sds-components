import React, { useState } from 'react';
import { fireEvent } from '@testing-library/react';
import { Button } from '../Button';
import { getComponent } from '../../../../TestUtils';
import type { ButtonProps } from '../types';

const ButtonTest: React.FC<ButtonProps> = ({ ...rest }) => {
  const [text, setText] = useState('');

  return (
    <>
      <p data-testid="test-string">{text}</p>
      <Button
        isDisabled={false}
        variant="base"
        size="large"
        onClick={() => setText('Clicked')}
        data-example="example"
        {...rest}
      />
    </>
  );
};

describe('<Button />', () => {
  const buttonTestId = 'sds_button';
  const testStringId = 'test-string';

  it('Button renders in the desired way', async () => {
    const { getByTestId } = getComponent(<ButtonTest />);
    const selection = getByTestId(buttonTestId);
    expect(selection).toBeInTheDocument();
  });

  it('Test click event', async () => {
    const { getByTestId } = getComponent(<ButtonTest />);
    const selection = getByTestId(buttonTestId);
    const testString = getByTestId(testStringId);
    fireEvent.click(selection);

    expect(testString).toHaveTextContent('Clicked');
  });

  it('Check if button correctly enables', async () => {
    const { getByTestId } = getComponent(<ButtonTest />);
    const selection = getByTestId(buttonTestId);
    expect(selection).not.toBeDisabled();
  });

  it('Should render only an icon when the iconOnly is defined', () => {
    const { getByTestId } = getComponent(
      <ButtonTest iconOnly="number--fill" />
    );
    const selection = getByTestId(buttonTestId);
    expect(selection).toHaveClass('sds_button--iconOnly');
  });

  it('Should render both icons when desired', () => {
    getComponent(
      <ButtonTest iconAfter="x--fill" iconBefore="server-stack--line" />
    );
    const selection = document.getElementsByClassName('sds_telicon').length;
    expect(selection).toBe(2);
  });

  it('Check if button props are correctly passed, including the styles', () => {
    const { getByTestId } = getComponent(<ButtonTest />);
    const selection = getByTestId(buttonTestId);
    expect(selection).not.toHaveClass('sds_button--base');
    expect(selection).toHaveClass('sds_button--large');
    expect(selection).toHaveAttribute('data-example', 'example');
  });
});
