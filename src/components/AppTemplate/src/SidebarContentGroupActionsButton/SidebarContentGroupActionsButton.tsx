import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';
import type { AppTemplateSidebarContentGroupActionsButton } from './types';

export const SidebarContentGroupActionsButton = React.forwardRef<
  HTMLButtonElement,
  AppTemplateSidebarContentGroupActionsButton
>(({ className: customClassName, icon, onClick, ...rest }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClick?.(e);
  };

  return (
    <Button
      variant="ghost"
      size="small"
      iconOnly={icon}
      className={classNames(
        'sds_appTemplate_sidebar_content_group_actions_button',
        {
          [customClassName as string]: customClassName,
        }
      )}
      onClick={handleClick}
      ref={ref}
      {...rest}
    />
  );
});
