import React from 'react';
import classNames from 'classnames';
import { Sidebar } from './Sidebar';
import { SidebarHeader } from './SidebarHeader';
import { SidebarContent } from './SidebarContent';
import { SidebarContentDivider } from './SidebarContentDivider';
import { SidebarContentGroup } from './SidebarContentGroup';
import { SidebarContentGroupActions } from './SidebarContentGroupActions';
import { SidebarContentGroupActionsButton } from './SidebarContentGroupActionsButton';
import { SidebarContentGroupItem } from './SidebarContentGroupItem';
import { TabBar } from './TabBar';
import { TabBarItem } from './TabBarItem';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { PageHeaderNavigation } from './PageHeaderNavigation';
import { PageHeaderNavigationButton } from './PageHeaderNavigationButton';
import { PageHeaderTitle } from './PageHeaderTitle';
import { PageHeaderActions } from './PageHeaderActions';
import { PageContent } from './PageContent';
import { PageContentFooter } from './PageContentFooter';
import { useAppTemplate } from './useAppTemplate';
import { AppTemplateContext } from './Context';
import type { AppTemplateProps } from './types';
import './app-template.scss';

export const AppTemplate = Object.assign(
  React.forwardRef<HTMLDivElement, AppTemplateProps>(
    (
      {
        className: customClassName,
        children,
        isSidebarFixed = false,
        isSidebarExpanded,
        collapseSidebar,
        expandSidebar,
        ...rest
      },
      ref
    ) => {
      const { sidebar, page, tabBar, isMobileResolution } = useAppTemplate({
        children,
        isSidebarFixed,
        isSidebarExpanded,
        collapseSidebar,
        expandSidebar,
      });

      const isInvalidSidebarState =
        sidebar === null ||
        (!isSidebarFixed && !isSidebarExpanded) ||
        isMobileResolution;

      if (page === null)
        throw new Error(
          'The <AppTemplate.Page> subcomponent is required to render the component'
        );

      return (
        <AppTemplateContext.Provider
          value={{
            isSidebarExpanded,
            isSidebarFixed,
            collapseSidebar,
            expandSidebar,
          }}
        >
          <div
            data-testid="sds_appTemplate"
            className={classNames('sds_appTemplate', {
              [customClassName as string]: customClassName,
            })}
            ref={ref}
            {...rest}
          >
            {sidebar}
            <div
              className={classNames('sds_appTemplate_body', {
                'sds_appTemplate_body--sidebarIsCollapsed':
                  isInvalidSidebarState,
                'sds_appTemplate_body--hasTabBar': tabBar !== null,
              })}
            >
              {page}
              {tabBar}
            </div>
          </div>
        </AppTemplateContext.Provider>
      );
    }
  ),
  {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarContentDivider,
    SidebarContentGroup,
    SidebarContentGroupActions,
    SidebarContentGroupActionsButton,
    SidebarContentGroupItem,
    TabBar,
    TabBarItem,
    Page,
    PageHeader,
    PageHeaderNavigation,
    PageHeaderNavigationButton,
    PageHeaderTitle,
    PageHeaderActions,
    PageContent,
    PageContentFooter,
  }
);
