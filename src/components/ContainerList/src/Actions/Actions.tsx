import React, { forwardRef } from 'react';
import type { ContainerListActionsProps } from './types';
import classNames from 'classnames';

export const Actions = forwardRef<HTMLDivElement, ContainerListActionsProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        className={classNames('sds_containerList_actions', {
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_containerList_actions"
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
