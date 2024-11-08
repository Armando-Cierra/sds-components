import React from 'react';
import classNames from 'classnames';
import type { InlineNotificationContentProps } from './types';

export const Content = React.forwardRef<
  HTMLDivElement,
  InlineNotificationContentProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      className={classNames('sds_inlineNotification_content', {
        [customClassName as string]: customClassName,
      })}
      data-testid="sds_inlineNotification_content"
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
