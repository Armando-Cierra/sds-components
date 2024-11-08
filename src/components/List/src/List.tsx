import React from 'react';
import classNames from 'classnames';
import { Item } from './Item';
import { ListContext } from './context';
import type { UnorderListProps, OrderListProps } from './types';
import './list.scss';

export const List = {
  Order: React.forwardRef<HTMLOListElement, OrderListProps>(
    ({ className: customClassName, children, type = '1', ...rest }, ref) => {
      return (
        <ListContext.Provider value={{ isOrdered: true }}>
          <ol
            data-testid="sds_list--order"
            className={classNames('sds_list', 'sds_list--order', {
              [customClassName as string]: customClassName,
            })}
            type={type}
            ref={ref}
            {...rest}
          >
            {children}
          </ol>
        </ListContext.Provider>
      );
    }
  ),
  Unorder: React.forwardRef<HTMLUListElement, UnorderListProps>(
    ({ className: customClassName, children, ...rest }, ref) => {
      return (
        <ListContext.Provider value={{ isOrdered: false }}>
          <ul
            data-testid="sds_list--unorder"
            className={classNames('sds_list', 'sds_list--unorder', {
              [customClassName as string]: customClassName,
            })}
            ref={ref}
            {...rest}
          >
            {children}
          </ul>
        </ListContext.Provider>
      );
    }
  ),
  Item,
};
