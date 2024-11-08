import React from 'react';
import type { WizardDesktopNavProps } from './types';
import classNames from 'classnames';

export const WizardDesktopNav = ({
  steps,
  isMobileMenuClosed,
  desktopItems,
}: WizardDesktopNavProps) => {
  return (
    <div
      data-testid="sds_wizard_desktopNavBar"
      className={classNames('sds_wizard_desktopNavbar', {
        'sds_wizard_desktopNavbar--collapsed': !isMobileMenuClosed,
      })}
    >
      {!isMobileMenuClosed ? steps : desktopItems}
    </div>
  );
};
