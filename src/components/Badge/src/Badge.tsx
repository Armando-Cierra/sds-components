import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../Telicon';
import type { BadgeProps } from './types';
import './badge.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/badges)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/badge-5qr9ml?file=/src/App.tsx:1,1)
*/

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      children,
      className: customClassName,
      iconBefore,
      iconAfter,
      color = 'neutral',
      isCounter,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_badge', {
          [`sds_badge--${color}`]: color,
          'sds_badge--counter': isCounter,
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_badge"
        ref={ref}
        {...rest}
      >
        {!isCounter && iconBefore && (
          <Telicon
            className="sds_badge_icon"
            iconName={iconBefore}
            size="default"
          />
        )}
        {children}
        {!isCounter && iconAfter && (
          <Telicon
            className="sds_badge_icon"
            iconName={iconAfter}
            size="default"
          />
        )}
      </div>
    );
  }
);
