import React from 'react';
import classNames from 'classnames';
import type { ModalContentProps } from './types';

export const Content = React.forwardRef<HTMLDivElement, ModalContentProps>(
  (
    { className: customClassName, children, hasPadding = false, ...rest },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_modal_content', {
          'sds_modal_content--hasPadding': hasPadding,
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_modal_content"
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
