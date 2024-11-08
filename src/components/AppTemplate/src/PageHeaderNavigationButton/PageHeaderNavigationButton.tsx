import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';
import type { AppTemplatePageHeaderNavigationButton } from './types';

export const PageHeaderNavigationButton = React.forwardRef<
  HTMLButtonElement,
  AppTemplatePageHeaderNavigationButton
>(
  (
    {
      className: customClassName,
      icon = 'chevron-left--line',
      onClick,
      ...rest
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
      onClick?.(e);

    return (
      <Button
        variant="ghost"
        iconOnly={icon}
        className={classNames('sds_appTemplate_page_header_navigation_button', {
          [customClassName as string]: customClassName,
        })}
        onClick={handleClick}
        ref={ref}
        {...rest}
      />
    );
  }
);
