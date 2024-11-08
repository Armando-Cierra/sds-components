import React from 'react';
import classNames from 'classnames';
import { useStackRow } from './useStackRow';
import type { TableStackRowProps } from './types';

export const StackRow = React.forwardRef<HTMLDivElement, TableStackRowProps>(
  (
    { className: customClassName, children, columnsSizes, style, ...rest },
    ref
  ) => {
    const { content, columnsAmount } = useStackRow(children);

    return (
      <div
        className={classNames('sds_table_stackRow', {
          [customClassName as string]: customClassName,
        })}
        style={{
          ...style,
          display: 'grid',
          gridTemplateColumns: columnsSizes ?? `repeat(${columnsAmount}, 1fr)`,
        }}
        ref={ref}
        {...rest}
      >
        {content}
      </div>
    );
  }
);
