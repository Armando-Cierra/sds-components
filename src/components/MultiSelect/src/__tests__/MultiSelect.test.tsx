import React, { useEffect, useState } from 'react';
import { fireEvent, queryAllByAttribute } from '@testing-library/react';
import { getComponent, forEachElement } from '../../../../TestUtils';
import { MultiSelect } from '../MultiSelect';

const MultiSelectTest = () => {
  const items = ['Element 1', 'Element 2', 'Element 3'];
  const [filter, setFilter] = useState('');
  const [options, setOptions] = useState<string[]>(items);
  const [text, setText] = useState('Not clicked');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Eduardo Olmedo',
    'Armando Cierra',
  ]);
  const itemsToShow = filter.length === 0 ? options : filteredOptions;

  const selectItem = (item: string) => () => {
    setText('Clicked');
    setSelectedItems((prevState) => [...prevState, item]);
    setOptions((prevState) => prevState.filter((e) => e !== item));
  };

  const removeSelection = (item: string) => () => {
    const newSelectedItems = selectedItems.filter((e) => e !== item);
    setSelectedItems([...newSelectedItems]);
    setOptions(items.filter((e) => !newSelectedItems.includes(e)));
  };

  const filterAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    setFilteredOptions(
      options.filter((e) =>
        e.toLowerCase().trim().includes(filter.toLowerCase().trim())
      )
    );
  }, [filter]);

  return (
    <MultiSelect style={{ width: '100%', maxWidth: '512px' }}>
      <MultiSelect.TagBox>
        {selectedItems.map((item) => (
          <MultiSelect.Tag
            data-tagbox_tag={true}
            onRemove={removeSelection(item)}
            key={Math.random()}
          >
            <MultiSelect.Tag.Avatar>{item}</MultiSelect.Tag.Avatar>
            {item}
          </MultiSelect.Tag>
        ))}
      </MultiSelect.TagBox>
      <MultiSelect.Label>Label Example</MultiSelect.Label>
      <MultiSelect.Dropdown defaultOpen>
        <MultiSelect.Search
          placeholder="Search here..."
          onChange={filterAction}
        />
        {itemsToShow.map((item) => (
          <MultiSelect.Option key={Math.random()} onClick={selectItem(item)}>
            {item}
          </MultiSelect.Option>
        ))}
      </MultiSelect.Dropdown>
      <MultiSelect.HelpText>{text}</MultiSelect.HelpText>
    </MultiSelect>
  );
};

describe('<MultiSelect />', () => {
  const multiSelectTestId = 'sds_multiSelect';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<MultiSelectTest />, 'document');
    const multiSelect = getByTestId(multiSelectTestId);
    const helpText = getByTestId('sds_multiSelect_helpText');
    const label = getByTestId('sds_multiSelect_label');
    forEachElement([multiSelect, helpText, label], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Should have the initial state selected tags', () => {
    const { container } = getComponent(<MultiSelectTest />, 'document');
    const multiSelectTags = queryAllByAttribute(
      'data-tagbox_tag',
      container as HTMLElement,
      'true'
    );
    expect(multiSelectTags.length).toBe(2);
  });

  it('Should render the items to show length as options', () => {
    const { getAllByTestId } = getComponent(<MultiSelectTest />, 'document');
    const options = getAllByTestId('sds_menu_option');
    expect(options.length).toBe(3);
  });

  it('Expect options onClick to change', () => {
    const { getAllByTestId, getByTestId } = getComponent(
      <MultiSelectTest />,
      'document'
    );
    const optionTest = getAllByTestId('sds_menu_option')[0];
    fireEvent.click(optionTest);
    const helpText = getByTestId('sds_multiSelect_helpText');
    expect(helpText.textContent).toBe('Clicked');
  });
});
