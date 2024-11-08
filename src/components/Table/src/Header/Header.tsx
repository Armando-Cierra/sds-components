import React from 'react';
import classNames from 'classnames';
import { useHeader } from './useHeader';
import type { TableHeaderProps } from './types';

export const Header = React.forwardRef<HTMLDivElement, TableHeaderProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    const { columnsSizes, content, borderStyle } = useHeader(children);

    return (
      <div
        data-testid="sds_table_header"
        className={classNames('sds_table_header', {
          'sds_table_header--grid': borderStyle === 'grid',
          [customClassName as string]: customClassName,
        })}
        style={{
          gridTemplateColumns: columnsSizes,
          ...rest.style,
        }}
        ref={ref}
        {...rest}
      >
        {content}
      </div>
    );
  }
);
