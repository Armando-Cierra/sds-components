import React from 'react';
import classNames from 'classnames';
import type { AppTemplatePageFooterProps } from './types';

export const PageContentFooter = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageFooterProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <div
      data-testid="sds_appTemplate_page_content_footer"
      className={classNames('sds_appTemplate_page_content_footer', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
