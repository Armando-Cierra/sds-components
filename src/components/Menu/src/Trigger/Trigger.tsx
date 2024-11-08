import React from 'react';

export const Trigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="sds_menu_trigger" className="sds_menu_trigger">
      {children}
    </div>
  );
};
