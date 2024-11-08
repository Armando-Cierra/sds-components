import React from 'react';
import classNames from 'classnames';
import * as Portal from '@radix-ui/react-portal';
import { animated } from '@react-spring/web';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { useModal } from './useModal';
import type { ModalProps } from './types';
import './modal.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/modal)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/modal-976xt7?file=/src/App.tsx:1,1)
*/

export const Modal = Object.assign(
  React.forwardRef<HTMLDivElement, ModalProps>(
    (
      {
        className: customClassName,
        children,
        isOpen = false,
        maxWidth = '656px',
        height = 'auto',
        onClose,
        position = 'top',
        ...rest
      },
      ref
    ) => {
      const {
        handleOnClose,
        ModalTransition,
        ModalCardTransition,
        header,
        content,
        footer,
        validatedMaxWidth,
        hasCustomHeight,
      } = useModal({
        isOpen,
        onClose,
        children,
        maxWidth,
        height,
      });

      if (!content) {
        throw new Error(
          'The <Modal.Content> subcomponent is required to render the component'
        );
      }
      return (
        <Portal.Root data-testid="sds_modal" data-is_visible={isOpen}>
          {ModalTransition(
            (style, item) =>
              item && (
                <animated.div
                  data-testid="sds_modal_container"
                  style={style}
                  className={classNames('sds_modal', {
                    [customClassName as string]: customClassName,
                  })}
                  onClick={handleOnClose}
                  ref={ref}
                  {...rest}
                >
                  {ModalCardTransition(
                    (style, item) =>
                      item && (
                        <animated.div
                          className={classNames('sds_modal_card', {
                            'sds_modal_card--center': position === 'center',
                            'sds_modal_card--customHeight': hasCustomHeight,
                          })}
                          style={{
                            ...style,
                            maxWidth: validatedMaxWidth,
                            height,
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
  {
    Header,
    Content,
    Footer,
  }
);
