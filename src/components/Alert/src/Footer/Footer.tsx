import React from 'react';
import type { AlertFooterProps } from './types';
import classNames from 'classnames';

export const Footer = React.forwardRef<HTMLDivElement, AlertFooterProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    return (
      <div
        className={classNames('sds_alert_footer', {
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
