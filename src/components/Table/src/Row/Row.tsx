import React from 'react';
import classNames from 'classnames';
import { useRow } from './useRow';
import type { TableRowProps } from './types';

export const Row = React.forwardRef<HTMLDivElement, TableRowProps>(
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
    const { content, columnsSizes } = useRow(children);

    return (
      <div
        data-testid="sds_table_row"
        className={classNames('sds_table_row', {
          'sds_table_row--selected': isSelected,
          'sds_table_row--error': hasError,
          [customClassName as string]: customClassName,
        })}
        style={{
          gridTemplateColumns: columnsSizes,
        }}
        ref={ref}
        key={rest.key}
        {...rest}
      >
        {content}
      </div>
    );
  }
);
