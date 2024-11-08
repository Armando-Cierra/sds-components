import React, { forwardRef } from 'react';
import type { ActionsProps } from './types';
import classNames from 'classnames';

export const Actions = forwardRef<HTMLDivElement, ActionsProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-testid="sds_emptyMessage_actions"
        {...rest}
        className={classNames('sds_emptyMessage_actions', {
          [customClassName as string]: customClassName,
        })}
      >
        {children}
      </div>
    );
  }
);
