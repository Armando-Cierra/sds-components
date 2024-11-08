import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';
import type { WizardMobileNavProps } from './types';

export const WizardMobileNav = ({
  steps,
  isMobileMenuClosed,
  heading,
  setIsMobileMenuClosed,
}: WizardMobileNavProps) => {
  return (
    <div data-testid="sds_wizard_mobileNav" className="sds_wizard_navContainer">
      <div
        className={classNames('sds_wizard_navbar', {
          'sds_wizard_navbar--hidden': !isMobileMenuClosed,
        })}
      >
        <div className="sds_wizard_navbar_title">
          <Button
            onClick={() => setIsMobileMenuClosed(true)}
            variant="ghost"
            className="sds_wizard_arrow-icon"
            iconOnly="arrow-from-right--line"
          />
          <span className="sds_wizard_title">{heading}</span>
        </div>
        <div className="sds_wizard_steps">{steps}</div>
      </div>
      <div
        onClick={() => setIsMobileMenuClosed(true)}
        className={classNames({
          sds_wizard_overlay: !isMobileMenuClosed,
        })}
      ></div>
    </div>
  );
};
