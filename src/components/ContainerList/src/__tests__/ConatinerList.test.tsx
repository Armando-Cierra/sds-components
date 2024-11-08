import React from 'react';
import { ContainerList } from '../';
import { getComponent } from '../../../../TestUtils';
import type { BackgroundsTypes } from '../Item/types';

const ContainerListTest = ({
  background,
  isDraggable,
}: {
  background?: BackgroundsTypes;
  isDraggable?: boolean;
}) => {
  const elements = [
    {
      id: 'element1',
      content: 'Element 1',
    },
    {
      id: 'element2',
      content: 'Element 2',
    },
    {
      id: 'element3',
      content: 'Element 3',
    },
  ];
  return (
    <ContainerList isDraggable={isDraggable}>
      {elements.map((item) => (
        <ContainerList.Item
          key={item.id}
          background={background ?? 'default'}
          value={item.id}
        >
          <ContainerList.Content>{item.content}</ContainerList.Content>
          <ContainerList.Actions>Actions</ContainerList.Actions>
        </ContainerList.Item>
      ))}
    </ContainerList>
  );
};

describe('<ContainerList />', () => {
  const ContainerListTestID = 'sds_containerList';
  const ContainerListItemTestID = 'sds_containerList_item';
  const ContainerListContentTestID = 'sds_containerList_content';
  const ContainerListActionsTestID = 'sds_containerList_actions';

  it('Should render the component and its subcomponents properly', () => {
    const { getByTestId, getAllByTestId } = getComponent(<ContainerListTest />);
    const containerList = getByTestId(ContainerListTestID);
    const containerListItem = getAllByTestId(ContainerListItemTestID);
    const containerListContent = getAllByTestId(ContainerListContentTestID);
    const containerListActions = getAllByTestId(ContainerListActionsTestID);

    expect(containerList).toBeInTheDocument();
    expect(containerListItem.length).toBe(3);
    expect(containerListContent.length).toBe(3);
    expect(containerListActions.length).toBe(3);
  });

  it('containerList should render the draggable variant', () => {
    const { getByTestId } = getComponent(<ContainerListTest isDraggable />);
    const containerList = getByTestId(ContainerListTestID);

    expect(containerList.className).toContain('sds_containerList--isDraggable');
  });

  it('containerList Item should be displaying the correct background', () => {
    const { getAllByTestId } = getComponent(
      <ContainerListTest background="contrast" />
    );
    const containerListItem = getAllByTestId(ContainerListItemTestID);

    expect(containerListItem[0].className).toContain(
      'sds_containerList_item--contrast'
    );
  });
});
