import React, { forwardRef } from 'react';
import type { DescriptionProps } from './types';
import classNames from 'classnames';

export const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        data-testid="sds_emptyMessage_description"
        className={classNames('sds_emptyMessage_description', {
          [customClassName as string]: customClassName,
        })}
      >
        {children}
      </div>
    );
  }
);
