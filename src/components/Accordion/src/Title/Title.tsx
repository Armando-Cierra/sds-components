import React, { forwardRef } from 'react';
import type { TitleProps } from './types';
import classNames from 'classnames';

export const Title = forwardRef<HTMLSpanElement, TitleProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        {...rest}
        data-testid="sds_accordionGroup_title"
        className={classNames('sds_accordionGroup_accordion_titleContent', {
          [className as string]: className,
        })}
      >
        {children}
      </span>
    );
  }
);
