import React, { forwardRef } from 'react';
import type { TabGroupContentProps } from './types';
import classNames from 'classnames';

const Content = forwardRef<HTMLDivElement, TabGroupContentProps>(
  (
    { className: customClassName, children, ...rest }: TabGroupContentProps,
    ref
  ) => {
    return (
      <div
        className={classNames('sds_tabGroup_content', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export { Content };
