import React from 'react';
import type { AppTemplatePageHeaderActionsProps } from './types';
import classNames from 'classnames';

export const PageHeaderActions = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageHeaderActionsProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_page_header_actions"
      className={classNames('sds_appTemplate_page_header_actions', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
