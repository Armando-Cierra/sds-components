import React from 'react';
import classNames from 'classnames';
import { useSidebarContentGroupActions } from './useSidebarContentGroupActions';
import type { AppTemplateSidebarContentGroupActions } from './types';

export const SidebarContentGroupActions = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarContentGroupActions
>(({ className: customClassName, children, ...rest }, ref) => {
  const { content } = useSidebarContentGroupActions({ children });

  return (
    <div
      data-testid="sds_appTemplate_sidebar_content_group_actions"
      className={classNames('sds_appTemplate_sidebar_content_group_actions', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {content}
    </div>
  );
});
