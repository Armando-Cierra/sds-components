import React from 'react';
import classNames from 'classnames';
import { useContent } from './useContent';
import { TableContext } from '../Context';
import type { TableContentProps } from './types';

export const Content = React.forwardRef<HTMLDivElement, TableContentProps>(
  (
    {
      className: customClassName,
      columnsSizes,
      children,
      fillStyle = 'solid',
      borderStyle = 'ruled',
      fixedColumns,
      id,
      ...rest
    },
    ref
  ) => {
    const { header, body, columnSizesString, contentID, isScrolled } =
      useContent(children, columnsSizes, id);

    return (
      <TableContext.Provider
        value={{
          columnsSizes: columnSizesString,
          fixedColumns,
          fillStyle,
          borderStyle,
          isScrolled,
        }}
      >
        <div
          data-testid="sds_table_content"
          className={classNames('sds_table_content', {
            'sds_table_content--fullBorder': borderStyle === 'grid',
            'sds_table_content--noBorder': borderStyle === 'none',
            [customClassName as string]: customClassName,
          })}
          id={contentID}
          ref={ref}
          {...rest}
        >
          {header}
          {body}
        </div>
      </TableContext.Provider>
    );
  }
);
