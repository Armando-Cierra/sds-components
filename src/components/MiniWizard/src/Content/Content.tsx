import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { MiniWizardContentProps } from './types';

export const Content = forwardRef<HTMLDivElement, MiniWizardContentProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={classNames('sds_miniWizard_content', {
          [customClassName as string]: customClassName,
        })}
      >
        {children}
      </div>
    );
  }
);
