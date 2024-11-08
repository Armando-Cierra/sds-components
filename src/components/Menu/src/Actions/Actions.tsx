import React from 'react';
import classNames from 'classnames';
import { useActions } from './useActions';
import type { MenuActionsProps } from './types';

export const Actions = React.forwardRef<HTMLDivElement, MenuActionsProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    const { childrenArray } = useActions(children);

    return (
      <div
        key={rest.key}
        data-testid="sds_menu_actions"
        className={classNames('sds_menu_actions', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {childrenArray}
      </div>
    );
  }
);
