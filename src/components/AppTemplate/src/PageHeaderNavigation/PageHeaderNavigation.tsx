import React from 'react';
import classNames from 'classnames';
import type { AppTemplatePageHeaderNavigationProps } from './types';

export const PageHeaderNavigation = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageHeaderNavigationProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_page_header_navigation"
      className={classNames('sds_appTemplate_page_header_navigation', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
