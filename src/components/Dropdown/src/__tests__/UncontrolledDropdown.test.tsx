import React from 'react';
import { Dropdown } from '../Dropdown';
import { Button } from '../../../Button';
import type { DropdownProps } from '../types';
import { fireEvent } from '@testing-library/react';
import { getComponent } from '../../../../TestUtils';

type OmmitedTestTypes = Omit<DropdownProps, 'children'>;

interface TestProps extends OmmitedTestTypes {
  showModeOption?: 'children' | 'value' | 'customValue';
}

const UnControlledDropdownTest = ({ showModeOption }: TestProps) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Label>I am a label</Dropdown.Label>
        <Dropdown.HelpText>I am a helptext</Dropdown.HelpText>
        <Dropdown.Control defaultOpen showModeOption={showModeOption}>
          <Dropdown.Option value="1">Option 1</Dropdown.Option>
          <Dropdown.Option value="2">Option 2</Dropdown.Option>
          <Dropdown.Divider />
          <Dropdown.Header>
            I am a header
            <Dropdown.Actions>
              <Button>1</Button>
              <Button>2</Button>
            </Dropdown.Actions>
          </Dropdown.Header>
          <Dropdown.Option customValue="I am a 3 customValue" value="3">
            Option 3
          </Dropdown.Option>
          <Dropdown.Option value="4">Option 4</Dropdown.Option>
        </Dropdown.Control>
      </Dropdown>
    </>
  );
};

describe('Uncontrolled Dropdown Component', () => {
  const dropdownOptionsTestId = 'sds_menu_option';

  it('Value should be changing', () => {
    const { getAllByTestId, container } = getComponent(
      <UnControlledDropdownTest showModeOption="value" />,
      'document'
    );
    const value = container.getElementsByClassName(
      'sds_dropdown_control_text'
    )[0];
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('3');
  });

  it('showModeOption prop should change the value format as children when an option is clicked', () => {
    const { getAllByTestId, container } = getComponent(
      <UnControlledDropdownTest showModeOption="children" />,
      'document'
    );
    const value = container.getElementsByClassName(
      'sds_dropdown_control_text'
    )[0];
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('Option 3');
  });

  it('showModeOption prop should change the value format as a customValue when an option is clicked', () => {
    const { getAllByTestId, container } = getComponent(
      <UnControlledDropdownTest showModeOption="customValue" />,
      'document'
    );
    const value = container.getElementsByClassName(
      'sds_dropdown_control_text'
    )[0];
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('I am a 3 customValue');
  });
});
