import React from 'react';
import classNames from 'classnames';
import type { MenuCustomAreaProps } from './types';

export const CustomArea = React.forwardRef<HTMLDivElement, MenuCustomAreaProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_menu_customArea"
        className={classNames('sds_menu_customArea', {
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
