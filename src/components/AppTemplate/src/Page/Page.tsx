import React from 'react';
import classNames from 'classnames';
import type { AppTemplatePageProps } from './types';

export const Page = React.forwardRef<HTMLDivElement, AppTemplatePageProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_appTemplate_page"
        className={classNames('sds_appTemplate_page', {
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
