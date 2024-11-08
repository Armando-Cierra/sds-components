import React from 'react';
import classNames from 'classnames';
import type { TableStackCellProps } from './types';

export const StackCell = React.forwardRef<HTMLDivElement, TableStackCellProps>(
  (
    {
      className: customClassName,
      children,
      alignment = 'left',
      asLabel,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_table_stackCell', {
          'sds_table_stackCell--asLabel': asLabel,
          [`sds_table_stackCell--${alignment}Alignment`]: alignment,
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
