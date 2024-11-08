import React from 'react';
import classNames from 'classnames';
import type { TableStackItemProps } from './types';

export const StackItem = React.forwardRef<HTMLDivElement, TableStackItemProps>(
  (
    {
      className: customClassName,
      children,
      isSelected = false,
      hasError = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_table_stackItem', {
          'sds_table_stackItem--selected': isSelected,
          'sds_table_stackItem--error': hasError,
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
