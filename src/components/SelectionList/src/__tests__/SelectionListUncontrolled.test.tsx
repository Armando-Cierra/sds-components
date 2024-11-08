import React, { ChangeEvent, useState } from 'react';
import { SelectionList } from '../';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { SelectionListProps } from '../types';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<SelectionListProps, 'children' | 'ref'>;

const SelectionListTest = (props: TestProps) => {
  const [selectedItem, setSelectedItem] = useState('element1');

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(e.target.id);
  };

  return (
    <>
      <p data-testid="sds_selectionList_selection">{selectedItem}</p>

      <SelectionList {...props}>
        <SelectionList.Item
          data-testid="sds_selectionList_item1"
          controlType="radio"
          name="example"
          id="elemen1"
          defaultChecked
          onChange={handleSelection}
        >
          <SelectionList.Title data-testid="sds_selectionList_title">
            Element 1
          </SelectionList.Title>
          <SelectionList.Description data-testid="sds_selectionList_description">
            Lorem Ipsum
          </SelectionList.Description>
          <SelectionList.NestedContent data-testid="sds_selectionList_nestedContent">
            Nested Lorem Ipsum
          </SelectionList.NestedContent>
        </SelectionList.Item>

        <SelectionList.Item
          data-testid="sds_selectionList_item2"
          controlType="radio"
          name="example"
          id="element2"
          onChange={handleSelection}
        >
          <SelectionList.Title>Element 2</SelectionList.Title>
          <SelectionList.Description>Lorem Ipsum</SelectionList.Description>
          <SelectionList.NestedContent data-testid="sds_selectionList_nestedContent2">
            Nested Lorem Ipsum
          </SelectionList.NestedContent>
        </SelectionList.Item>
      </SelectionList>
    </>
  );
};

describe('Selection list', () => {
  const selectionListTextTestID = 'sds_selectionList_selection';
  const selectionListTestID = 'sds_selectionList';
  const selectionListItem1TestID = 'sds_selectionList_item1';
  const selectionListItem2TestID = 'sds_selectionList_item2';
  const selectionListTitleTestID = 'sds_selectionList_title';
  const selectionListDescriptionTestID = 'sds_selectionList_description';
  const selectionListNestedContentTestID = 'sds_selectionList_nestedContent';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<SelectionListTest />);

    const selectionList = getByTestId(selectionListTestID);
    const selectionListItem = getByTestId(selectionListItem1TestID);
    const selectionListTitle = getByTestId(selectionListTitleTestID);
    const selectionListDescription = getByTestId(
      selectionListDescriptionTestID
    );
    const selectionListNestedContent = getByTestId(
      selectionListNestedContentTestID
    );

    forEachElement(
      [
        selectionList,
        selectionListItem,
        selectionListTitle,
        selectionListDescription,
        selectionListNestedContent,
      ],
      (el) => {
        expect(el).toBeInTheDocument();
      }
    );
  });

  it('SelectionList layout should be "grid" mode.', () => {
    const { getByTestId } = getComponent(<SelectionListTest layout="grid" />);
    const selectionList = getByTestId(selectionListTestID);
    expect(selectionList).toHaveClass('sds_selectionList--grid');
  });

  it('Should change the selected item.', () => {
    const { getByTestId } = getComponent(<SelectionListTest layout="grid" />);
    const selectionListItem1 = getByTestId(selectionListItem1TestID);
    const selectionListItem2 = getByTestId(selectionListItem2TestID);
    const text = getByTestId(selectionListTextTestID);

    fireEvent.click(selectionListItem2);
    //Verifying inner inputs behavior
    expect(
      (document.getElementById(selectionListItem1.id) as HTMLInputElement)
        ?.checked
    ).toBe(false);
    expect(
      (document.getElementById(selectionListItem2.id) as HTMLInputElement)
        ?.checked
    ).toBe(true);
    //Verifying onCheck event
    expect(text).toHaveTextContent('element2');
  });
});
