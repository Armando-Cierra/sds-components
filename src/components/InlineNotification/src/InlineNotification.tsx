import React from 'react';
import classNames from 'classnames';
import { Telicon, AvailableTelicon } from '../../Telicon';
import { Content } from './Content';
import { Actions } from './Actions';
import { useInlineNotification } from './useInlineNotification';
import type { Variant, InlineNotificationProps } from './types';
import './inline-notification.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/inlinenotification)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/inlinenotification-tqv8cg?file=/src/App.tsx:1,1)
*/

export const InlineNotification = Object.assign(
  React.forwardRef<HTMLDivElement, InlineNotificationProps>(
    (
      {
        className: customClassName,
        heading,
        children,
        hideIcon = false,
        variant = 'default',
        icon: controlledIcon,
        ...rest
      },
      ref
    ) => {
      const { content, actions } = useInlineNotification(children);

      const ICONS_MAP: Record<Variant, AvailableTelicon> = {
        default: 'question-circle--fill',
        success: 'check-circle--fill',
        danger: 'warning-octagon--fill',
        warning: 'warning-triangle--fill',
      };

      const icon = controlledIcon ?? ICONS_MAP[variant] ?? 'question--circle';

      if (!content) {
        throw new Error(
          'The <InlineNotification.Content> subcomponent is required to render the component'
        );
      }

      return (
        <div
          className={classNames('sds_inlineNotification', {
            [`sds_inlineNotification--${variant}`]: variant,
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_inlineNotification"
          ref={ref}
          {...rest}
        >
          {!hideIcon && (
            <Telicon className="sds_inlineNotification_icon" iconName={icon} />
          )}
          <div className="sds_inlineNotification_contentBox">
            {heading && (
              <p
                data-testid="sds_inlineNotification_title"
                className="sds_inlineNotification_title"
              >
                {heading}
              </p>
            )}
            {content}
            {actions}
          </div>
        </div>
      );
    }
  ),
  {
    Content,
    Actions,
  }
);
