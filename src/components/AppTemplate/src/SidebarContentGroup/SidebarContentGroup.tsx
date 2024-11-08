import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { useSidebarContentGroup } from './useSidebarContentGroup';
import type { AppTemplateSidebarContentGroup } from './types';

export const SidebarContentGroup = React.forwardRef<
  HTMLDivElement,
  AppTemplateSidebarContentGroup
>(
  (
    {
      className: customClassName,
      heading,
      children,
      variant = 'static',
      isExpanded: controlledValue,
      defaultExpanded = true,
      onClick,
      ...rest
    },
    ref
  ) => {
    const { actions, content, handleClick, handleKeyDown, isExpanded } =
      useSidebarContentGroup({
        children,
        variant,
        controlledValue,
        defaultExpanded,
        onClick,
      });

    return (
      <div
        data-testid="sds_appTemplate_sidebar_content_group"
        className={classNames('sds_appTemplate_sidebar_content_group', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {heading && (
          <div
            className={classNames(
              'sds_appTemplate_sidebar_content_group_header',
              {
                'sds_appTemplate_sidebar_content_group_header--accordion':
                  variant === 'accordion',
              }
            )}
            {...(variant === 'accordion' && { tabIndex: 0 })}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <div className="sds_appTemplate_sidebar_content_group_header_title">
              {variant === 'accordion' && heading && (
                <Telicon
                  className="sds_appTemplate_sidebar_content_group_header_title_icon"
                  iconName={
                    isExpanded ? 'chevron-bottom--line' : 'chevron-right--line'
                  }
                />
              )}
              <span>{heading}</span>
            </div>
            {actions}
          </div>
        )}
        <div
          className={classNames(
            'sds_appTemplate_sidebar_content_group_content',
            {
              'sds_appTemplate_sidebar_content_group_content--hasNoHeader':
                !heading,
              'sds_appTemplate_sidebar_content_group_content--isCollapsed':
                variant === 'accordion' && isExpanded === false,
            }
          )}
        >
          <div className="sds_appTemplate_sidebar_content_group_content_animationBox">
            {content}
          </div>
        </div>
      </div>
    );
  }
);
