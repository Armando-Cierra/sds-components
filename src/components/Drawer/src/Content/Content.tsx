import React from 'react';
import classNames from 'classnames';
import type { DrawerContentProps } from './types';

export const Content = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  (
    { className: customClassName, children, hasPadding = false, ...rest },
    ref
  ) => {
    return (
      <div
        data-testid="sds_drawer_content"
        className={classNames('sds_drawer_content', {
          'sds_drawer_content--hasPadding': hasPadding,
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
