import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { Avatar } from '../../Avatar';
import { Tooltip } from '../../Tooltip';
import { useAvatarGroup } from './useAvatarGroup';
import type { AvatarGroupProps } from './types';
import './avatar-group.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/avatargroup)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/avatargroup-xxr5ms?file=/src/App.tsx:1,1)
*/

export const AvatarGroup = Object.assign(
  React.forwardRef<HTMLDivElement, AvatarGroupProps>(
    (
      {
        children,
        visibleUsers: avatarNumber = 10,
        className: customClassName,
        overcountText = 'more',
        ...rest
      },
      ref
    ) => {
      const { content, remainingUsersLength } = useAvatarGroup(
        children,
        avatarNumber >= 10 ? 10 : avatarNumber
      );

      const canShowLabel = Number(remainingUsersLength) > 0;

      return (
        <div
          {...rest}
          ref={ref}
          data-testid="sds_avatar_group"
          className={classNames('sds_avatar_group', {
            [customClassName as string]: customClassName,
          })}
        >
          {content.map((avatar: ReactElement) => avatar)}
          {canShowLabel && (
            <label
              data-small_text={true}
              className="sds_avatar_overcount"
              data-testid="sds_avatar_group_complement"
            >
              +{remainingUsersLength} {overcountText}
            </label>
          )}
        </div>
      );
    }
  ),
  {
    Avatar,
    Tooltip,
  }
);
