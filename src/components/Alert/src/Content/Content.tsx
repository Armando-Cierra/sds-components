import React from 'react';
import classNames from 'classnames';
import type { AlertContentProps } from './types';

export const Content = React.forwardRef<HTMLDivElement, AlertContentProps>(
  ({ children, className: customClassName, hasPadding, ...rest }, ref) => {
    return (
      <div
        className={classNames('sds_alert_content', {
          'sds_alert_content--hasPadding': hasPadding,
          [customClassName as string]: customClassName,
        })}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
