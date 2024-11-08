import { AppTemplate } from '../AppTemplate';
import { forEachElement, getComponent } from '../../../../TestUtils';
import React, { useState } from 'react';
import {
  Avatar,
  Badge,
  Text,
  Menu,
  Tooltip,
  Button,
} from '../../../../components';
import { fireEvent } from '@testing-library/react';

type testProps = {
  isSidebarFixed?: boolean;
};

const AppTemplateTest = ({ isSidebarFixed = false }: testProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const collapseSidebar = () => setIsExpanded(false);
  const expandSidebar = () => setIsExpanded(true);

  return (
    <>
      <AppTemplate
        isSidebarFixed={isSidebarFixed}
        isSidebarExpanded={isExpanded}
        collapseSidebar={collapseSidebar}
        expandSidebar={expandSidebar}
      >
        {/* Sidebar */}
        <AppTemplate.Sidebar>
          {/* Header */}
          <AppTemplate.SidebarHeader>
            <Avatar showIcon icon="address-book--fill" />
            Sidebar Header
          </AppTemplate.SidebarHeader>
          {/* Content */}
          <AppTemplate.SidebarContent>
            {/* Group 1 */}
            <AppTemplate.SidebarContentGroup
              variant="accordion"
              heading="Group 1"
            >
              <AppTemplate.SidebarContentGroupItem
                icon="user--fill"
                collapseSidebarOnMobile={collapseSidebar}
              >
                Element 1
              </AppTemplate.SidebarContentGroupItem>
              <AppTemplate.SidebarContentGroupItem icon="address-book--fill">
                Element 2
              </AppTemplate.SidebarContentGroupItem>
            </AppTemplate.SidebarContentGroup>
            <AppTemplate.SidebarContentDivider />
            {/* Group 2 */}
            <AppTemplate.SidebarContentGroup
              heading="Group 2 (Chats)"
              variant="accordion"
            >
              <AppTemplate.SidebarContentGroupActions>
                <AppTemplate.SidebarContentGroupActionsButton icon="minus--fill" />
                <AppTemplate.SidebarContentGroupActionsButton icon="plus--fill" />
              </AppTemplate.SidebarContentGroupActions>
              <a className="active">
                <AppTemplate.SidebarContentGroupItem
                  notificationColor="red"
                  notification="2"
                  avatar="Josh Sanders"
                >
                  Element 1
                </AppTemplate.SidebarContentGroupItem>
              </a>
              <AppTemplate.SidebarContentGroupItem
                avatar="Eduardo olmedo"
                isLoading
                notificationColor="red"
                notification="5"
              >
                Element 2
              </AppTemplate.SidebarContentGroupItem>
            </AppTemplate.SidebarContentGroup>
            {/* Custom Content */}
            <div className="customContent">CustomContent</div>
            {/* TODO */}
          </AppTemplate.SidebarContent>
        </AppTemplate.Sidebar>

        {/* Page */}
        <AppTemplate.Page>
          {/* Header */}
          <AppTemplate.PageHeader>
            <AppTemplate.PageHeaderTitle>
              Title Example
              <Badge color="indigo">Beta</Badge>
            </AppTemplate.PageHeaderTitle>
            <AppTemplate.PageHeaderNavigation>
              <Tooltip message="something">
                <a href="#back">
                  <AppTemplate.PageHeaderNavigationButton icon="chevron-left--line" />
                </a>
              </Tooltip>
            </AppTemplate.PageHeaderNavigation>
            <AppTemplate.PageHeaderActions>
              <Button iconOnly="mail--fill" />
              <Button iconOnly="phone--fill" />
            </AppTemplate.PageHeaderActions>
          </AppTemplate.PageHeader>
          {/* Content */}
          <AppTemplate.PageContent hasPadding>
            Lorem Ipsum
            <Text.P>Text Component</Text.P>
            <Badge>Hello</Badge>
            <AppTemplate.PageContentFooter>
              <Button>Cancel</Button>
              <Button variant="primary">Save</Button>
            </AppTemplate.PageContentFooter>
          </AppTemplate.PageContent>
        </AppTemplate.Page>
        {/* TabBar */}
        <AppTemplate.TabBar>
          <AppTemplate.TabBarItem
            isActive
            onClick={() => console.log('hello')}
            icon="phone--fill"
          />
          <a href="#tabBarItem">
            <AppTemplate.TabBarItem
              notification="2"
              notificationColor="red"
              icon="mail--fill"
            />
          </a>
          <AppTemplate.TabBarItem
            notification="6"
            notificationColor="red"
            icon="comment-dots--fill"
          />
          <AppTemplate.TabBarItem icon="device-fax--fill" />
          <Menu align="end" side="top">
            <Menu.Trigger>
              <AppTemplate.TabBarItem icon="ellipses-horizontal--fill" />
            </Menu.Trigger>
            <Menu.Option>Element 1</Menu.Option>
            <Menu.Option>Element 2</Menu.Option>
            <Menu.Option>Element 3</Menu.Option>
          </Menu>
        </AppTemplate.TabBar>
      </AppTemplate>
    </>
  );
};

