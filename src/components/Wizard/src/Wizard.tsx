import React, { forwardRef } from 'react';
import { Step } from './Step';
import { Header } from './Header';
import { HeaderTitle } from './HeaderTitle';
import { HeaderActions } from './HeaderActions';
import { Button } from '../../Button';
import { useWizard } from './useWizard';
import { WizardDesktopNav } from './DesktopNav';
import { WizardMobileNav } from './MobileNav';
import { ReviewStepSection } from './ReviewStepSection';
import { Footer } from './Footer';
import { Content } from './Content/Content';
import type { WizardProps } from './types';
import classNames from 'classnames';
import './wizard.scss';

export const Wizard = Object.assign(
  forwardRef<HTMLDivElement, WizardProps>(
    (
      {
        children,
        className: customClassName,
        selectedStep,
        heading = 'Wizard Title',
        ...rest
      },
      ref
    ) => {
      const {
        steps,
        stepsList,
        stepsHeader,
        stepsContent,
        shouldShowMobileMenu,
        stepsFooter,
        isMobileMenuClosed,
        desktopItems,
        setIsMobileMenuClosed,
      } = useWizard({ children, selectedStep });

      if (!stepsList || stepsList.length === 0) {
        throw new Error(
          'Please use at least one of the Wizard.Step subcomponents'
        );
      }

      return (
        <div
          ref={ref}
          {...rest}
          data-testid="sds_wizard"
          className={classNames('sds_wizard', {
            [customClassName as string]: customClassName,
          })}
        >
          <div className="sds_wizard_header">
            <div className="sds_wizard_header_title">
              <Button
                className="sds_wizard_header_button"
                variant="ghost"
                iconOnly="menu-bars--fill"
              />
              {!shouldShowMobileMenu && (
                <span className="sds_wizard_title">{heading}</span>
              )}
            </div>
            {stepsHeader[selectedStep - 1]}
          </div>

          <div className="sds_wizard_container">
            {shouldShowMobileMenu ? (
              <WizardMobileNav
                heading={heading}
                steps={steps}
                isMobileMenuClosed={isMobileMenuClosed}
                setIsMobileMenuClosed={setIsMobileMenuClosed}
              />
            ) : (
              <WizardDesktopNav
                desktopItems={desktopItems}
                steps={steps}
                isMobileMenuClosed={isMobileMenuClosed}
              />
            )}
            {stepsContent[selectedStep - 1]}
          </div>
          {stepsFooter[selectedStep - 1]}
        </div>
      );
    }
  ),
  {
    Step,
    Footer,
    Content,
    Header,
    HeaderTitle,
    HeaderActions,
    Button,
    ReviewStepSection,
  }
);
