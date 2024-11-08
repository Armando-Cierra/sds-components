import React, { forwardRef } from 'react';
import type { MiniWizardStepProps } from './types';

export const Step = forwardRef<HTMLDivElement, MiniWizardStepProps>(
  ({ title, children, isDisabled, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="sds_miniWizard_step"
        data-title={title}
        data-disabled={isDisabled}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
