import React from 'react';
import classNames from 'classnames';
import type { ModalFooterProps } from './types';

export const Footer = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_modal_footer"
        className={classNames('sds_modal_footer', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
