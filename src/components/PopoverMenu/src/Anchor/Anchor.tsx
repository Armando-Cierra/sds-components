import React from 'react';

export const Anchor = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      data-testid="sds_popoverMenu_trigger"
      className="sds_popoverMenu_trigger"
    >
      {children}
    </div>
  );
};
