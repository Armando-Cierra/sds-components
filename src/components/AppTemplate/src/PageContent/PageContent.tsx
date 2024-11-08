import React from 'react';
import classNames from 'classnames';
import { usePageContent } from './usePageContent';
import type { AppTemplatePageContentProps } from './types';

export const PageContent = React.forwardRef<
  HTMLDivElement,
  AppTemplatePageContentProps
>(({ className: customClassName, children, hasPadding, ...rest }, ref) => {
  const { body, footer } = usePageContent({ children });

  return (
    <div
      data-testid="sds_appTemplate_page_content"
      className={classNames('sds_appTemplate_page_content', {
        'sds_appTemplate_page_content--hasFooter': footer !== null,
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      <div
        className={classNames('sds_appTemplate_page_content_body', {
          'sds_appTemplate_page_content_body--hasPadding': hasPadding,
        })}
      >
        {body}
      </div>
      {footer}
    </div>
  );
});
