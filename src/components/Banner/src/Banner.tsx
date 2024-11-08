import React, {
  CSSProperties,
  ReactElement,
  cloneElement,
  forwardRef,
} from 'react';
import { animated } from '@react-spring/web';
import { Content } from './Content';
import { Actions } from './Actions';
import { Telicon } from '../../Telicon';
import classNames from 'classnames';
import { Button } from '../../Button';
import { useBanner } from './useBanner';
import type { BannerProps } from './types';
import './banner.scss';

export const Banner = Object.assign(
  forwardRef<HTMLDivElement, BannerProps>(
    (
      {
        className: customClassName,
        isOpen,
        heading,
        hideIcon,
        children,
        display,
        variant = 'default',
        zIndex = 0,
        icon: controlledIcon,
        onClose,
        ...rest
      },
      ref
    ) => {
      const {
        actions,
        content,
        shouldShowMobileCloseButton,
        icon,
        BannerTransition,
      } = useBanner({
        children,
        variant,
        icon: controlledIcon,
        isOpen,
        zIndex,
        display,
      });

      if (!content) {
        throw new Error('The <Banner.Content> subcomponent is required.');
      }

      return (
        <>
          {BannerTransition(
            (style, item) =>
              item && (
                <animated.div
                  ref={ref}
                  className={classNames('sds_banner', {
                    'sds_banner--overlay': display === 'overlay',
                    'sds_banner--success': variant === 'success',
                    'sds_banner--danger': variant === 'danger',
                    'sds_banner--warning': variant === 'warning',
                    [customClassName as string]: customClassName,
                  })}
                  style={{
                    zIndex,
                    ...(style as unknown as CSSProperties),
                  }}
                  {...rest}
                  data-testid="sds_banner"
                >
                  {!hideIcon && (
                    <div className="sds_banner_iconContainer">
                      <Telicon className="sds_banner_icon" iconName={icon} />
                    </div>
                  )}
                  <div className="sds_banner_container">
                    <div className="sds_banner_contentBox">
                      <p
                        data-testid="sds_banner_title"
                        className={classNames('sds_banner_title', {
                          'sds_banner_title--noHeading': !!heading === false,
                        })}
                      >
                        {heading}
                      </p>
                      {content}
                    </div>
                    {actions &&
                      cloneElement(actions, {
                        children: (
                          <>
                            {(actions as ReactElement).props.children}
                            {!shouldShowMobileCloseButton && onClose && (
                              <Button
                                onClick={onClose}
                                className="sds_banner_closeIcon"
                                iconOnly="x--fill"
                                size="small"
                                variant="ghost"
                              />
                            )}
                          </>
                        ),
                      })}
                  </div>
                  {shouldShowMobileCloseButton && onClose && (
                    <Button
                      onClick={onClose}
                      className="sds_banner_closeIcon"
                      style={{ transform: 'translateX(8px)' }}
                      iconOnly="x--fill"
                      size="small"
                      variant="ghost"
                    />
                  )}
                </animated.div>
              )
          )}
        </>
      );
    }
  ),
  {
    Actions,
    Content,
  }
);
