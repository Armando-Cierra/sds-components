import React from 'react';
import classNames from 'classnames';
import type { InlineNotificationActionsProps } from './types';

export const Actions = React.forwardRef<
  HTMLDivElement,
  InlineNotificationActionsProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      className={classNames('sds_inlineNotification_actions', {
        [customClassName as string]: customClassName,
      })}
      data-testid="sds_inlineNotification_actions"
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
