import React, { ChangeEvent, useState } from 'react';
import { SelectionList } from '../';
import { getComponent } from '../../../../TestUtils';
import type { SelectionListProps } from '../types';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<SelectionListProps, 'children' | 'ref'>;
type Element = {
  id: string;
  title: string;
  checked: boolean;
};

const SelectionListTest = (props: TestProps) => {
  const [elements, setElements] = useState<Element[]>([
    {
      id: 'element1',
      title: 'Element 1',
      checked: true,
    },
    {
      id: 'element2',
      title: 'Element 2',
      checked: false,
    },
    {
      id: 'element3',
      title: 'Element 3',
      checked: false,
    },
  ]);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prevState) => {
      const updatedElements: Element[] = [];

      prevState.forEach((item) => {
        if (item.id === e.target.id) {
          updatedElements.push({ ...item, checked: e.target.checked });
        } else {
          updatedElements.push(item);
        }
      });

      return updatedElements;
    });
  };

  return (
    <>
      <SelectionList {...props}>
        {elements.map((item) => (
          <SelectionList.Item
            key={item.id}
            data-testid={`sds_selectionList_${item.id}`}
            controlType="checkbox"
            id={item.id}
            checked={item.checked}
            onChange={handleSelection}
          >
            <SelectionList.Title>{item.title}</SelectionList.Title>
          </SelectionList.Item>
        ))}
      </SelectionList>
    </>
  );
};

describe('SelectionList', () => {
  const selectionListItem1TestID = 'sds_selectionList_element1';
  const selectionListItem2TestID = 'sds_selectionList_element2';
  const selectionListItem3TestID = 'sds_selectionList_element3';

  it('The first element should be already selected', () => {
    const { getByTestId } = getComponent(<SelectionListTest />);
    const selectionListItem1 = getByTestId(selectionListItem1TestID);

    expect(
      (document.getElementById(selectionListItem1.id) as HTMLInputElement)
        ?.checked
    ).toBe(true);
  });

  it('Should change the selected items.', () => {
    const { getByTestId } = getComponent(<SelectionListTest />);
    const selectionListItem1 = getByTestId(selectionListItem1TestID);
    const selectionListItem2 = getByTestId(selectionListItem2TestID);
    const selectionListItem3 = getByTestId(selectionListItem3TestID);

    fireEvent.click(selectionListItem1);
    fireEvent.click(selectionListItem2);
    fireEvent.click(selectionListItem3);

    expect(
      (document.getElementById(selectionListItem1.id) as HTMLInputElement)
        ?.checked
    ).toBe(false);
    expect(
      (document.getElementById(selectionListItem2.id) as HTMLInputElement)
        ?.checked
    ).toBe(true);
    expect(
      (document.getElementById(selectionListItem3.id) as HTMLInputElement)
        ?.checked
    ).toBe(true);
  });
});
