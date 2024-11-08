import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../Telicon';
import type { LinkProps } from './types';
import './link.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/links)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/link-m9mzcg?file=/src/App.tsx:1,1)
*/

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className: customClassName,
      isDisabled = false,
      isUnderlined = false,
      iconBefore,
      iconAfter,
      children,
      ...rest
    },
    ref
  ) => {
    const onElementClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      if (isDisabled) {
        e.preventDefault();
      }
    };

    return (
      <a
        data-testid="sds_link"
        className={classNames('sds_link', {
          'sds_link--underlined': isUnderlined,
          'sds_link--disabled': isDisabled,
          [customClassName as string]: customClassName,
        })}
        onClick={onElementClick}
        ref={ref}
        {...(!isDisabled && { tabIndex: 0 })}
        {...rest}
      >
        {iconBefore && (
          <Telicon
            className="sds_link_icon"
            iconName={iconBefore}
            size="default"
          />
        )}
        {children}
        {iconAfter && (
          <Telicon
            className="sds_link_icon"
            iconName={iconAfter}
            size="default"
          />
        )}
      </a>
    );
  }
);
