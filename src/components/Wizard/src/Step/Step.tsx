import React, { forwardRef } from 'react';
import type { WizardStepProps } from './types';

export const Step = forwardRef<HTMLDivElement, WizardStepProps>(
  ({ title, ...rest }, ref) => {
    return (
      <div {...rest} ref={ref}>
        <span>{title}</span>
      </div>
    );
  }
);
