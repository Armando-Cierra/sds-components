import React from 'react';
import type { AppTemplateTabBarProps } from './types';
import classNames from 'classnames';

export const TabBar = React.forwardRef<HTMLDivElement, AppTemplateTabBarProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_appTemplate_tabBar"
        className={classNames('sds_appTemplate_tabBar', {
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
