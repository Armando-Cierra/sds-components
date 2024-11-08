import React, { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { DropdownProps } from '../types';
import { fireEvent } from '@testing-library/react';
import uniqid from 'uniqid';

type OmmitedTestTypes = Omit<DropdownProps, 'children'>;

interface TestProps extends OmmitedTestTypes {
  showModeOption?: 'children' | 'value' | 'customValue';
}

type Item = {
  value: string;
  text: string;
};

const ControlledDropdownTest = ({ ...rest }: TestProps) => {
  const collection: Item[] = [
    {
      value: 'element1',
      text: 'Element 1',
    },
    {
      value: 'element2',
      text: 'Element 2',
    },
    {
      value: 'element3',
      text: 'Element 3',
    },
    {
      value: 'element4',
      text: 'Element 4',
    },
  ];

  const [selection, setSelection] = useState<Item | undefined>(undefined);

  const handleSelection = (value: string, text: string) => () => {
    setSelection({ value, text });
  };

  return (
    <>
      <Dropdown {...rest}>
        <Dropdown.Label>Dropdown Label Example</Dropdown.Label>
        <Dropdown.Control
          placeholder="-- Choose an Option --"
          showModeOption={rest.showModeOption}
          value={selection ? selection.value : ''}
          defaultOpen
        >
          {collection.map((item) => (
            <Dropdown.Option
              isSelected={item.value === selection?.value}
              key={uniqid()}
              value={item.value}
              customValue={item.text + 'customValue'}
              onClick={handleSelection(item.value, item.text)}
            >
              {item.text}
            </Dropdown.Option>
          ))}
          <Dropdown.Header>
            A header
            <Dropdown.Actions>
              <button>Some action</button>
            </Dropdown.Actions>
          </Dropdown.Header>
        </Dropdown.Control>
        <Dropdown.HelpText>Dropdown Help Text Example</Dropdown.HelpText>
      </Dropdown>
      <p data-testid="sds_dropdown_value">
        {rest.showModeOption === 'customValue'
          ? selection?.value + ' customValue'
          : selection?.value}
      </p>
      =
    </>
  );
};

describe('Controlled Dropdown component', () => {
  const dropdownTestId = 'sds_dropdown';
  const dropdownControlTestId = 'sds_dropdown_control';
  const dropdownLabelTestId = 'sds_label';
  const dropdownHeaderTestId = 'sds_menu_header';
  const dropdownOptionsTestId = 'sds_menu_option';
  const dropdownActionsTestId = 'sds_menu_actions';

  it('Should render all elements', () => {
    const { getByTestId } = getComponent(
      <ControlledDropdownTest />,
      'document'
    );
    const dropdown = getByTestId(dropdownTestId);
    const dropdownControl = getByTestId(dropdownControlTestId);
    const dropdownLabel = getByTestId(dropdownLabelTestId);
    const dropdownHeader = getByTestId(dropdownHeaderTestId);
    const dropdownActions = getByTestId(dropdownActionsTestId);
    forEachElement(
      [
        dropdown,
        dropdownActions,
        dropdownControl,
        dropdownLabel,
        dropdownHeader,
      ],
      (element: HTMLElement) => expect(element).toBeInTheDocument()
    );
  });

  it('Should render all the desired options passed as a child', () => {
    const { getAllByTestId } = getComponent(
      <ControlledDropdownTest />,
      'document'
    );
    const options = getAllByTestId(dropdownOptionsTestId);
    expect(options.length).toBe(4);
  });

  it('Error state should be working', () => {
    const { getByTestId } = getComponent(
      <ControlledDropdownTest hasError />,
      'document'
    );
    const dropdown = getByTestId(dropdownTestId);
    expect(dropdown).toHaveClass('sds_dropdown--error');
  });

  it('Disabled state should be working even if hasError is true', () => {
    const { getByTestId } = getComponent(
      <ControlledDropdownTest isDisabled hasError />,
      'document'
    );
    const dropdown = getByTestId(dropdownTestId);
    expect(dropdown).toHaveClass('sds_dropdown--disabled');
    expect(dropdown).not.toHaveClass('--sds_dropdown--error');
  });

  it('Value should be changing', () => {
    const { getAllByTestId, getByTestId } = getComponent(
      <ControlledDropdownTest showModeOption="value" />,
      'document'
    );
    const value = getByTestId('sds_dropdown_value');
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('element3');
  });

  it('showModeOption prop should change the value format as children when an option is clicked', () => {
    const { getAllByTestId, getByTestId } = getComponent(
      <ControlledDropdownTest showModeOption="children" />,
      'document'
    );
    const value = getByTestId('sds_dropdown_value');
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('element3');
  });

  it('showModeOption prop should change the value format as a customValue when an option is clicked', () => {
    const { getAllByTestId, getByTestId } = getComponent(
      <ControlledDropdownTest showModeOption="customValue" />,
      'document'
    );
    const value = getByTestId('sds_dropdown_value');
    const thirdOption = getAllByTestId(dropdownOptionsTestId)[2];
    fireEvent.click(thirdOption);
    expect(value.textContent).toBe('element3 customValue');
  });
});
