import React from 'react';
import type { WizardHeaderActionsProps } from './types';

export const HeaderActions = React.forwardRef<
  HTMLDivElement,
  WizardHeaderActionsProps
>(({ children, ...rest }, ref) => {
  return (
    <div className="sds_wizard_header_content_actions" ref={ref} {...rest}>
      {children}
    </div>
  );
});
