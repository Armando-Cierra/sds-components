import React from 'react';
import classNames from 'classnames';
import type { ModalHeaderProps } from './types';

export const Header = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  (
    { className: customClassName, hideCloseButton = false, onClose, children },
    ref
  ) => {
    return (
      <div
        data-testid="sds_modal_header"
        className={classNames('sds_modal_header', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
      >
        {children}
        {!hideCloseButton && onClose && (
          <div
            className="sds_modal_header_closeButton"
            onClick={() => onClose?.()}
          >
            <svg
              className="sds_modal_header_closeButton_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m8 9.414 3.536 3.536 1.414-1.414L9.414 8l3.536-3.535-1.414-1.415L8 6.586 4.465 3.05 3.05 4.465 6.586 8 3.05 11.536l1.415 1.414L8 9.414Z" />
            </svg>
          </div>
        )}
      </div>
    );
  }
);
