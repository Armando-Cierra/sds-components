import React, { useContext } from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';
import { usePageHeader } from './usePageHeader';
import { AppTemplateContext } from '../Context';
import type { AppTemplatePageHeaderProps } from './types';

export const PageHeader = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageHeaderProps
>(({ className: customClassName, children, ...rest }, ref) => {
  const context = useContext(AppTemplateContext);

  if (!context)
    throw new Error(
      'Subcomponent should be used inside the <AppTemplate> wrapper'
    );

  const { isSidebarFixed, isSidebarExpanded, expandSidebar } = context;
  const { title, navigation, actions } = usePageHeader({ children });

  if (title === null)
    throw new Error(
      'The <AppTemplate.PageHeaderTitle> subcomponent is required as a child elements for <AppTemplate.PageHeader>'
    );

  return (
    <div
      data-testid="sds_appTemplate_page_header"
      className={classNames('sds_appTemplate_page_header', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      <div className="sds_appTemplate_page_header_leftSection">
        {!isSidebarExpanded && !isSidebarFixed && (
          <Button
            className="sds_appTemplate_page_header_menu_button"
            iconOnly="menu-bars--fill"
            variant="ghost"
            onClick={() => expandSidebar?.()}
          />
        )}
        {navigation}
        {title}
      </div>
      {actions}
    </div>
  );
});
