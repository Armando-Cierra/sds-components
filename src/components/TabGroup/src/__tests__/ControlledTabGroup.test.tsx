import React, { useState } from 'react';
import { TabGroup } from '../TabGroup';
import { Text } from '../../../';
import { getComponent } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const ControlledTabGroupTest = () => {
  const [selectedTab, setSelectedTab] = useState('tabB');

  const handleSelect = (value: string) => () => {
    setSelectedTab(value);
  };

  return (
    <>
      <TabGroup variant="underlined" isFlex selectedTab={selectedTab}>
        <TabGroup.Tab value="tabA" onClick={handleSelect('tabA')}>
          <TabGroup.Title>
            <TabGroup.Icon iconName="user--fill" />
            First Option
          </TabGroup.Title>
          <TabGroup.Content style={{ padding: '1rem' }}>
            <Text.P>Lorem Ipsum - First Option</Text.P>
          </TabGroup.Content>
        </TabGroup.Tab>
        <TabGroup.Tab value="tabB" onClick={handleSelect('tabB')}>
          <TabGroup.Title>
            <TabGroup.Icon iconName="user-group--fill" />
            Second Option
          </TabGroup.Title>
          <TabGroup.Content style={{ padding: '1rem' }}>
            <Text.P>Lorem Ipsum - Second Option</Text.P>
          </TabGroup.Content>
        </TabGroup.Tab>
        <TabGroup.Tab value="tabC" onClick={handleSelect('tabC')} isDisabled>
          <TabGroup.Title>
            <TabGroup.Loader />
            Third Option
          </TabGroup.Title>
          <TabGroup.Content style={{ padding: '1rem' }}>
            <Text.P>Lorem Ipsum - Third Option</Text.P>
          </TabGroup.Content>
        </TabGroup.Tab>
      </TabGroup>
    </>
  );
};

describe('<TabGroup />', () => {
  const tabContentTestId = 'sds_tabGroup_body';
  const tabsTestId = 'sds_tabGroup_tab';

  it('Should work in a controlled way', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <ControlledTabGroupTest />
    );
    const tabs = getAllByTestId(tabsTestId);
    const tabGroupContent = getByTestId(tabContentTestId);
    const firstTab = tabs[0];
    fireEvent.click(firstTab);
    expect(tabGroupContent.textContent).toBe('Lorem Ipsum - First Option');
  });
});
