import React from 'react';
import classNames from 'classnames';
import type { TableHeaderCellProps } from './types';

export const HeaderCell = React.forwardRef<
  HTMLDivElement,
  TableHeaderCellProps
>(
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
        className={classNames('sds_table_headerCell', {
          [`sds_table_headerCell--${alignment}Alignment`]: alignment,
          'sds_table_headerCell--lastFixedColumn':
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
