import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { ContainerListContentProps } from './types';

export const Content = forwardRef<HTMLDivElement, ContainerListContentProps>(
  ({ classNames: customClassName, children, ...rest }, ref) => {
    return (
      <div
        className={classNames('sds_containerList_content', {
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_containerList_content"
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
