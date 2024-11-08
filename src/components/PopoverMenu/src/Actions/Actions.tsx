import React from 'react';
import classNames from 'classnames';
import { useActions } from './useActions';
import type { PopoverMenuActionProps } from './types';

export const Actions = React.forwardRef<HTMLDivElement, PopoverMenuActionProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    const { childrenArray } = useActions(children);

    return (
      <div
        key={rest.key}
        data-testid="sds_popoverMenu_actions"
        className={classNames('sds_popoverMenu_actions', {
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
