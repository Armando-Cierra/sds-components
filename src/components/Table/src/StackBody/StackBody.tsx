import React from 'react';
import classNames from 'classnames';
import { useStackBody } from './useStackBody';
import type { TableStackBodyProps } from './types';

export const StackBody = React.forwardRef<HTMLDivElement, TableStackBodyProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    const { content, borderStyle, fillStyle } = useStackBody(children);

    return (
      <div
        className={classNames('sds_table_stackBody', {
          'sds_table_stackBody--noBorder': borderStyle === 'none',
          'sds_table_stackBody--striped': fillStyle === 'striped',
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {content}
      </div>
    );
  }
);
