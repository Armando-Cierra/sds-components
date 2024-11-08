import React from 'react';
import { List } from '../List';
import { getComponent } from '../../../../TestUtils';

const OrderListTest = () => (
  <List.Order type="1">
    <List.Item>Lorem Ipsum</List.Item>
  </List.Order>
);

const UnorderListTest = () => (
  <List.Unorder>
    <List.Item symbol="+">Lorem Ipsum</List.Item>
  </List.Unorder>
);

describe('<SectionHeading />', () => {
  const orderListTestID = 'sds_list--order';
  const unorderListTestID = 'sds_list--unorder';
  const itemListTestID = 'sds_list_item';

  it('Should render an ordered list with its items', () => {
    const { getByTestId } = getComponent(<OrderListTest />);
    const orderList = getByTestId(orderListTestID);
    const listItem = getByTestId(itemListTestID);

    expect(orderList).toBeInTheDocument();
    expect(orderList.tagName).toBe('OL');
    expect(listItem).toBeInTheDocument();
  });

  it('Should render an unorder list with its items', () => {
    const { getByTestId } = getComponent(<UnorderListTest />);
    const unorderList = getByTestId(unorderListTestID);
    const listItem = getByTestId(itemListTestID);

    expect(unorderList).toBeInTheDocument();
    expect(unorderList.tagName).toBe('UL');
    expect(listItem).toBeInTheDocument();
  });

  it('Order list should have the type "1" as attribute', () => {
    const { getByTestId } = getComponent(<OrderListTest />);
    const orderList = getByTestId(orderListTestID);
    expect(orderList).toHaveAttribute('type', '1');
  });

  it('Unorder list item should use the symbol "+"', () => {
    const { getByTestId } = getComponent(<UnorderListTest />);
    const listItem = getByTestId(itemListTestID);
    expect(listItem.style.listStyleType).toBe('"+"');
  });
});
