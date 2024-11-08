import React from 'react';
import classNames from 'classnames';
import { useBody } from './useBody';
import type { TableBodyProps } from './types';

export const Body = React.forwardRef<HTMLDivElement, TableBodyProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    const { fillStyle, borderStyle } = useBody(children);

    return (
      <div
        data-testid="sds_table_body"
        className={classNames('sds_table_body', {
          'sds_table_body--striped': fillStyle === 'striped',
          'sds_table_body--noBorder': borderStyle === 'none',
          'sds_table_body--grid': borderStyle === 'grid',
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
