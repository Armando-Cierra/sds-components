import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Telicon } from '../../Telicon';
import { useAvatar } from './useAvatar';
import type { AvatarProps } from './types';
import './avatar.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/avatar)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/avatar-jc2n5s?file=/src/App.tsx:1,1)
*/

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      status = 'none',
      children,
      className: customClassName,
      size = 'default',
      profilePic = '',
      shape = 'square',
      showIcon = false,
      icon,
      ...rest
    },
    ref
  ) => {
    const { colors, getBackgroundColor, getIcon, gettingInitials } = useAvatar(
      children,
      status
    );

    const backgroundColor = useMemo(
      () => getBackgroundColor(children, colors),
      [children]
    );

    return (
      <div
        data-testid="sds_avatar"
        className={classNames('sds_avatar', {
          [`sds_avatar--${shape}`]: shape,
          [`sds_avatar--${size}`]: size,
          [`sds_avatar--${backgroundColor}`]:
            backgroundColor && backgroundColor !== 'neutral' && !showIcon,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {showIcon === false &&
          (size === 'small'
            ? gettingInitials().slice(0, -1)
            : gettingInitials())}
        {showIcon && (
          <Telicon
            className="sds_avatar_icon"
            size={size === 'large' ? 'large' : 'default'}
            iconName={icon ?? 'user--fill'}
          />
        )}
        {profilePic && (
          <img
            className={classNames('sds_avatar_profilePic', {
              [`sds_avatar_profilePic--${shape}`]: shape,
            })}
            src={profilePic}
          />
        )}
        {status && status !== 'none' && (
          <div
            data-testid="sds_avatar_status"
            className={classNames('sds_avatar_status', {
              [`sds_avatar_status--${status}`]: status,
            })}
          >
            <Telicon
              className="sds_avatar_statusIcon"
              iconName={getIcon()}
              size="default"
            />
          </div>
        )}
      </div>
    );
  }
);
