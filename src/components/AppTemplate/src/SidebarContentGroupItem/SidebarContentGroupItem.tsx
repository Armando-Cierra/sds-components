import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { Badge } from '../../../Badge';
import { Avatar } from '../../../Avatar';
import { Loader } from '../../../Loader';
import { useMediaQuery } from '../utils';
import type { AppTemplateSidebarContentGroupItem } from './types';

export const SidebarContentGroupItem = React.forwardRef<
  HTMLButtonElement,
  AppTemplateSidebarContentGroupItem
>(
  (
    {
      className: customClassName,
      children,
      icon,
      avatar,
      avatarProfilePic,
      isLoading,
      isActive,
      notification,
      notificationColor = 'neutral',
      onClick,
      collapseSidebarOnMobile,
      ...rest
    },
    ref
  ) => {
    const iconValidation = icon && !isLoading && !avatar;
    const avatarValidation = avatar && !isLoading && !icon;
    const isMobileResolution = useMediaQuery('(max-width: 63.9375rem)');

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (isMobileResolution) collapseSidebarOnMobile?.();
      onClick?.(e);
    };

    return (
      <button
        data-testid="sds_appTemplate_sidebar_content_group_item"
        className={classNames('sds_appTemplate_sidebar_content_group_item', {
          'sds_appTemplate_sidebar_content_group_item--isActive': isActive,
          [customClassName as string]: customClassName,
        })}
        onClick={handleClick}
        ref={ref}
        {...rest}
      >
        {isLoading && (
          <Loader className="sds_appTemplate_sidebar_content_group_item_loader" />
        )}
        {avatarValidation && (
          <Avatar
            size="small"
            className="sds_appTemplate_sidebar_content_group_item_avatar"
            profilePic={avatarProfilePic}
          >
            {avatar}
          </Avatar>
        )}
        {iconValidation && (
          <Telicon
            className="sds_appTemplate_sidebar_content_group_item_icon"
            iconName={icon}
          />
        )}
        <div className="sds_appTemplate_sidebar_content_group_item_body">
          {children}
        </div>
        {notification && (
          <Badge
            className="sds_appTemplate_sidebar_content_group_item_notification"
            color={notificationColor}
            isCounter
          >
            {notification}
          </Badge>
        )}
      </button>
    );
  }
);
