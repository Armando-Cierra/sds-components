import React from 'react';
import classNames from 'classnames';
import type { TableCellProps } from './types';

export const Cell = React.forwardRef<HTMLDivElement, TableCellProps>(
  (
    {
      className: customClassName,
      children,
      isFixed,
      alignment = 'left',
      leftFixedPosition,
      isLastFixedColumn,
      isTableScrolled,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        data-testid="sds_table_cell"
        className={classNames('sds_table_cell', {
          'sds_table_cell--fixed': isFixed,
          [`sds_table_cell--${alignment}Alignment`]: alignment,
          'sds_table_cell--lastFixedColumn':
            isFixed && isLastFixedColumn && isTableScrolled,
          [customClassName as string]: customClassName,
        })}
        {...(isFixed &&
          leftFixedPosition && {
            style: {
              position: 'sticky',
              left: leftFixedPosition,
            },
          })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
