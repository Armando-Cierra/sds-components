import React, { useState } from 'react';
import { TextInput } from '../TextInput';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';
import type { TextInputProps } from '../types';

type TestTextInputProps = Omit<TextInputProps, 'children' | 'ref'>;

const TextInputTest: React.FC<TestTextInputProps> = (props) => {
  const [value, setValue] = useState('');

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const customFilter = (e: string) => {
    return e.replace('d', '');
  };

  return (
    <div>
      <p data-testid="valueOutput">{value}</p>
      <TextInput {...props}>
        <TextInput.Label htmlFor="example" info="lorem ipsum">
          Label Text
        </TextInput.Label>
        <TextInput.Control
          icon="star--fill"
          maxLength={5}
          prefix="$"
          sufix="USD"
          id="example"
          lettersOnly
          value={value}
          customFilter={customFilter}
          onChange={changeEvent}
          hasClearAction
        />
        <TextInput.HelpText>Help Text String</TextInput.HelpText>
      </TextInput>
    </div>
  );
};

describe('<TextInput />', () => {
  const TextInputWrapperTestID = 'sds_textInput';
  const TextInputLabelTestID = 'sds_textInput_label';
  const TextInputFieldTestID = 'sds_textInput_input';
  const TextInputHelpTextTestID = 'sds_textInput_helptext';

  it('Should render the component and its different children components', () => {
    const { getByTestId } = getComponent(<TextInputTest />);
    const textInputWrapper = getByTestId(TextInputWrapperTestID);
    const textInputLabel = getByTestId(TextInputLabelTestID);
    const textInputField = getByTestId(TextInputFieldTestID);
    const textInputHelpText = getByTestId(TextInputHelpTextTestID);
    forEachElement(
      [textInputLabel, textInputWrapper, textInputField, textInputHelpText],
      (element) => expect(element).toBeInTheDocument()
    );
  });

  it('Expect hasError state to be false because the input is disabled', () => {
    const { getByTestId } = getComponent(<TextInputTest isDisabled hasError />);
    const textInputWrapper = getByTestId(TextInputFieldTestID);

    expect(textInputWrapper).toHaveClass('sds_textInput_input--disabled');
    expect(textInputWrapper).not.toHaveClass('sds_textInput_input--error');
  });

  it('Expect hasError state to be false because the input is readOnly', () => {
    const { getByTestId } = getComponent(<TextInputTest isReadOnly hasError />);
    const textInputWrapper = getByTestId(TextInputFieldTestID);

    expect(textInputWrapper).toHaveClass('sds_textInput_input--readOnly');
    expect(textInputWrapper).not.toHaveClass('sds_textInput_input--error');
  });

  it('Expect filter to accept only letters', async () => {
    const { getByTestId } = getComponent(<TextInputTest />);
    const textInputField = getByTestId(TextInputFieldTestID);
    const valueOutput = getByTestId('valueOutput');

    fireEvent.change(textInputField, { target: { value: '1abc' } });

    expect(textInputField).toHaveAttribute('data-letters_only', 'true');
    expect(valueOutput).toHaveTextContent('abc');
  });

  it('Expect filter to replace the the letter "d" by an empty string', async () => {
    const { getByTestId } = getComponent(<TextInputTest />);
    const textInputField = getByTestId(TextInputFieldTestID);
    const valueOutput = getByTestId('valueOutput');

    fireEvent.change(textInputField, { target: { value: 'abcd' } });

    expect(textInputField).toHaveAttribute('data-custom_filter', 'true');
    expect(valueOutput).toHaveTextContent('abc');
  });

  it('Expect clear action icon to be rendering if true', () => {
    const { container, getByTestId } = getComponent(<TextInputTest />);
    const textInputField = getByTestId(TextInputFieldTestID);
    const valueOutput = getByTestId('valueOutput');

    fireEvent.change(textInputField, { target: { value: 'abc' } });

    const clearActionButton = container.getElementsByClassName(
      'sds_textInput_clearAction'
    )[0] as HTMLElement;
    expect(clearActionButton).toBeInTheDocument();
    // test reset
    fireEvent.click(clearActionButton);

    expect(valueOutput.textContent).toBe('');
  });

  it('Renders with a prefix', () => {
    const prefix = '$';
    const { getByTestId } = getComponent(<TextInputTest />);
    const prefixElement = getByTestId('sds_textInput_prefix');
    expect(prefixElement).toHaveTextContent(prefix);
  });

  it('Renders with a sufix', () => {
    const sufix = 'USD';
    const { getByTestId } = getComponent(<TextInputTest />);
    const sufixElement = getByTestId('sds_textInput_sufix');
    expect(sufixElement).toHaveTextContent(sufix);
  });

  it('Limits input length to maxLength', () => {
    const { getByTestId } = getComponent(<TextInputTest />);
    const textInputField = getByTestId(TextInputFieldTestID);
    const valueOutput = getByTestId('valueOutput');
    fireEvent.change(textInputField, { target: { value: 'ABCDEF' } });
    expect(valueOutput.textContent).toBe('ABCDE');
  });

  it('Expect custom icon to render', () => {
    const { getAllByTestId } = getComponent(<TextInputTest />);
    const iconName = getAllByTestId('sds_telicon_icon_name')[1];
    expect(iconName).toHaveAttribute('href', '#star--fill');
  });
});
