import React from 'react';
import classNames from 'classnames';
import type { PopoverMenuCustomAreaProps } from './types';

export const CustomArea = React.forwardRef<
  HTMLDivElement,
  PopoverMenuCustomAreaProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_popoverMenu_customArea"
      className={classNames('sds_popoverMenu_customArea', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
