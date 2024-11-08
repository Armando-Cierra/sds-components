import React from 'react';
import type { MenuDividerProps } from './types';
import './menu-divider.scss';

export const Divider = React.forwardRef<HTMLDivElement, MenuDividerProps>(
  ({ className: customClassName, ...rest }, ref) => {
    const className = customClassName
      ? `${customClassName} sds_menu_divider`
      : 'sds_menu_divider';

    return (
      <div
        data-testid="sds_menu_divider"
        className={className}
        ref={ref}
        {...rest}
      >
        <div />
      </div>
    );
  }
);
