import React from 'react';
import type { AppTemplateSidebarContentProps } from './types';
import classNames from 'classnames';

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarContentProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_sidebar_content"
      className={classNames('sds_appTemplate_sidebar_content', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
