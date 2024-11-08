import React from 'react';
import type { AppTemplateSidebarContentDivider } from './types';
import classNames from 'classnames';

export const SidebarContentDivider = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarContentDivider
>(({ className: customClassName, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_sidebar_content_divider"
      className={classNames('sds_appTemplate_sidebar_content_divider', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    />
  );
});
