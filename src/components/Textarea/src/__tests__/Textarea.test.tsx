import React, { useState } from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import '@testing-library/jest-dom';
import type { TextareaProps } from '../types';
import { Textarea } from '../Textarea';
import { fireEvent, waitFor } from '@testing-library/react';

type TestProps = Omit<TextareaProps, 'ref'>;

const TextAreaTest = (props: TestProps) => {
  const { ...rest } = props;

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const customFilter = (e: string) => e.toUpperCase();

  return (
    <>
      <Textarea {...rest}>
        <Textarea.Label>I am a label</Textarea.Label>
        <Textarea.HelpText>I am a helptext</Textarea.HelpText>
        <Textarea.Control
          onChange={handleChange}
          customFilter={customFilter}
          value={value}
          maxLength={10}
          placeholder="Text"
        />
      </Textarea>
      <p data-testid="test_string">{value}</p>
    </>
  );
};

describe('Textarea', () => {
  const TextAreaContainer = 'sds_textarea_container';
  const textareaInput = 'sds_textarea';

  it('Should render the component and its different sub components', () => {
    const { getByTestId } = getComponent(<TextAreaTest />);
    const input = getByTestId(textareaInput);
    const textarea = getByTestId(TextAreaContainer);
    const label = getByTestId('sds_textarea_label');
    const helptext = getByTestId('sds_textarea_helptext');
    forEachElement([textarea, input, label, helptext], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Should apply the custom filter.', () => {
    const { getByTestId } = getComponent(<TextAreaTest />);
    const textarea = getByTestId(textareaInput);
    fireEvent.change(textarea, {
      target: {
        value: 'Changed value',
      },
    });

    expect(textarea.textContent).toBe('CHANGED VA');
    expect(textarea.textContent).toHaveLength(10);
  });

  it('Expect error state to be false if isDisabled or isReadOnly is true', async () => {
    const { getByTestId } = getComponent(<TextAreaTest isDisabled hasError />);
    await waitFor(() => {
      const textareaContainer = getByTestId(textareaInput);
      expect(textareaContainer).not.toHaveClass('sds_textarea_field--error');
    });
  });

  it('Expect disabled state to work and isReadOnly to be false', () => {
    const { getByTestId } = getComponent(
      <TextAreaTest isDisabled isReadOnly />
    );
    const textareaContainer = getByTestId(textareaInput);
    expect(textareaContainer).toHaveClass('sds_textarea_field--disabled');
    expect(textareaContainer).not.toHaveAttribute(
      'sds_textarea_field--readOnly'
    );
  });

  it('Expect the max length not to be surpassed', () => {
    const { getByTestId } = getComponent(<TextAreaTest />);
    const textarea = getByTestId(textareaInput);
    fireEvent.change(textarea, {
      target: {
        value: 'Changed value',
      },
    });

    expect(textarea.textContent).toHaveLength(10);
  });

  it('Should accept native textarea props', () => {
    const { getByTestId } = getComponent(<TextAreaTest title="example" />);
    const textarea = getByTestId('sds_textarea_container');
    expect(textarea).toHaveAttribute('title', 'example');
  });
});
