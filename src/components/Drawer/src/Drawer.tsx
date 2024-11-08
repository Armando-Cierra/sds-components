import React from 'react';
import classNames from 'classnames';
import * as Portal from '@radix-ui/react-portal';
import { animated } from '@react-spring/web';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useDrawer } from './useDrawer';
import type { DrawerProps } from './types';
import './drawer.scss';

export const Drawer = Object.assign(
  React.forwardRef<HTMLDivElement, DrawerProps>(
    (
      {
        className: customClassName,
        hideOverlay = false,
        position = 'right',
        maxWidth = '256px',
        children,
        isOpen,
        onClose,
        ...rest
      },
      ref
    ) => {
      const {
        DrawerTransition,
        DrawerCardTransition,
        handleOnClose,
        header,
        content,
        footer,
      } = useDrawer({
        isOpen,
        position,
        onClose,
        children,
        maxWidth,
      });

      if (content === null)
        throw new Error(
          'The <Drawer.Content> subcomponent is required to render the component'
        );

      return (
        <Portal.Root>
          {DrawerTransition(
            (style, item) =>
              item && (
                <animated.div
                  style={style}
                  data-testid="sds_drawer"
                  className={classNames('sds_drawer', {
                    'sds_drawer--noOverlay': hideOverlay,
                    [customClassName as string]: customClassName,
                  })}
                  onClick={handleOnClose}
                  ref={ref}
                  {...rest}
                >
                  {DrawerCardTransition(
                    (style, item) =>
                      item && (
                        <animated.div
                          data-testid="sds_drawer_card"
                          className={classNames('sds_drawer_card', {
                            [`sds_drawer_card--${position}`]: position,
                          })}
                          style={{
                            maxWidth,
                            ...style,
                          }}
                        >
                          {header}
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
  { Header, Content, Footer }
);
