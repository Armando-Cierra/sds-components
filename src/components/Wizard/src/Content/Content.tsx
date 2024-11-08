import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { WizardContentProps } from './types';

export const Content = forwardRef<HTMLDivElement, WizardContentProps>(
  ({ className: customClassName, hasPadding, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={classNames('sds_wizard_content', {
          'sds_wizard_content--hasPadding': hasPadding,
          [customClassName as string]: customClassName,
        })}
      >
        {children}
      </div>
    );
  }
);
