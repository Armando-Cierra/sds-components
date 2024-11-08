import React, { forwardRef } from 'react';
import type { TabGroupTitleProps } from './types';

const Title = forwardRef<HTMLDivElement, TabGroupTitleProps>(
  (
    { children, className: customClassName, ...rest }: TabGroupTitleProps,
    ref
  ) => {
    const className = customClassName
      ? `${customClassName} sds_tabGroup_title`
      : 'sds_tabGroup_title';

    return (
      <div
        {...rest}
        ref={ref}
        data-testid="sds_tabGroup_title"
        className={className}
      >
        {children}
      </div>
    );
  }
);

export { Title };
