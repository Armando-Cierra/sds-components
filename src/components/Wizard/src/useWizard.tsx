import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { Header } from './Header';
import useMediaQuery from './utils';
import { Step } from './Step';
import { Icon } from './Icon';
import type { StepsList, useWizardProps } from './types';
import uniqid from 'uniqid';
import classNames from 'classnames';

export const useWizard = ({ children, selectedStep }: useWizardProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(false);
  const shouldShowMobileMenu = useMediaQuery('(max-width: 767px)');
  const shouldCollapseMenu = useMediaQuery('(max-width: 1023px)');

  const [stepsHistory, setStepsHistory] = useState(selectedStep);
  const stepsChildrenContent: ReactElement[] = [];
  const stepsContent: ReactElement[] = [];
  const stepsHeader: ReactElement[] = [];
  const stepsFooter: ReactElement[] = [];

  useEffect(() => {
    setIsMobileMenuClosed(shouldCollapseMenu);
  }, [shouldCollapseMenu]);

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

      stepsChildrenContent.push((step as ReactElement).props.children);
    }
  });

  stepsChildrenContent.flat().forEach((item) => {
    if (item.type === Content) stepsContent.push(item);
    if (item.type === Footer) {
      stepsFooter.push(
        cloneElement(item, {
          children: item.props.children,
        })
      );
    }
    if (item.type === Header) stepsHeader.push(item);
  });

  const handleClick = (onClick: () => unknown, isDisabled: boolean) => () => {
    if (!isDisabled) {
      if (shouldShowMobileMenu && !!onClick) {
        setIsMobileMenuClosed(true);
      }
      onClick?.();
    }
  };

  const closingMenus = (e: MouseEvent) => {
    const classes = (e?.target as HTMLElement)?.classList;

    if (!classes || !classes.length) return;

    const isHeaderButton = classes.contains('sds_wizard_header_button');
    const isNavbarStep = classes.contains('sds_wizard_navbar_step');
    const isDesktopNavbar = classes.contains('sds_wizard_desktopNavbar');

    if (isHeaderButton) {
      setIsMobileMenuClosed(!isMobileMenuClosed);
    } else if (
      shouldCollapseMenu &&
      !shouldShowMobileMenu &&
      !isNavbarStep &&
      !isDesktopNavbar
    ) {
      setIsMobileMenuClosed(true);
    }
  };

  const closingMenusWithKeyboard = (e: KeyboardEvent) => {
    if (e.code !== 'Escape') return;

    if (shouldCollapseMenu) {
      setIsMobileMenuClosed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closingMenus);
    document.addEventListener('keydown', closingMenusWithKeyboard);

    return () => {
      document.removeEventListener('click', closingMenus);
      document.removeEventListener('keydown', closingMenusWithKeyboard);
    };
  }, [shouldShowMobileMenu, isMobileMenuClosed]);

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

  const getStepsContent = () => {
    return (
      <>
        {stepsList.map((step) => {
          const { className, id, isDisabled, title, onClick, rest } = step;
          const isCompleted = shouldAddCompletedIcon(id);
          return (
            <div
              key={uniqid('sds_wizard_navbar_step_')}
              data-testid="sds_wizard_step"
              className={classNames('sds_wizard_navbar_step', {
                [className as string]: className,
                'sds_wizard_navbar_step--selected': id === selectedStep,
                'sds_wizard_navbar_step--disabled': isDisabled,
                'sds_wizard_navbar_step--completed': isCompleted,
              })}
              onClick={handleClick(onClick, !!isDisabled)}
              {...rest}
            >
              {selectedStep === id && (
                <Icon
                  className="sds_wizard_navbar_step_icon--selected"
                  iconName="dot"
                />
              )}
              {isCompleted && (
                <Icon
                  className="sds_wizard_navbar_step_icon--completed"
                  iconName="completed"
                />
              )}
              <span>{title}</span>
            </div>
          );
        })}
      </>
    );
  };

  const getDesktopItems = () => {
    return (
      <>
        {stepsList.map((step, index) => {
          const { onClick, isDisabled, id } = step;
          index += 1;
          return (
            <div key={index} style={{ width: '100%' }}>
              {isMobileMenuClosed && (
                <div
                  onClick={handleClick(onClick, !!isDisabled)}
                  className={classNames('sds_wizard_item', {
                    'sds_wizard_item--active': id === selectedStep,
                    'sds_wizard_item--disabled': isDisabled,
                  })}
                >
                  {shouldAddCompletedIcon(id) ? (
                    <Icon
                      className="sds_wizard_navbar_step_icon--completed "
                      style={{ margin: 0 }}
                      iconName="completed"
                    />
                  ) : (
                    <div onClick={handleClick(onClick, !!isDisabled)}>
                      {index}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  if (stepsList.length < 1) {
    throw new Error('Use at least one Wizard.Step subcomponent');
  }

  if (stepsFooter.length !== stepsList.length) {
    throw new Error('Use the Wizard.Footer subcomponent in each Wizard.Step');
  }

  useEffect(() => {
    setStepsHistory((prevState) => {
      if (selectedStep > prevState) return selectedStep;
      return prevState;
    });
  }, [selectedStep]);

  return {
    desktopItems: getDesktopItems(),
    steps: getStepsContent(),
    stepsList,
    stepsHeader,
    stepsContent,
    stepsFooter,
    stepsHistory,
    shouldShowMobileMenu,
    isMobileMenuClosed,
    setIsMobileMenuClosed,
    handleClick,
    shouldAddCompletedIcon,
  };
};
