import React, { forwardRef } from 'react';
import type { MiniWizardFooterProps } from './types';

export const Footer = forwardRef<HTMLDivElement, MiniWizardFooterProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={`sds_miniWizard_footer ${customClassName}`}
      >
        {children}
      </div>
    );
  }
);
