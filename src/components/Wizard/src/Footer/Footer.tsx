import React, { forwardRef } from 'react';
import type { WizardFooterProps } from './types';
import classNames from 'classnames';

export const Footer = forwardRef<HTMLDivElement, WizardFooterProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={classNames('sds_wizard_footer', {
          [className as string]: className,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
