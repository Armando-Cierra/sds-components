import React from 'react';
import type { DrawerFooterProps } from './types';
import classNames from 'classnames';

export const Footer = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_drawer_footer"
        className={classNames('sds_drawer_footer', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
