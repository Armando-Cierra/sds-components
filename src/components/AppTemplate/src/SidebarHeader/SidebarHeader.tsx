import React, { useContext } from 'react';
import { Button } from '../../../Button';
import { AppTemplateContext } from '../Context';
import type { AppTemplateSidebarHeaderProps } from './types';
import classNames from 'classnames';

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarHeaderProps
>(({ className: customClassName, children, ...rest }, ref) => {
  const context = useContext(AppTemplateContext);

  if (!context)
    throw new Error(
      'Subcomponent should be used inside the <AppTemplate> wrapper'
    );

  const { isSidebarFixed, collapseSidebar } = context;

  return (
    <div
      data-testid="sds_appTemplate_sidebar_header"
      className={classNames('sds_appTemplate_sidebar_header', {
        'sds_appTemplate_sidebar_header--sidebarIsFixed': isSidebarFixed,
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {!isSidebarFixed && (
        <Button
          className="sds_appTemplate_sidebar_header_button"
          iconOnly="menu-bars--fill"
          variant="ghost"
          onClick={() => collapseSidebar?.()}
        />
      )}
      {children}
    </div>
  );
});
