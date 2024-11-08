import React, { forwardRef } from 'react';
import type { ContentProps } from './types';
import classNames from 'classnames';

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        data-testid="sds_banner_content"
        className={classNames('sds_banner_content', {
          [customClassName as string]: customClassName,
        })}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
