import React from 'react';
import { TabGroup } from '../TabGroup';
import { getComponent, forEachElement } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

type TestProps = {
  defaultSelectedTab?: string;
  isFlex?: boolean;
  isDisabled?: boolean;
  variant?: 'contained' | 'underlined';
};

const UncontrolledTabGroupTest = ({
  defaultSelectedTab,
  variant,
  isFlex,
  isDisabled,
}: TestProps) => {
  return (
    <>
      <div style={{ width: '435px' }}>
        <TabGroup
          isFlex={isFlex}
          variant={variant ?? 'contained'}
          defaultSelectedTab={defaultSelectedTab ?? 'tab1'}
        >
          <TabGroup.Tab value="tab1">
            <TabGroup.Title>
              I am a title 1
              <TabGroup.Badge color="green" isCounter>
                10
              </TabGroup.Badge>
            </TabGroup.Title>
            <TabGroup.Content>Some content at 1</TabGroup.Content>
          </TabGroup.Tab>
          <TabGroup.Divider />
          <TabGroup.Tab value="tab2">
            <TabGroup.Title>
              I am a title 2
              <TabGroup.Icon size="large" iconName="star--fill" />
            </TabGroup.Title>
            <TabGroup.Content>I am some content at 2</TabGroup.Content>
          </TabGroup.Tab>
          <TabGroup.Tab isDisabled={isDisabled} value="tab3">
            <TabGroup.Title>
              I am a title 2
              <TabGroup.Loader />
            </TabGroup.Title>
            <TabGroup.Content>I am some content at 2</TabGroup.Content>
          </TabGroup.Tab>
        </TabGroup>
      </div>
    </>
  );
};

describe('UnControlled tabgroup tests', () => {
  const tabContainerTestId = 'sds_tabGroup';
  const tabContentTestId = 'sds_tabGroup_body';
  const tabsTestId = 'sds_tabGroup_tab';

  it('should be rendering', () => {
    const { getByTestId } = getComponent(<UncontrolledTabGroupTest />);
    const tabGroup = getByTestId(tabContainerTestId);
    expect(tabGroup).toBeInTheDocument();
  });

  it('Default selected tab content should be rendering', () => {
    const { getByTestId } = getComponent(
      <UncontrolledTabGroupTest defaultSelectedTab={'tab2'} />
    );
    const tabGroupContent = getByTestId(tabContentTestId);
    expect(tabGroupContent.textContent).toBe('I am some content at 2');
  });

  it('Expect tab content to be changing in an uncontrolled way', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledTabGroupTest defaultSelectedTab={'tab2'} />
    );
    const tabGroupContent = getByTestId(tabContentTestId);
    const tabs = getAllByTestId(tabsTestId);
    const firstTab = tabs[0];
    fireEvent.click(firstTab);
    expect(tabGroupContent.textContent).toBe('Some content at 1');
  });

  it('Expect tabs loaders, icons, and badges to be rendered', () => {
    const { getByTestId } = getComponent(
      <UncontrolledTabGroupTest defaultSelectedTab={'tab2'} />
    );
    const badge = getByTestId('sds_badge');
    const loader = getByTestId('sds_loader');
    const icon = getByTestId('sds_telicon');

    forEachElement([badge, loader, icon], (element) =>
      expect(element).toBeInTheDocument()
    );
  });

  it('Should change the variant and if isFlex or not depending on the prop value', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <UncontrolledTabGroupTest
        defaultSelectedTab={'tab2'}
        isFlex
        variant="underlined"
      />
    );
    const tabGroup = getByTestId(tabContainerTestId);
    const tab = getAllByTestId(tabsTestId)[0];
    expect(tab).toHaveClass('sds_tabGroup_tab--underlined');
    expect(tabGroup).toHaveClass('sds_tabGroup--flex');
  });

  it('Should set the disabled state to the desired tab.', () => {
    const { getAllByTestId } = getComponent(
      <UncontrolledTabGroupTest defaultSelectedTab={'tab2'} isDisabled />
    );
    const tabs = getAllByTestId(tabsTestId);
    const thirdTab = tabs[2];
    expect(thirdTab).toHaveClass('sds_tabGroup_tab--disabled');
  });
});
