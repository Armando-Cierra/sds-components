import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Modal } from '../../Modal';
import { Step } from './Step';
import { Content } from './Content';
import { Footer } from './Footer';
import { Button } from '../../Button';
import { useMiniWizard } from './useMiniWizard';
import type { MiniWizardProps } from './types';
import { ReviewStepSection } from './ReviewStepSection';
import './mini-wizard.scss';

export const MiniWizard = Object.assign(
  forwardRef<HTMLDivElement, MiniWizardProps>(
    (
      {
        className: customClassName,
        heading,
        children,
        selectedStep,
        isOpen,
        completedStepsBehavior = 'resetAtClosing',
        ...rest
      },
      ref
    ) => {
      const {
        steps,
        stepsContent,
        stepsFooter,
        shouldShowMobileMenu,
        currentStepTitle,
        isMobileMenuClosed,
        setIsMobileMenuClosed,
      } = useMiniWizard({
        children,
        selectedStep,
        isOpen,
        completedStepsBehavior,
      });

      return (
        <Modal
          className={classNames('sds_miniWizard', {
            [customClassName as string]: customClassName,
          })}
          maxWidth="912px"
          height="100%"
          isOpen={isOpen}
          ref={ref}
          {...rest}
        >
          <Modal.Header>{heading}</Modal.Header>
          <Modal.Content className="sds_miniWizard_body">
            {shouldShowMobileMenu && (
              <div className="sds_miniWizard_mobileContainer">
                <Button
                  onClick={() => setIsMobileMenuClosed(!isMobileMenuClosed)}
                  variant="ghost"
                  iconOnly="menu-bars--fill"
                />
                <div className="sds_miniWizard_mobileContainerTitle">
                  {currentStepTitle}
                </div>
              </div>
            )}
            <div
              className="sds_miniWizard_container"
              data-testid="sds_miniWizard"
            >
              <div
                className={classNames('sds_miniWizard_navbar', {
                  'sds_miniWizardNavbar--visible':
                    isMobileMenuClosed || !shouldShowMobileMenu,
                })}
              >
                {steps}
              </div>
              {stepsContent[selectedStep - 1]}
              <div
                onClick={() => setIsMobileMenuClosed(true)}
                className={classNames({
                  sds_miniWizard_overlay:
                    !isMobileMenuClosed && shouldShowMobileMenu,
                })}
              ></div>
            </div>
          </Modal.Content>
          <Modal.Footer
            className="sds_miniWizard_footer"
            {...stepsFooter[selectedStep - 1]?.props}
          >
            {stepsFooter[selectedStep - 1]}
          </Modal.Footer>
        </Modal>
      );
    }
  ),
  {
    ReviewStepSection,
    Step,
    Content,
    Footer,
    Button,
  }
);
