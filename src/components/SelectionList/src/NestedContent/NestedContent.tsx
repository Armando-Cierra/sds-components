import React from 'react';
import classNames from 'classnames';
import type { SelectionListNestedContentProps } from './types';

export const NestedContent = React.forwardRef<
  HTMLDivElement,
  SelectionListNestedContentProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      className={classNames('sds_selectionList_nestedContent', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
