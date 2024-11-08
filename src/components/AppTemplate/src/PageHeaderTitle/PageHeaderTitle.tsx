import React from 'react';
import type { AppTemplatePageHeaderTitleProps } from './types';
import classNames from 'classnames';

export const PageHeaderTitle = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageHeaderTitleProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_page_header_title"
      className={classNames('sds_appTemplate_page_header_title', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
