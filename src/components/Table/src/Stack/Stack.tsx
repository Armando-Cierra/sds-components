import React from 'react';
import classNames from 'classnames';
import { TableStackContext } from '../Context';
import { useStack } from './useStack';
import type { TableStackProps } from './types';

export const Stack = React.forwardRef<HTMLDivElement, TableStackProps>(
  (
    {
      className: customClassName,
      borderStyle = 'ruled',
      fillStyle = 'solid',
      children,
      ...rest
    },
    ref
  ) => {
    const { header, body } = useStack(children);

    return (
      <TableStackContext.Provider value={{ borderStyle, fillStyle }}>
        <div
          className={classNames('sds_table_stack', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {header}
          {body}
        </div>
      </TableStackContext.Provider>
    );
  }
);
