import React, { useContext } from 'react';
import classNames from 'classnames';
import { AppTemplateContext } from '../Context';
import { useSidebar } from './useSidebar';
import type { AppTemplateSidebarProps } from './types';

export const Sidebar = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarProps
>(({ className: customClassName, children, ...rest }, ref) => {
  const context = useContext(AppTemplateContext);

  if (!context)
    throw new Error(
      'Subcomponent should be used inside the <AppTemplate> wrapper'
    );

  const { isSidebarFixed, isSidebarExpanded, collapseSidebar } = context;

  const { header, content, isMobileResolution } = useSidebar({
    children,
    isSidebarFixed,
    collapseSidebar,
  });

  if (content === null) {
    throw new Error(
      'The <AppTemplate.SidebarContent> subcomponent is a required child element for <AppTemplate.Sidebar>'
    );
  }

  return (
    <>
      <div
        data-testid="sds_appTemplate_sidebar"
        className={classNames('sds_appTemplate_sidebar', {
          'sds_appTemplate_sidebar--hasHeader': header !== null,
          'sds_appTemplate_sidebar--sidebarIsCollapsed':
            !isSidebarExpanded && !isSidebarFixed,
          'sds_appTemplate_sidebar--mobile': isMobileResolution,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {header}
        {content}
      </div>
      {isMobileResolution && !isSidebarFixed && (
        <div
          className={classNames('sds_appTemplate_sidebarOverlay', {
            'sds_appTemplate_sidebarOverlay--isCollapsed': !isSidebarExpanded,
          })}
          onClick={collapseSidebar}
        />
      )}
    </>
  );
});
