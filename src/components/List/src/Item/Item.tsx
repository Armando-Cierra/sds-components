import React, { useContext } from 'react';
import classNames from 'classnames';
import { ListContext } from '../context';
import type { ListItemProps } from './types';

export const Item = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    { className: customClassName, children, symbol = 'disc', style, ...rest },
    ref
  ) => {
    const context = useContext(ListContext);

    if (!context)
      throw new Error(
        '<List.Item> should be used inside a <List.Order> or <List.Unorder> components'
      );

    const { isOrdered } = context;
    const symbolVerification =
      symbol === 'disc' || symbol === 'circle' || symbol === 'square';
    const insertSymbol = symbolVerification ? symbol : `\u0022${symbol}\u0022`;

    return (
      <li
        data-testid="sds_list_item"
        className={classNames('sds_list_item', {
          'sds_list_item--nativeSymbol': !isOrdered && symbolVerification,
          [customClassName as string]: customClassName,
        })}
        style={
          isOrdered ? { ...style } : { ...style, listStyleType: insertSymbol }
        }
        ref={ref}
        {...rest}
      >
        {children}
      </li>
    );
  }
);
