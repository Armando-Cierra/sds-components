import { isValidElement, ReactElement, useEffect, useState } from 'react';
import { Step } from './Step';
import { Content } from './Content';
import { Footer } from './Footer';
import type { UseMiniWizardProps, StepsList } from './types';
import useMediaQuery from './utils';
import classNames from 'classnames';
import React from 'react';
import uniqid from 'uniqid';
import { Icon } from './Icon';

export const useMiniWizard = ({
  children,
  selectedStep,
  isOpen,
  completedStepsBehavior,
}: UseMiniWizardProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const shouldShowMobileMenu = useMediaQuery('(max-width: 767px)');
  const [isMobileMenuClosed, setIsMobileMenuClosed] =
    useState(shouldShowMobileMenu);

  useEffect(() => {
    if (!shouldShowMobileMenu) {
      setIsMobileMenuClosed(true);
    }
  }, [shouldShowMobileMenu]);

  const [stepsHistory, setStepsHistory] = useState(1);
  const stepsChildrenContent: ReactElement[] = [];
  const stepsContent: ReactElement[] = [];
  const stepsFooter: ReactElement[] = [];

  const stepsList: StepsList[] = [];
  childrenArray.forEach((step, index) => {
    if (isValidElement(step) && step.type === Step) {
      const { title, isDisabled, onClick, className, ...rest } = (
        step as ReactElement
      ).props;

      stepsList.push({
        id: index + 1,
        title: title,
        isDisabled: isDisabled,
        onClick: onClick,
        className: className,
        rest: rest,
      });
      //Captures the step content into a static const because the content won't change
      stepsChildrenContent.push((step as ReactElement).props.children);
    }
  });

  stepsChildrenContent.flat().forEach((item) => {
    if (item.type === Content) stepsContent.push(item);
    if (item.type === Footer) stepsFooter.push(item);
  });

  const handleClick = (onClick: () => unknown, isDisabled: boolean) => () => {
    if (!isDisabled) {
      setIsMobileMenuClosed(true);
      onClick?.();
    }
  };

  const shouldAddCompletedIcon = (stepId: number) => {
    const isWithinValidRange = stepId < stepsList.length;
    const isStepEnabled = !stepsList[stepId]?.isDisabled;
    const isPrevStepEnabled = !stepsList[stepId - 1]?.isDisabled;
    const isNotSelectedAndWithinHistory =
      selectedStep !== stepId && stepId < stepsHistory;

    if (isWithinValidRange && isStepEnabled && isPrevStepEnabled) {
      return isNotSelectedAndWithinHistory;
    }
    return false;
  };

  useEffect(() => {
    if (completedStepsBehavior === 'resetAtClosing' && isOpen === false) {
      setStepsHistory(1);
    }

    if (completedStepsBehavior === 'notResetingAtClosing') {
      setStepsHistory(selectedStep);
    }
  }, [isOpen]);

  const currentStepTitle = stepsList.map((step) => step.title)[
    selectedStep - 1
  ];

  if (stepsList.length < 1) {
    throw new Error('Use at least one MiniWizard.Step subcomponent');
  }

  if (stepsFooter.length !== stepsList.length) {
    throw new Error(
      'Use the MiniWizard.Footer subcomponent in each MiniWizard.Step'
    );
  }

  const getSteps = () => {
    return (
      <>
        {stepsList.map((step) => (
          <div
            key={uniqid('sds_miniWizard_navbar_step_')}
            data-testid="sds_miniWizard_step"
            className={classNames('sds_miniWizard_navbar_step', {
              [step.className as string]: step.className,
              'sds_miniWizard_navbar_step--selected': step.id === selectedStep,
              'sds_miniWizard_navbar_step--disabled': step.isDisabled,
              'sds_miniWizard_navbar_step--completed': shouldAddCompletedIcon(
                step.id
              ),
            })}
            onClick={handleClick(step.onClick, !!step.isDisabled)}
            {...step.rest}
          >
            {selectedStep === step.id && (
              <Icon
                className="sds_miniWizard_navbar_step_icon--selected"
                iconName="dot"
              />
            )}
            {shouldAddCompletedIcon(step.id) && (
              <Icon
                className="sds_miniWizard_navbar_step_icon--completed"
                iconName="completed"
              />
            )}
            <span>{step.title}</span>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    setStepsHistory((prevState) => {
      if (selectedStep > prevState) return selectedStep;
      return prevState;
    });
  }, [selectedStep]);

  return {
    steps: getSteps(),
    stepsList,
    stepsContent,
    stepsFooter,
    stepsHistory,
    shouldShowMobileMenu,
    isMobileMenuClosed,
    currentStepTitle,
    setIsMobileMenuClosed,
    handleClick,
    shouldAddCompletedIcon,
  };
};
