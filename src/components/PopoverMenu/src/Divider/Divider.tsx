import React from 'react';
import type { PopoverMenuDividerProps } from './types';
import './popoverMenuDivider.scss';

export const Divider = React.forwardRef<
  HTMLDivElement,
  PopoverMenuDividerProps
>(({ className: customClassName, ...rest }, ref) => {
  const className = customClassName
    ? `${customClassName} sds_popoverMenu_divider`
    : 'sds_popoverMenu_divider';

  return (
    <div
      data-testid="sds_popoverMenu_divider"
      className={className}
      ref={ref}
      {...rest}
    >
      <div />
    </div>
  );
});