describe('<AppTemplate />', () => {
  const AppTemplateTestID = 'sds_appTemplate';
  const pageTestID = 'sds_appTemplate_page';
  const pageContentTestID = 'sds_appTemplate_page_content';
  const pageContentFooterTestID = 'sds_appTemplate_page_content_footer';
  const pageHeaderTestID = 'sds_appTemplate_page_header';
  const pageHeaderActionsTestID = 'sds_appTemplate_page_header_actions';
  const pageHeaderNavigationTestID = 'sds_appTemplate_page_header_navigation';
  const pageHeaderNavigationButtonTestID =
    'sds_appTemplate_page_header_navigation_button';
  const pageHeaderTitleTestID = 'sds_appTemplate_page_header_title';
  const sidebarTestID = 'sds_appTemplate_sidebar';
  const sidebarContentTestID = 'sds_appTemplate_sidebar_content';
  const sidebarContentDividerTestID = 'sds_appTemplate_sidebar_content_divider';
  const sidebarContentGroupTestID = 'sds_appTemplate_sidebar_content_group';
  const sidebarContentGroupActionsButtonTestID =
    'sds_appTemplate_sidebar_content_group_actions_button';
  const sidebarContentGroupItemTestID =
    'sds_appTemplate_sidebar_content_group_item';
  const sidebarHeaderTestID = 'sds_appTemplate_sidebar_header';
  const tabBarItemTestID = 'sds_appTemplate_tabBar_item';

  it('All elements should be rendering', () => {
    const { getByTestId, container, getAllByTestId } = getComponent(
      <AppTemplateTest />
    );
    const appTemplate = getByTestId(AppTemplateTestID);

    const page = getByTestId(pageTestID);
    const pageContent = getByTestId(pageContentTestID);
    const pageContentFooter = getByTestId(pageContentFooterTestID);
    const pageHeader = getByTestId(pageHeaderTestID);
    const pageHeaderActions = getByTestId(pageHeaderActionsTestID);
    const pageHeaderNavigation = getByTestId(pageHeaderNavigationTestID);
    const pageHeaderNavigationButton = container.getElementsByClassName(
      pageHeaderNavigationButtonTestID
    )[0] as HTMLElement;
    const pageHeaderTitle = getByTestId(pageHeaderTitleTestID);

    const sidebar = getByTestId(sidebarTestID);
    const sidebarContent = getByTestId(sidebarContentTestID);
    const sidebarContentDivider = getByTestId(sidebarContentDividerTestID);
    const sidebarContentGroup = getAllByTestId(sidebarContentGroupTestID)[0];
    const sidebarContentGroupActionsButton = container.getElementsByClassName(
      sidebarContentGroupActionsButtonTestID
    )[0] as HTMLElement;
    const sidebarContentGroupItem = getAllByTestId(
      sidebarContentGroupItemTestID
    )[0];
    const sidebarHeader = getByTestId(sidebarHeaderTestID);

    const tabBarItem = getAllByTestId(tabBarItemTestID)[0];

    forEachElement(
      [
        appTemplate,
        page,
        pageContent,
        pageContentFooter,
        pageHeader,
        pageHeaderActions,
        pageHeaderNavigation,
        pageHeaderNavigationButton,
        pageHeaderTitle,
        sidebar,
        sidebarContent,
        sidebarContentDivider,
        sidebarContentGroup,
        sidebarContentGroupActionsButton,
        sidebarContentGroupItem,
        sidebarHeader,
        tabBarItem,
      ],
      (element) => {
        expect(element).toBeInTheDocument();
      }
    );
  });

  it('Sidebar should be collapsing/expanding', () => {
    const isCollapsedClass = 'sds_appTemplate_sidebar--sidebarIsCollapsed';

    const { getByTestId, container } = getComponent(<AppTemplateTest />);

    const button = container.getElementsByClassName(
      'sds_appTemplate_sidebar_header_button'
    )[0] as HTMLElement;

    fireEvent.click(button);

    const sidebar = getByTestId(sidebarTestID);

    expect(sidebar).toHaveClass(isCollapsedClass);
  });

  it('When using the SidebarContentGroup subcomponent, as an accordion should collapse/expand', () => {
    const { container } = getComponent(<AppTemplateTest />);
    const sidebarContentGroup = container.getElementsByClassName(
      'sds_appTemplate_sidebar_content_group_header--accordion'
    )[0];

    fireEvent.click(sidebarContentGroup);

    const sidebarContentGroupContent = container.getElementsByClassName(
      'sds_appTemplate_sidebar_content_group_content'
    )[0];

    expect(sidebarContentGroupContent).toHaveClass(
      'sds_appTemplate_sidebar_content_group_content--isCollapsed'
    );
  });

  it('The tab bar item should show a notification if passed', () => {
    const { getAllByTestId } = getComponent(<AppTemplateTest />);
    const tabTwoItem = getAllByTestId(tabBarItemTestID)[1];
    const classes = [...tabTwoItem.children[0].classList];
    expect(classes.includes('sds_appTemplate_tabBar_item_notification')).toBe(
      true
    );
  });

  it('Sidebar should always be open if fixed', () => {
    const { getByTestId } = getComponent(<AppTemplateTest />);
    const sidebar = getByTestId(sidebarTestID);
    expect(sidebar).not.toHaveClass(
      'sds_appTemplate_sidebar--sidebarIsCollapsed'
    );
  });
});
