import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { Badge } from '../../../Badge';
import type { AppTemplateTabBarItemProps } from './types';

export const TabBarItem = React.forwardRef<
  HTMLButtonElement,
  AppTemplateTabBarItemProps
>(
  (
    {
      className: customClassName,
      icon,
      isActive,
      notification,
      onClick,
      notificationColor = 'neutral',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        data-testid="sds_appTemplate_tabBar_item"
        className={classNames('sds_appTemplate_tabBar_item', {
          'sds_appTemplate_tabBar_item--isActive': isActive,
          [customClassName as string]: customClassName,
        })}
        onClick={(e) => onClick?.(e)}
        ref={ref}
        {...rest}
      >
        {notification && (
          <Badge
            className="sds_appTemplate_tabBar_item_notification"
            isCounter
            color={notificationColor}
          >
            {notification}
          </Badge>
        )}
        <Telicon className="sds_appTemplate_tabBar_item_icon" iconName={icon} />
      </button>
    );
  }
);
