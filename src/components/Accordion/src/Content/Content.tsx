import React, { forwardRef } from 'react';
import type { ContentProps } from './types';
import classNames from 'classnames';

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        data-testid="sds_accordionGroup_content"
        className={classNames('sds_accordionGroup_accordion_contentText', {
          [className as string]: className,
        })}
      >
        {children}
      </div>
    );
  }
);
