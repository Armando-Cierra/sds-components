import React from 'react';
import classNames from 'classnames';
import type { TableStackHeaderCellProps } from './types';

export const StackHeaderCell = React.forwardRef<
  HTMLDivElement,
  TableStackHeaderCellProps
>(
  (
    { className: customClassName, children, alignment = 'left', ...rest },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_table_stackHeaderCell', {
          [`sds_table_stackHeaderCell--${alignment}Alignment`]: alignment,
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
