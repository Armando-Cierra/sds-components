import React from 'react';
import type { WizardHeaderTitleProps } from './types';

export const HeaderTitle = React.forwardRef<
  HTMLDivElement,
  WizardHeaderTitleProps
>(({ children, ...rest }, ref) => {
  return (
    <div className="sds_wizard_header_content_title" ref={ref} {...rest}>
      {children}
    </div>
  );
});
