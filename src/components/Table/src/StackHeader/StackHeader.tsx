import React from 'react';
import classNames from 'classnames';
import { useStackHeader } from './useStackHeader';
import type { TableStackHeaderProps } from './types';

export const StackHeader = React.forwardRef<
  HTMLDivElement,
  TableStackHeaderProps
>(
  (
    { className: customClassName, children, columnsSizes, style, ...dist },
    ref
  ) => {
    const { columnsAmount, content, borderStyle } = useStackHeader(children);

    return (
      <div
        className={classNames('sds_table_stackHeader', {
          'sds_table_stackHeader--noBorder': borderStyle === 'none',
          [customClassName as string]: customClassName,
        })}
        style={{
          ...style,
          display: 'grid',
          gridTemplateColumns: columnsSizes ?? `repeat(${columnsAmount}, 1fr)`,
        }}
        ref={ref}
        {...dist}
      >
        {content}
      </div>
    );
  }
);
