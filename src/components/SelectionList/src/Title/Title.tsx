import React from 'react';
import classNames from 'classnames';
import type { SelectionListTitleProps } from './types';

export const Title = React.forwardRef<HTMLSpanElement, SelectionListTitleProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <span
        className={classNames('sds_selectionList_title', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  }
);
