import React from 'react';
import * as Portal from '@radix-ui/react-portal';
import { animated } from '@react-spring/web';
import classNames from 'classnames';
import { Telicon } from '../../Telicon';
import { Content } from './Content';
import { Footer } from './Footer';
import { useAlert } from './useAlert';
import type { AlertProps } from './types';
import './alert.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/alert)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/alert-gl37n9?file=/src/App.tsx:1,1)
*/

export const Alert = Object.assign(
  React.forwardRef<HTMLDivElement, AlertProps>(
    (
      {
        children,
        heading,
        variant = 'info',
        className: customClassName,
        icon: controlledIcon,
        hideIcon = false,
        isOpen = true,
        position = 'top',
        ...rest
      },
      ref
    ) => {
      const { AlertTransition, alertBoxTransition, icon, content, footer } =
        useAlert({ isOpen, variant, children, controlledIcon });

      if (!content) {
        throw new Error(
          'The <Alert.Content> subcomponent is required to render the component.'
        );
      }

      return (
        <Portal.Root>
          {AlertTransition(
            (style, item) =>
              item && (
                <animated.div
                  data-testid="sds_alert"
                  data-variant={variant}
                  className={classNames('sds_alert', {
                    [`sds_alert--${variant}`]: variant,
                    [customClassName as string]: customClassName,
                  })}
                  style={style}
                  {...rest}
                  ref={ref}
                >
                  {alertBoxTransition(
                    (style, item) =>
                      item && (
                        <animated.div
                          className={classNames('sds_alert_card', {
                            'sds_alert_card--center': position === 'center',
                          })}
                          style={{
                            ...style,
                          }}
                        >
                          <div className="sds_alert_header">
                            {!hideIcon && (
                              <Telicon
                                className="sds_alert_header_icon"
                                iconName={icon}
                                size="medium"
                              />
                            )}
                            <span>{heading}</span>
                          </div>
                          {content}
                          {footer}
                        </animated.div>
                      )
                  )}
                </animated.div>
              )
          )}
        </Portal.Root>
      );
    }
  ),
  {
    Content,
    Footer,
  }
);
